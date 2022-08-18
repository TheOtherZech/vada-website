<script context="module" lang="ts">
    const mdComponents = Object.entries(import.meta.glob(
        "$lib/md/docs/*.svx",
        {eager: true}) as Record<string, { default: object, metadata: {chunks: any}}>);
</script>

{#each mdComponents as section}
    <svelte:component this={section[1].default}/>
{/each}