<script lang="ts">
	import { setContext } from 'svelte';
	import OutlineSection from '$lib/stubs/OutlineSection.svelte';
	import ArrowLeft from '@svicons/heroicons-solid/arrow-left.svelte';
	import ArrowRight from '@svicons/heroicons-solid/arrow-right.svelte';
	import ArrowUp from '@svicons/heroicons-solid/arrow-up.svelte';
	import ExternalLink from '@svicons/heroicons-solid/external-link.svelte';
	export let sections: Section[];
	let expanded = true;
	let active = { element: 'root' };

	setContext('active', 'root');
</script>

<div class="outline" class:expanded>
	<div class="outline-inner dark" class:expanded>
		<div class="outline-hed">
			<button class="solid" on:click={() => (expanded = !expanded)} title="expand/collapse">
				<!-- <span>←</span> -->
				{#if expanded}
					<ArrowRight width="1em" />
				{:else}
					<ArrowLeft width="1em" />
				{/if}
			</button>
			<a href="#root">
				<button class="solid" title="scroll up">
					<ArrowUp width="1em" />
				</button>
			</a>
			<a href="#root">
				<button class="solid" title="edit source">
					<ExternalLink width="1em" />
				</button>
			</a>
		</div>
		<div class="outline-body">
			{#each sections as section}
				<OutlineSection {...section} bind:active />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import 'src/style/variables';
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		padding: 8px;
	}
	::-webkit-scrollbar-thumb {
		background-color: $wine-highlight;
		// border-radius: 4px;

		border: transparent;

		// box-shadow: 0px 0px 1px 3px $wine-light inset;
	}

	.outline {
		/* will-change: transform; */
		position: sticky;
		top: 8px;
		height: calc(100vh - 16px);
		width: 48px;
		z-index: 2;
		/* overflow: hidden; */
		transition: width 600ms;
		box-shadow: 4px 4px 8px 2px #00000055;
	}

	.outline.expanded {
		width: 300px;
	}

	.outline-inner {
		box-sizing: border-box;

		font-size: 0.95em;
		width: 48px;
		height: inherit;

		transition: width 600ms, background-color 500ms;
		overflow: hidden;
	}

	.outline-inner .outline-body {
		visibility: hidden;
		padding: 4px;
		height: calc(100vh - 64px);
	}

	.outline-inner.expanded {
		width: 300px;
	}

	.outline-inner.expanded .outline-body {
		overflow-y: scroll;
		scrollbar-width: thin;
		visibility: visible;
		box-sizing: border-box;
	}

	.outline-hed {
		padding: 4px 4px;
		box-shadow: 0px 0px 8px 0px #00000066;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.outline-hed button {
		height: 32px;
		width: 32px;
		align-items: center;
		justify-content: center;
		display: flex;
		margin: 4px;
	}

	@media only screen and (max-width: 700px) {
		.outline-inner {
			width: 48px;
			overflow: hidden;
			position: absolute;
			left: 0px;
		}

		.outline-inner .outline-body {
			visibility: hidden;
		}

		.outline-inner.expanded {
			width: 300px;
		}

		.outline-inner.expanded .outline-body {
			visibility: visible;
		}

		.outline {
			width: 48px;
		}

		.outline.expanded {
			width: 48px;
		}
	}
	@media only screen and (min-width: 700px) {
		.outline-inner {
			width: 48px;
			overflow: hidden;
			position: absolute;
			right: 0px;
		}
	}
</style>
