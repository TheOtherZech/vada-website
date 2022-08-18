<script lang="ts">
	import Outline from '$lib/layout/Outline.svelte';
	import { afterUpdate } from 'svelte';

	function buildOutline(target: HTMLCollection) {
		let sections: Section[] = [];
		for (let i = 0; i < target.length; i++) {
			if (target[i].tagName.toLocaleLowerCase() == 'section') {
				sections.push({
					title: target[i].children[0].innerHTML,
					target: target[i].children[0].id,
					children: buildOutline(target[i].children)
				});
			}
		}
		return sections;
	}

	let sections: Section[];
	let ready = false;

	afterUpdate(() => {
		ready = false;
		const body = document.getElementsByClassName('article')[0].children;
		sections = buildOutline(body);
		ready = true;
		console.log('Outline Updated');
	});
</script>

<div class="two-col">
	<div class="outline">
		{#if ready}
			<Outline {sections} />
		{/if}
	</div>

	<div class="article" id="root">
		<slot />
	</div>
	<!-- <div class="outline">
        {#if ready}
            <Outline sections={sections}/>
        {/if}
    </div> -->
</div>
