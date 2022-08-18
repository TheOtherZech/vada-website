<script lang="ts">
	export let kind = '';
</script>

<div class={`card ${kind}`}>
	<div class="hed" />
	<div class="inner">
		<slot />
	</div>
</div>
