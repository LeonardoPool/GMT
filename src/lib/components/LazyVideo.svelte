<script lang="ts">
	import { tick } from 'svelte';

	interface Props {
		src: string;
		class?: string;
		style?: string;
		autoplay?: boolean;
		loop?: boolean;
		muted?: boolean;
		playsinline?: boolean;
		controls?: boolean;
	}

	let { src, class: className, style, autoplay = true, loop = true, muted = true, playsinline = true, controls = false }: Props = $props();

	let videoElement: HTMLVideoElement;
	let hasPrepared = false;
	let shouldPlay = false;

	function waitForCanPlay() {
		return new Promise<void>((resolve) => {
			if (!videoElement || videoElement.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
				resolve();
				return;
			}

			videoElement.addEventListener('canplay', () => resolve(), { once: true });
		});
	}

	async function playVideoOnHover() {
		shouldPlay = true;
		await tick();
		if (!autoplay || !videoElement) return;

		if (!hasPrepared) {
			hasPrepared = true;
			videoElement.preload = 'auto';
			videoElement.load();
		}

		await waitForCanPlay();
		if (!shouldPlay || !videoElement) return;

		videoElement.play().catch(() => {
			// Autoplay can be blocked by the browser; keep the video ready without surfacing an error.
		});
	}

	function pauseVideo() {
		shouldPlay = false;
		if (!videoElement) return;
		videoElement.pause();
	}
</script>

<video
	bind:this={videoElement}
	{src}
	class={className || ''}
	{style}
	{loop}
	{muted}
	{playsinline}
	{controls}
	preload="metadata"
	onpointerenter={() => void playVideoOnHover()}
	onpointerleave={pauseVideo}
	onfocus={() => void playVideoOnHover()}
	onblur={pauseVideo}
>
	Tu navegador no soporta videos HTML5.
</video>

<style>
	video {
		width: 100%;
		height: 100%;
		display: block;
		background: #000;
		object-fit: cover;
		border-radius: inherit;
	}
</style>
