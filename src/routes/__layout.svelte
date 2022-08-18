<script>
	import Hed from '$lib/layout/Hed.svelte';
	import Foot from '$lib/layout/Foot.svelte';
	// import Editor from "$lib/editor.NOUSE";
</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="/css/main.css"/> -->
</svelte:head>

<main>
	<Hed />
	<div class="content">
		<slot />
	</div>
</main>
<Foot />

<!-- <Editor/> -->
<style lang="scss" global>
	@import './../style/global.scss';
	main {
		position: relative;
		min-height: inherit;
		box-sizing: border-box;

		/* background-color: var(--body-color); */
		z-index: 1;
		// padding: 8px;

		display: flex;
		flex-flow: column nowrap;
		align-items: stretch;
		align-content: stretch;
		height: 100%;
	}

	main .content {
		padding: 0px 0px 0px 0px;
	}
</style>
