<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        as: Component = 'button',
        class: className = '',
        color = 'white',
        speed = '1s',
        thickness = 7,
        children,
        ...rest
    }: {
        as?: string;
        class?: string;
        color?: string;
        speed?: string;
        thickness?: number;
        children?: Snippet;
        [key: string]: any;
    } = $props();
</script>

<svelte:element
    this={Component}
    class="star-border-container {className}"
    style="padding: {thickness}px; {rest.style || ''}"
    {...rest}
>
    <div
        class="border-gradient-bottom"
        style="background: radial-gradient(circle, {color}, transparent 10%); animation-duration: {speed};"
    ></div>
    <div
        class="border-gradient-top"
        style="background: radial-gradient(circle, {color}, transparent 10%); animation-duration: {speed};"
    ></div>
    <div class="inner-content">
        {@render children?.()}
    </div>
</svelte:element>

<style>
    .star-border-container {
        display: inline-block;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
    }

    .border-gradient-bottom {
        position: absolute;
        width: 300%;
        height: 50%;
        opacity: 0.7;
        bottom: -12px;
        right: -250%;
        border-radius: 50%;
        animation: star-movement-bottom linear infinite alternate;
        z-index: 0;
        pointer-events: none;
    }

    .border-gradient-top {
        position: absolute;
        opacity: 0.7;
        width: 300%;
        height: 50%;
        top: -12px;
        left: -250%;
        border-radius: 50%;
        animation: star-movement-top linear infinite alternate;
        z-index: 0;
        pointer-events: none;
    }

    .inner-content {
        position: relative;
        background: inherit;
        color: inherit;
        border-radius: inherit;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    @keyframes star-movement-bottom {
        0% {
            transform: translate(0%, 0%);
            opacity: 1;
        }
        100% {
            transform: translate(-100%, 0%);
            opacity: 0;
        }
    }

    @keyframes star-movement-top {
        0% {
            transform: translate(0%, 0%);
            opacity: 1;
        }
        100% {
            transform: translate(100%, 0%);
            opacity: 0;
        }
    }
</style>
