<script lang="ts">
    import { goto } from '$app/navigation';

    import ChevronRight from '@svicons/heroicons-solid/chevron-right.svelte';
    import ChevronDown from '@svicons/heroicons-solid/chevron-down.svelte';

    export let target = "someID";
    export let title = "Some Section";
    export let children: Section[];
    export let indent = 0;
    export let depth = 0;
    export let active = {element: target};

    let open = depth < 1;
    let show_expando = (depth > -1) && (children.length > 0);

    function navOrOpen() {
        // console.log(active.element);
        if (active.element != target) {
            active.element = target;
            let lastPos = window.scrollY;
            goto(`#${target}`)

            let scrolling = true;
            let i = setInterval(
                () => {
                    if (scrolling == false) {
                        console.log("Stopping Scroll");
                        clearInterval(i);
                        addEventListener('scroll', (event) => {
                                if (active.element == target) {
                                    active.element = "";
                                }
                            }, {once: true} );
                    }
                    scrolling = (lastPos != window.scrollY);
                    lastPos = window.scrollY;
                },
                150
            );
        }
        else {
            open = !open;
        }
    }

    function toggleOpen() {
        open = !open;
    }

</script>

<div class="section"  
    class:top={indent <= 0} 
    class:has-children={children.length > 0} >
    <div class="left" style="padding-left: {indent}px">
    {#if show_expando}
        <button on:click={toggleOpen} >
        {#if open}
            <ChevronDown width="18px"/>
        {:else}
            <ChevronRight width="18px"/>
        {/if}
        </button>
    {:else}
        <br>
    {/if}
    </div>

    <div class="right"  >
        <span 
            class:dot={ (depth > 0) && (children.length > 0) == false}
            >
            <button on:click={navOrOpen}
            class="nav"
            class:highlight={active.element == target}
            > 
            {@html title}
        </button>
        </span>


        <!-- <a class="nav" href="#{target}"
        class:dot={ (depth > 0) && (children.length > 0) == false}

        >
            {@html title}
        </a> -->
        {#if children.length > 0}
        <div class="children" class:open={open}>
            {#each children as child}
                <svelte:self {...child} indent={indent + 2} depth={depth + 1} bind:active/>
            {/each}
        </div>
        {/if}
    </div>

</div>

<style lang="scss">
    @import 'src/style/variables';
    .section {
        text-decoration: none;
        overflow: visible;
        display: flex;
    }

    .section .left br {
        display: block;
        width: 16px;
        height: 16px;
        content: "";
    }

    .section .left button {
        padding: 2px 16px 0px 0px;
        width: 16px;
        height: 1.5em;
        margin-left:0px;
        background-color: unset;
        cursor: pointer;
    }

    .section .left button:hover {
        background-color: $wine-dark;
    }

    .section .right {
        display: flex;
        flex-direction: column;
        flex-grow: 2;
    }

    .section .right .nav {
        font-family: 'Iosevka Aile Web', sans-serif;
        font-size: 0.95em;
        background-color: unset;
        border: unset;
        cursor: pointer;
        text-align: left;

        background-color: unset;
        border: none;

        text-decoration: none;
        margin-left: 0px;
        padding: 2px 8px;
        flex-grow: 8;
    }

    .section .nav:hover {
        background-color: $wine-outline;
        
    }

    .section.top {
        margin-bottom: 6px;

    }

    .section.top > .row .nav {
        text-transform: uppercase;

    }

    .left {
        display: block;
    }

    .children {
        height: 0px;
        overflow: hidden;
        padding: 0px 0px 0px 0px;
    }

    .children.open {
        height: auto;
        padding: 0px 0px 4px 0px;
    }

    .dot {
        display: list-item;
    }

    .dot::marker {
        content: '•\200a';
        
    }

    .highlight {
        box-shadow: 0px 1px 0px 0px $wine-highlight;
    }
</style>