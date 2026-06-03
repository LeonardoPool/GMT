<script lang="ts">
    import { onMount } from 'svelte';

    interface Props {
        position?: 'top' | 'bottom' | 'left' | 'right';
        strength?: number;
        height?: string;
        width?: string;
        divCount?: number;
        exponential?: boolean;
        zIndex?: number;
        animated?: boolean | 'scroll';
        duration?: string;
        easing?: string;
        opacity?: number;
        curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
        responsive?: boolean;
        target?: 'parent' | 'page';
        preset?: 'top' | 'bottom' | 'left' | 'right' | 'subtle' | 'intense' | 'smooth' | 'sharp' | 'header' | 'footer' | 'sidebar' | 'page-header' | 'page-footer';
        hoverIntensity?: number;
        onAnimationComplete?: () => void;
        class?: string;
        style?: string;
        [key: string]: any;
    }

    interface Config {
        position: 'top' | 'bottom' | 'left' | 'right';
        strength: number;
        height: string;
        width: string;
        divCount: number;
        exponential: boolean;
        zIndex: number;
        animated: boolean | 'scroll';
        duration: string;
        easing: string;
        opacity: number;
        curve: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
        responsive: boolean;
        target: 'parent' | 'page';
        hoverIntensity: number;
    }

    let {
        position = undefined,
        strength = undefined,
        height = undefined,
        width = undefined,
        divCount = undefined,
        exponential = undefined,
        zIndex = undefined,
        animated = undefined,
        duration = undefined,
        easing = undefined,
        opacity = undefined,
        curve = undefined,
        responsive = undefined,
        target = undefined,
        preset = undefined,
        hoverIntensity = undefined,
        onAnimationComplete = undefined,
        class: className = '',
        style = '',
        ...restProps
    }: Props = $props();

    const PRESETS = {
        top: { position: 'top', height: '6rem' },
        bottom: { position: 'bottom', height: '6rem' },
        left: { position: 'left', height: '6rem' },
        right: { position: 'right', height: '6rem' },
        subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
        intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },
        smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
        sharp: { height: '5rem', curve: 'linear', divCount: 4 },
        header: { position: 'top', height: '8rem', curve: 'ease-out' },
        footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
        sidebar: { position: 'left', height: '6rem', strength: 2.5 },
        'page-header': { position: 'top', height: '10rem', target: 'page', strength: 3 },
        'page-footer': { position: 'bottom', height: '10rem', target: 'page', strength: 3 }
    } as const;

    const DEFAULT_CONFIG = {
        position: 'bottom',
        strength: 2,
        height: '6rem',
        width: '',
        divCount: 5,
        exponential: false,
        zIndex: 1000,
        animated: false,
        duration: '0.3s',
        easing: 'ease-out',
        opacity: 1,
        curve: 'linear',
        responsive: false,
        target: 'parent',
        hoverIntensity: 0
    } as const;

    const CURVE_FUNCTIONS = {
        linear: (p: number) => p,
        bezier: (p: number) => p * p * (3 - 2 * p),
        'ease-in': (p: number) => p * p,
        'ease-out': (p: number) => 1 - Math.pow(1 - p, 2),
        'ease-in-out': (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
    } as const;

    const config = $derived.by<Config>(() => {
        const presetConfig = preset && PRESETS[preset] ? PRESETS[preset] : {};
        const passedProps = {
            position, strength, height, width, divCount, exponential, zIndex,
            animated, duration, easing, opacity, curve, responsive, target, hoverIntensity
        };
        const filteredProps = Object.fromEntries(
            Object.entries(passedProps).filter(([_, v]) => v !== undefined)
        );
        return { ...DEFAULT_CONFIG, ...presetConfig, ...filteredProps } as any;
    });

    let windowWidth = $state(typeof window !== 'undefined' ? window.innerWidth : 1024);
    let isScrolled = $state(false);

    onMount(() => {
        const handleResize = () => {
            windowWidth = window.innerWidth;
        };
        const handleScroll = () => {
            isScrolled = window.scrollY > 10;
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const responsiveHeight = $derived.by(() => {
        if (!config.responsive) return config.height;
        if (windowWidth <= 480 && (restProps as any).mobileHeight) return (restProps as any).mobileHeight;
        if (windowWidth <= 768 && (restProps as any).tabletHeight) return (restProps as any).tabletHeight;
        if (windowWidth <= 1024 && (restProps as any).desktopHeight) return (restProps as any).desktopHeight;
        return config.height;
    });

    const responsiveWidth = $derived.by(() => {
        const w = config.width;
        if (!config.responsive) return w;
        if (windowWidth <= 480 && (restProps as any).mobileWidth) return (restProps as any).mobileWidth;
        if (windowWidth <= 768 && (restProps as any).tabletWidth) return (restProps as any).tabletWidth;
        if (windowWidth <= 1024 && (restProps as any).desktopWidth) return (restProps as any).desktopWidth;
        return w;
    });

    let isVisible = $state(true);

    $effect(() => {
        if (config.animated === 'scroll') {
            isVisible = false;
        } else {
            isVisible = true;
        }
    });

    const activeOpacity = $derived.by(() => {
        if (!isVisible) return 0;
        if (config.animated === 'scroll' || config.target === 'page') {
            return isScrolled ? config.opacity : 0;
        }
        return config.opacity;
    });

    function observeIntersection(node: HTMLElement) {
        if (config.animated !== 'scroll') return;
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        }, { threshold: 0.1 });
        observer.observe(node);
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }

    $effect(() => {
        if (isVisible && config.animated === 'scroll' && onAnimationComplete) {
            const ms = parseFloat(config.duration) * 1000;
            const t = setTimeout(() => onAnimationComplete(), ms);
            return () => clearTimeout(t);
        }
    });

    let isHovered = $state(false);

    const blurDivs = $derived.by(() => {
        const divs = [];
        const increment = 100 / config.divCount;
        const currentStrength = isHovered && config.hoverIntensity 
            ? config.strength * config.hoverIntensity 
            : config.strength;
        
        const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;
        
        for (let i = 1; i <= config.divCount; i++) {
            let progress = i / config.divCount;
            progress = curveFunc(progress);
            
            let blurValue;
            if (config.exponential) {
                blurValue = Math.pow(2, progress * 4) * 0.0625 * currentStrength;
            } else {
                blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
            }
            
            const p1 = Math.round((increment * i - increment) * 10) / 10;
            const p2 = Math.round(increment * i * 10) / 10;
            const p3 = Math.round((increment * i + increment) * 10) / 10;
            const p4 = Math.round((increment * i + increment * 2) * 10) / 10;
            
            let gradient = `transparent ${p1}%, black ${p2}%`;
            if (p3 <= 100) gradient += `, black ${p3}%`;
            if (p4 <= 100) gradient += `, transparent ${p4}%`;
            
            const direction = getGradientDirection(config.position);
            
            const styleStr = `
                position: absolute;
                inset: 0;
                mask-image: linear-gradient(${direction}, ${gradient});
                -webkit-mask-image: linear-gradient(${direction}, ${gradient});
                backdrop-filter: blur(${blurValue.toFixed(3)}rem);
                -webkit-backdrop-filter: blur(${blurValue.toFixed(3)}rem);
                opacity: ${config.opacity};
                transition: ${config.animated && config.animated !== 'scroll' ? `backdrop-filter ${config.duration} ${config.easing}, -webkit-backdrop-filter ${config.duration} ${config.easing}` : 'none'};
            `;
            divs.push({ style: styleStr, id: i });
        }
        return divs;
    });

    function getGradientDirection(pos: string) {
        switch (pos) {
            case 'top': return 'to top';
            case 'bottom': return 'to bottom';
            case 'left': return 'to left';
            case 'right': return 'to right';
            default: return 'to bottom';
        }
    }

    const containerStyle = $derived.by(() => {
        const isVertical = ['top', 'bottom'].includes(config.position);
        const isHorizontal = ['left', 'right'].includes(config.position);
        const isPageTarget = config.target === 'page';
        
        let s = `
            position: ${isPageTarget ? 'fixed' : 'absolute'};
            pointer-events: ${config.hoverIntensity ? 'auto' : 'none'};
            opacity: ${activeOpacity};
            transition: opacity 0.3s ease-out, ${config.animated ? `opacity ${config.duration} ${config.easing}` : 'none'};
            z-index: ${isPageTarget ? config.zIndex + 100 : config.zIndex};
        `;
        
        if (isVertical) {
            s += `
                height: ${responsiveHeight};
                width: ${responsiveWidth || '100%'};
                ${config.position}: 0;
                left: 0;
                right: 0;
            `;
        } else if (isHorizontal) {
            s += `
                width: ${responsiveWidth || responsiveHeight};
                height: 100%;
                ${config.position}: 0;
                top: 0;
                bottom: 0;
            `;
        }
        
        if (style) {
            s += `; ${style}`;
        }
        return s;
    });
</script>

<div
    use:observeIntersection
    class="gradual-blur {config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} {className}"
    style={containerStyle}
    onmouseenter={config.hoverIntensity ? () => (isHovered = true) : undefined}
    onmouseleave={config.hoverIntensity ? () => (isHovered = false) : undefined}
    {...restProps}
>
    <div class="gradual-blur-inner">
        {#each blurDivs as div (div.id)}
            <div style={div.style}></div>
        {/each}
    </div>
</div>

<style>
    .gradual-blur {
        isolation: isolate;
        pointer-events: none;
    }
    
    .gradual-blur-inner {
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    .gradual-blur-inner > div {
        -webkit-backdrop-filter: inherit;
        backdrop-filter: inherit;
    }
    
    @supports not (backdrop-filter: blur(1px)) {
        .gradual-blur-inner > div {
            background: rgba(0, 0, 0, 0.3);
            opacity: 0.5;
        }
    }
</style>
