<script lang="ts">
    import ContactHeader from '$lib/components/ContactHeader.svelte';

    let { children } = $props();
</script>

<ContactHeader />
{@render children()}