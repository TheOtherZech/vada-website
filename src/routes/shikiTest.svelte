<script>
	import TabBlock from '$lib/TabBlock.svelte';
	import highlighter from '$lib/util/highlighter';
	import { onMount } from 'svelte';
	import '$lib/style/tour.css';

	// setCDN('https://unpkg.com/shiki/');

	const test_string = `
someStruct: {
    name: "jim"
    age: 21
    hobbies: [
        {name: "stamp collecting", experience: 4},
        {name: "kyaking", experience: 2},
    ]
    stats: {
        strength: 4
        agility: 6
        intelligence: 3
        luck: 8
        charm: 1
    }
}

someList: [ 
    "jim";
    21;
    [ ["stamp collecting"; 4], ["kyaking"; 2] ];
    [4; 6; 3; 8; 1]
]

anotherList: [
    !string;
    !int;
    [ [!string; !int], ... ];
    [!int, !int, !int, !int, !int]
]

eq: someStruct->#valueList == someList //  @true
eq: someStruct->#valueList & anotherList == someList->#valueList // @true

someRecord: {
    --- sectionA:
    fieldA: 123
    fieldB: "abc"
    fieldC: (0.2, -0.05, 1.3)
    --- sectionB:
    fieldD: true
    fieldE: "jimmy"
}
`;
	const string2 = `
someString: "Number2"
`;

	const string3 = `
someString: "Number3"
`;
	let ready = false;
	let block = '';
	let block2 = '';
	let block3 = '';
	onMount(async () => {
		ready = false;
		block = await highlighter(test_string, 'vada', null);
		block2 = await highlighter(string2, 'vada', null);
		block3 = await highlighter(string3, 'vada', null);
		ready = true;
	});
</script>

<div style="padding: 16px;">
	<h1>This is Shiki Test</h1>
	<div>
		{#if ready}
			<TabBlock
				tabs={[
					{ title: 'first', slug: 'slug' },
					{ title: 'second', slug: 'jim' },
					{ title: 'third', slug: 'frank' }
				]}
			>
				<div class="block0">
					{@html block}
				</div>
				<div class="block1">
					{@html block2}
				</div>
				<div class="block2">
					{@html block3}
				</div>
			</TabBlock>
		{/if}
	</div>
</div>
