<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// const mdComponents = Object.entries(
	// 	import.meta.glob('$lib/md/tour/*.svx', { eager: true }) as Record<
	// 		string,
	// 		{ default: object; metadata: { chunks: any } }
	// 	>
	// );
</script>

{#each mdComponents as section}
	<svelte:component this={section[1].default} />
{/each}
