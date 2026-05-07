<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		class?: string;
		style?: string;
		priority?: boolean; // Si es true, carga eager en vez de lazy
	}

	let { src, alt, width, height, class: className, style, priority = false }: Props = $props();

	let isLoaded = $state(false);
	let imageRef: HTMLImageElement | undefined;

	$effect(() => {
		if (!imageRef || priority) return;

		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && imageRef) {
						imageRef.src = src;
						observer.unobserve(imageRef);
						isLoaded = true;
					}
				},
				{ rootMargin: '50px' }
			);

			observer.observe(imageRef);

			return () => observer.disconnect();
		} else {
			// Fallback para navegadores sin IntersectionObserver
			imageRef.src = src;
			isLoaded = true;
		}
	});
</script>

<img
	bind:this={imageRef}
	src={priority ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
	{alt}
	{width}
	{height}
	class={`lazy-image ${className || ''}`}
	{style}
	loading={priority ? 'eager' : 'lazy'}
	decoding="async"
/>

<style>
	.lazy-image {
		transition: opacity 0.3s ease-in-out;
	}

	.lazy-image[src*='data:image'] {
		opacity: 0.5;
		filter: blur(5px);
	}
</style>
