<script>
	export let slug = '';
	export let hed = '';
	export let small = false;
	export let decorate = '';
	let open = false;
</script>

<div class={`fold-outer ${decorate}`} class:open class:small>
	<div class="hed">
		{#if small}
			<button on:click={() => (open = !open)}>Side note</button>
		{:else}
			<button on:click={() => (open = !open)}>
				<span><h4 id={slug}>{hed}</h4></span>
			</button>
		{/if}
	</div>
	<section class="inner" class:open>
		<slot />
	</section>
</div>

<style lang="scss">
	@import 'src/style/variables';
	.fold-outer {
		// position: absolute;
		right: 8px;
		z-index: 2;
		background-color: $wine-light;
		border-left: 2px solid $wine-outline;
		box-shadow: 0px 4px 8px 0px #00000066;

		overflow: clip;
		height: min-content;
		transition: box-shadow 200ms;

		margin: 0px;
	}

	.fold-outer:hover {
		box-shadow: 0px 4px 12px 4px #00000066;
	}

	.fold-outer.open {
		height: max-content;
	}

	.hed {
		position: relative;
		display: flex;
		align-items: center;

		// box-shadow: 0px 4px 2px 0px #00000044;
	}

	.hed:before {
		content: '';
		position: absolute;
		display: flex;
		// right:100%;
		// top: 50%;
		margin-top: 0px;
		margin-left: 0px;
		border-width: 26px;
		border-style: solid;
		border-color: transparent transparent transparent $wine-outline;
		pointer-events: none;
	}

	.hed > button {
		margin: auto;
		background-color: unset;
		display: flex;
		padding: 16px 48px;
		text-align: center;
		align-items: center;
		justify-content: center;
		flex-grow: 8;

		height: 48px;
		box-sizing: border-box;
	}

	.hed > button > span {
		display: flex;
		justify-content: center;
	}

	.hed > button > span::before,
	.hed > button > span::after {
		display: inline-block;
		padding: 0px 8px;
		font-size: 1.4em;
		line-height: 1;
	}

	.hed > button:hover {
		cursor: pointer;
		padding: 16px 24px;
	}

	.hed > button:hover > span::after {
		display: inline-block;
		content: '↓';
	}
	.hed > button:hover > span::before {
		display: inline-block;
		content: '↓';
	}

	.fold-outer.open > .hed > button:hover > span::after {
		display: inline-block;
		content: '↑';
	}
	.fold-outer.open > .hed > button:hover > span::before {
		display: inline-block;
		content: '↑';
	}

	.hed > button h4 {
		text-align: center;
		padding: 0px;
		font-size: initial;
	}

	.inner {
		padding: 0px;
		margin: 0px;
		height: 0px;
		transition: height 300ms;
		visibility: hidden;
		display: none;
	}

	.inner.open {
		height: max-content;
		visibility: visible;
		padding: 8px 16px 4px 16px;
		display: block;
		// margin: 4px;
	}

	.fold-outer.small {
		box-shadow: 0px 2px 2px 0px #00000066;

		.hed {
			justify-content: center;
			button {
				font-family: 'Fira Code';
				font-size: 1em;
				line-height: 0.5;
				padding: 16px 16px;
				justify-content: left;
			}
			button::before {
				display: none;
			}
			button::after {
				content: '';
			}
			button:hover::after {
				content: '...';
				font-size: 1em;
				line-height: 0.5;
				padding: 0px 0px;
			}
		}
		.hed::before {
			display: none;
		}
	}

	.fold-outer.small.open {
		.hed {
			button {
				padding: 16px 16px;
				justify-content: left;
			}
			button::before {
				display: none;
			}
			button:hover::after {
				content: '...';
				font-size: 1em;
				line-height: 0.5;
				padding: 0px 0px;
			}
		}
		.hed::before {
			display: none;
		}

		// .hed::after {
		//     content:"";
		//     position: absolute;
		//     bottom: 2px;
		//     height: 1px;
		//     width: 50%;
		//     // background-color: $wine-outline;
		//     background-image: linear-gradient(
		//         90deg,
		//         transparent,
		//         $wine-outline 50%,
		//         transparent 100%
		//     );
		// }
	}
</style>
