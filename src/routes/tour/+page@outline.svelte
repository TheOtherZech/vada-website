<script context="module" lang="ts">
	const mdComponents = Object.entries(
		import.meta.glob('$lib/md/tour/*.svx', { eager: true }) as Record<
			string,
			{ default: object; metadata: { chunks: any } }
		>
	);
</script>

<svelte:head>
	<title>A Tour of Vada</title>
</svelte:head>

{#each mdComponents as section}
	<svelte:component this={section[1].default} />
{/each}
