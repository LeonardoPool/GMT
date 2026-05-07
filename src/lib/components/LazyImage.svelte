<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width?: number | string;
		height?: number | string;
		class?: string;
		style?: string;
		priority?: boolean;
	}

	let { src, alt, width, height, class: className, style, priority = false }: Props = $props();
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	class={className || ''}
	{style}
	loading={priority ? 'eager' : 'lazy'}
	decoding="async"
/>
