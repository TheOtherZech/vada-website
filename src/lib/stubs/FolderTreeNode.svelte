<script lang="ts">
	import Folder from '@svicons/heroicons-solid/folder.svelte';
	import DocumentText from '@svicons/heroicons-solid/document-text.svelte';
	export let node: FileTreeElement;
</script>

<div class="node-outer" class:has-children={node.children.length > 0}>
	<div class="line">
		<span class="title">
			{#if node.kind == 'folder'}
				<Folder width="1em" />
			{:else if node.kind == 'file'}
				<DocumentText width="1em" />
			{/if}
			{node.title}
		</span>
		{#if 'comment' in node}
			<div class="comment">
				<span class="comment-inner">{node.comment}</span>
			</div>
		{/if}
	</div>

	{#if node.children.length > 0}
		<div class="indent">
			{#each node.children as child, i}
				<svelte:self node={child} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@import 'src/style/variables';
	.node-outer {
		min-width: 0px;
	}

	.line {
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	// .line:hover {
	//     box-shadow: 0px 1px 0px 0px $wine-highlight ;
	// }
	.line:hover::after {
		display: block;
		content: '';
		width: calc(100% - 20px);
		box-shadow: 0px 1px 0px 0px $wine-highlight;
	}

	.comment {
		width: max-content;
		position: absolute;
		left: 50%;
		margin-left: 3ch;
	}

	.comment-inner::before {
		display: inline;
		content: ' <- ';
		margin-left: -3ch;
	}
	.comment-inner {
		margin-left: 0ch;
		text-align: left;
		font-style: italic;
		font-size: 0.8em;
		color: #aaa;
		font-weight: 400;
		max-width: 200px;
	}
	span {
		margin: 0px;
		padding: 0px;
	}
	span.title {
		white-space: nowrap;
		flex-grow: 0;
		padding-left: 4px;
		width: 10px;
		max-width: 50%;
	}
	.indent {
		margin: 0px;
		margin-block-end: 0px;
		margin-block-start: 0px;
		margin-inline-end: 0px;
		margin-inline-start: 0px;
		margin-block: 0px;
		margin-inline: 0px;
		padding-inline-end: 0px;
		padding-inline-start: 0px;
		padding-block-start: 0px;
		padding: 0px;
		display: block;
		padding-left: 2ch;
		margin-left: 0.5ch;
		box-shadow: 0.5px 0px 0px 0px $wine-highlight inset;

		margin-bottom: 10px;
	}

	.has-children {
		margin-bottom: 0px;
	}
</style>
