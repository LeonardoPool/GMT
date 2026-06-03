<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import GradualBlur from '$lib/components/GradualBlur.svelte';
	import '../lib/styles/travelgo.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		document.documentElement.classList.add('js-enabled');
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div style="display: flex; flex-direction: column; min-height: 100vh;">
	<div style="flex: 1;">
		{@render children()}
	</div>
	<Footer />
</div>

<GradualBlur target="page" position="bottom" height="100px" zIndex={50} animated="scroll" responsive={true} />
