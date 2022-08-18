<script lang="ts">
import Tab from "./Tab.svelte";

    export let tabs = [ {title: "", slug: ""}  ];
    export let group = "jimbly"
    let manualStyle = "";
    for (let i = 0; i < tabs.length; i++) {
        manualStyle += ` #${tabs[i].slug}:checked ~ * .${tabs[i].slug} { visibility: visible; } `
    }

    let active = 0;
</script>

<div class="tb-outer">
    {#each tabs as tab, i}
        <input type="radio" id={`rad${i}-${group}`} class={`rad${i}`} name={group} value={tab.title} checked={i==0}>
        <label for={`rad${i}-${group}`}>{tab.title}</label>
    {/each}
    <br>
    <div class="body">
        <slot></slot>        
    </div>
</div>

<style lang="scss">
    @import 'src/style/variables';
    .tb-outer {
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        min-width: 460px;

        :global(.shiki) {
            margin-top: 0px;
        }

        input[type="radio" i] {
            appearance: auto;
            position: fixed;
            opacity: 0;
            pointer-events: none;
        }

        label {
            background-color: $mint-darker;
            cursor: pointer;
            padding: 2px 8px;
            margin: 0px;
            box-sizing: content-box;
            display: block;

            outline-offset: 0px;
            font-family: "fira code";
            color: $text-fade;
        }

        input[type="radio" i]:checked + label {
            background-color: $mint-mid;
            box-shadow: 0px -2px 0px 0px $mint-outline inset;
            color: $text-primary;
        }

        .body {
            margin: 0px;
            box-sizing: border-box;
            width: 100%;
        }

        :global(.block0), :global(.block1), :global(.block2), :global(.block3), :global(.block4) {
            visibility: collapse;
            display: none;
        }
        .rad0:checked ~ .body :global(.block0) {
            visibility: visible;
            display: block;
        }
        .rad1:checked ~ .body :global(.block1) {
            visibility: visible;
            display: block;
        }
        .rad2:checked ~ .body :global(.block2) {
            visibility: visible;
            display: block;
        }
        .rad3:checked ~ .body :global(.block3) {
            visibility: visible;
            display: block;
        }
        .rad4:checked ~ .body :global(.block4) {
            visibility: visible;
            display: block;
        }

    }


</style>