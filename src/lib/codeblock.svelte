<script>
	import { onMount } from 'svelte';
	let block;
	onMount(() => {
		// let pres = document.querySelectorAll('pre');
		// for (let i = 0; i < pres.length; i++) {
		//     pres[i].innerText = pres[i].innerText.replace(/   /g, '♢')
		//     pres[i].innerHTML = pres[i].innerHTML.replace(/ /g, '<span> </span>')
		// }
	});
</script>

<div class="codeblock" bind:this={block}>
	<div class="linefill" />
	<slot>
		<pre>
<kw>@collection:</kw> <ref>PersonData</ref>

<sect>--- <kw>@Imports</kw></sect><op>:</op>
<op>&lt~</op> <ref
				><kw>@std</kw><op>::</op><ref>util</ref><op>::</op><schema>$</schema><op>.</op><enc>[</enc
				><schema>$utilSchema</schema><enc>]</enc></ref
			>

<sect>--- <kw>@Local</kw></sect><op>:</op>
<schema>$edType</schema><op>:</op> <str>"None"</str> <op>|</op> <str>"Highschool"</str> <op>|</op
			> <str>"Undergraduate"</str> <op>|</op> <str>"Graduate"</str>
<schema>$desc_string</schema><op>:</op> <type>!str</type> <op>&</op> <op>!=</op> <enc>""</enc>

<sect>--- <kw>@Public</kw></sect><op>:</op>
<schema>$personSchema</schema><op>:</op> <schema>$utilSchema</schema> <op>&</op> <enc>{`{`}</enc>
<div class="indent"><kw>@Doc</kw><op>::</op><ref>short</ref><op>:</op> <str
					>"A basic structure for person data"</str
				>

<sect>--- Basic:</sect>
<ref>name</ref><op>:</op> <schema>$desc_string</schema>
<ref>age</ref><op>:</op>  <type>!int</type> <op>&</op> <op>></op> <lit>0</lit>
<ref>address</ref><op>:</op> <kw>@Local</kw><op>::</op><schema>$addrStruct</schema> <op>|</op> <kw
					>@None</kw
				> <comment>// Words!</comment>

<sect>--- Experience</sect><op>:</op>
<ref>employer</ref><op>:</op> <enc>(</enc><type>!str</type> <op>&</op> <op>!=</op> <enc>""</enc><enc
					>)</enc
				> <op>|</op> <kw>@None</kw>
<ref>education</ref><op>:</op> <enc>[</enc><enc>(</enc><type>$edType</type>, <schema
					>$desc_string</schema
				><enc>)</enc>, ...<enc>]</enc>
<ref>certs</ref><op>:</op> <list
					><enc>[</enc><type>!str</type> <op>&</op> <op>!=</op> <enc>""</enc>, ...<enc>]</enc> <op
						>|</op
					> <kw>@None</kw></list
				>

<func>#score</func><op>:</op> <ref>certs</ref><op>-></op><func>#reduce(<kw>@sum</kw>)</func>
<div class="indent"><op>+</op> <ref>education</ref><op>-></op><func>#reduce:</func> <op>+</op> <ref
						><op>?</op>[_]:</ref
					>
<div class="indent"><str>"None"</str>          <op>?></op> <lit>0</lit>,
<str>"Highschool"</str>    <op>?></op> <lit>1</lit>,
<str>"Undergraduate"</str> <op>?></op> <lit>4</lit>,
<str>"Graduate"</str>      <op>?></op> <lit>6</lit></div></div><enc>{`}`}</enc>
</div></pre>
	</slot>
</div>

<style>
	.codeblock {
		will-change: transform;
		background-color: #333;
		outline: #777 solid 1px;
		box-shadow: 0px 0px 8px 0px #00000044 inset;
		/* border-radius: 0px; */
		padding: 12px 12px;
		font-size: 12px;

		/* white-space: pre; */
		overflow-x: scroll;
		position: relative;
		z-index: 1;

		width: 440px;
	}

	.codeblock > {
		white-space: pre;
	}

	.codeblock :global(div) {
		margin: 0px;
		padding: 0px;
	}

	.codeblock :global(pre) {
		margin: 0px;
		position: relative;
		z-index: 5;
		font-family: 'Fira Code', monospace;
	}

	.codeblock :global(schema) {
		color: greenyellow;
	}

	.codeblock :global(ref) {
		color: aliceblue;
	}

	.codeblock :global(type) {
		color: aqua;
	}

	.codeblock :global(lit) {
		color: yellow;
	}

	.codeblock :global(op) {
		color: coral;
	}

	.codeblock :global(sect) {
		color: #91dee0;
		text-decoration: underline;
	}

	.codeblock :global(kw) {
		color: violet;
	}

	.codeblock :global(enc) {
		color: bisque;
	}

	.codeblock :global(comment) {
		color: #bbb;
		font-style: italic;
	}

	.codeblock :global(func) {
		color: wheat;
		/* text-decoration: underline; */
	}

	.codeblock :global(.indent) {
		/* width:100%;
        height: 100%; */
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
		padding-left: 4ch;
		box-shadow: 0.5px 0px 0px 0px #444 inset;
	}

	.codeblock .linefill {
		/* font-family: 'Fira Code', monospace;
        font-size: 14px; */
		box-sizing: border-box;
		width: calc(100% - 48px);
		height: calc(100% - 32px);
		position: absolute;

		display: block;
		z-index: 0;
		/* background-image: repeating-linear-gradient(
        90deg,
        #ffffff10,
        #ffffff10 0.1ch,
        transparent 0.1ch,
        transparent 4ch); */
	}
</style>
