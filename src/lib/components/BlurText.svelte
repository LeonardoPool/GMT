<script lang="ts">
    interface Props {
        as?: string;
        text?: string;
        animateBy?: 'words' | 'letters';
        direction?: 'top' | 'bottom';
        delay?: number;
        stepDuration?: number;
        threshold?: number;
        rootMargin?: string;
        class?: string;
        onAnimationComplete?: () => void;
        [key: string]: any;
    }

    let {
        as: Component = 'p',
        text = '',
        animateBy = 'words',
        direction = 'top',
        delay = 200,
        stepDuration = 0.35,
        threshold = 0.1,
        rootMargin = '0px',
        class: className = '',
        onAnimationComplete,
        ...rest
    }: Props = $props();

    let inView = $state(false);

    let segments = $derived(animateBy === 'words' ? text.split(' ') : text.split(''));

    function observeIntersection(node: HTMLElement) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    inView = true;
                    observer.disconnect();
                    
                    if (onAnimationComplete) {
                        const totalDelay = (segments.length - 1) * delay + (stepDuration * 1000);
                        setTimeout(onAnimationComplete, totalDelay);
                    }
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(node);
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }
</script>

<svelte:element
    this={Component}
    use:observeIntersection
    class="blur-text-container {className}"
    {...rest}
>
    {#each segments as segment, index}<span class="blur-segment {direction} {inView ? 'animate' : ''}" style="--delay: {index * delay}ms; --duration: {stepDuration}s; {animateBy === 'words' ? 'margin-right: 0.3em;' : ''}">{segment === ' ' ? '\u00A0' : segment}</span>{/each}
</svelte:element>

<style>
    .blur-text-container {
        display: flex;
        flex-wrap: wrap;
    }

    /* By default, text is fully visible (handles JS-disabled or failed runtime loads) */
    .blur-segment {
        display: inline-block;
        opacity: 1;
        will-change: transform, filter, opacity;
    }

    /* Only hide elements if JavaScript is active and client runtime loaded successfully */
    :global(.js-enabled) .blur-segment {
        opacity: 0;
        filter: blur(10px);
    }

    .blur-segment.top.animate {
        animation-name: blur-in-top;
        animation-duration: var(--duration);
        animation-fill-mode: forwards;
        animation-delay: var(--delay);
        animation-timing-function: ease-out;
    }

    .blur-segment.bottom.animate {
        animation-name: blur-in-bottom;
        animation-duration: var(--duration);
        animation-fill-mode: forwards;
        animation-delay: var(--delay);
        animation-timing-function: ease-out;
    }

    @keyframes -global-blur-in-top {
        0% {
            transform: translateY(-50px);
            filter: blur(10px);
            opacity: 0;
        }
        50% {
            transform: translateY(5px);
            filter: blur(5px);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 1;
        }
    }

    @keyframes -global-blur-in-bottom {
        0% {
            transform: translateY(50px);
            filter: blur(10px);
            opacity: 0;
        }
        50% {
            transform: translateY(-5px);
            filter: blur(5px);
            opacity: 0.5;
        }
        100% {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 1;
        }
    }
</style>
