<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import '../lib/styles/travelgo.css';

	let { children } = $props();
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
