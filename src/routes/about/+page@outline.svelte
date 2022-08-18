<script context="module" lang="ts">
	const mdComponents = Object.entries(
		import.meta.glob('$lib/md/about/*.svx', { eager: true }) as Record<
			string,
			{ default: object; metadata: { chunks: any } }
		>
	);
</script>

<svelte:head>
	<title>About Vada</title>
</svelte:head>

<script>
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('message', {
			text: 'Ready'
		});
	});
</script>

{#each mdComponents as section}
	<svelte:component this={section[1].default} />
{/each}
