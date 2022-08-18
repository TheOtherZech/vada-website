<script lang="ts">
	import FolderTreeNode from './stubs/FolderTreeNode.svelte';
	export let tree: FileTreeElement;
</script>

<div class="tree-outer">
	<FolderTreeNode node={tree} />
</div>

<style lang="scss">
	@import 'src/style/variables';
	.tree-outer {
		white-space: pre-line;
		background-color: $card-dark;
		outline: $card-dark-outline;
		font-family: 'Fira Code', monospace;
		padding: 16px;
		margin: 8px 0px;
		overflow-x: auto;
	}
</style>
