<script lang="ts">
	interface Props {
		src: string;
		class?: string;
		style?: string;
		autoplay?: boolean;
		loop?: boolean;
		muted?: boolean;
		playsinline?: boolean;
	}

	let { src, class: className, style, autoplay = true, loop = true, muted = true, playsinline = true }: Props = $props();

	let isInView = $state(false);
	let videoRef: HTMLVideoElement | undefined;
	let hasLoaded = $state(false);

	$effect(() => {
		if (!videoRef) return;

		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver(
				(entries) => {
					const entry = entries[0];
					isInView = entry.isIntersecting;

					if (entry.isIntersecting && !hasLoaded && videoRef) {
						videoRef.src = src;
						hasLoaded = true;
						if (autoplay) {
							videoRef.play().catch(() => {
								// El navegador puede no permitir autoplay
							});
						}
						observer.unobserve(videoRef);
					}
				},
				{ rootMargin: '100px' }
			);

			observer.observe(videoRef);

			return () => observer.disconnect();
		} else {
			// Fallback para navegadores sin IntersectionObserver
			videoRef.src = src;
			hasLoaded = true;
		}
	});

	function handleIntersection() {
		if (isInView && autoplay && videoRef) {
			videoRef.play().catch(() => {
				// El navegador puede no permitir autoplay
			});
		}
	}
</script>

<video
	bind:this={videoRef}
	class={`lazy-video ${className || ''}`}
	{style}
	{autoplay}
	{loop}
	{muted}
	{playsinline}
	preload="metadata"
	onvisibilitychange={handleIntersection}
>
	<track kind="captions" />
	Your browser does not support the video tag.
</video>

<style>
	.lazy-video {
		width: 100%;
		height: auto;
		display: block;
		background: #000;
	}
</style>
