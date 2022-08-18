<script>
    let groups = [
        {
            title: "Implemented",
            style: "implemented",
            items: [
                {title: "Nothing", group: "core", blurb: "We've barely Started"}
            ]
        },
        {
            title: "In Progress",
            style: "prog",
            items: [
                {title: "Canonical Parser", group: "core", blurb: "Everything else relies on this"},
                {title: "VADA CLI", group: "core", blurb: "Just for basic data validation at first."},
            ]
        },
        {
            title: "Soon",
            style: "soon",
            items: [
                {title: "VSCode Language Server Extension", group: "ide", blurb: "Part of the core MVP"},
                {title: "CLI JSON Output", group: "core", blurb: "Primarily for config gen"},
                {title: "CLI YAML Output", group: "core", blurb: "Might be expanded into sub-tasks for docker/k8 specific outputs"},
                {title: "CLI Basic Binary Output", group: "core", blurb: "For the @repr goodness"},
                {title: "WebASM Compile Target", group:"tooling", blurb:"For the web REPL implementation"}
            ]
        },
        {
            title: "Soon™",
            style: "never",
            items: [
                {title: "Generic Language Server", group: "ide", blurb: "We've barely Started"},
                {title: "JSON Ingest", group: "tooling", blurb: "We've barely Started"},
                {title: "TOML Ingest", group: "tooling", blurb: "We've barely Started"},
                {title: "MessagePack Ingest", group: "tooling", blurb: "We've barely Started"}
            ]
        },
        {
            title: "Under Revision",
            style: "refact",
            items: [

            ]
        },
        {
            title: "Wishlist",
            style: "never",
            items: [

            ]
        }
    ]
    let active = groups[0].items[0];
</script>

<div class="caution">
    <div class="hed"/>
    <div class="inner">
        Under Construction.
    </div>
</div>

<div class="map-hed dark">

    <div>
        <h2>Current Stage: Experimental</h2>
        <span>We Haven't Even Hit Alpha Yet</span>
    </div>

    <ul>
        <li>Expect changes</li>
        <li>Expect inconsistencies</li>
        <li>Expect vague and non-rigorous claims</li>
        <li>Do not expect the interpreter to compile on your system</li>
        <li>Do not expect coherent error messages</li>
        <li>Do not expect intelligible comments</li>
    </ul>
</div>

<div class="wrapper">
    <div class="rm-outer">
        {#each groups as group}
            <div class="group">
                    <h3>{group.title}</h3>
                {#each group.items as item}
                    <div class="rm-item {item.group}" on:click={() => active = item} class:active={active == item}>
                        <span>{item.title}</span>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    <div class="blurb-outer">
        <h3>{active.title}</h3>
        <p>{active.blurb}</p>
    </div>
</div>

<style lang="scss">
    @import "src/style/variables";
    .map-hed {
        margin: 0px 8px;        
        margin-bottom: 8px;
        padding: 16px;

        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 2em;
        }

        li {
            margin-inline-start: 32px;
        }
    }
    .wrapper {
        display: flex;
        justify-content: flex-end;
        margin:8px;
    }

    .blurb-outer {
        position: sticky;
        top: 8px;
        height: calc(100vh - 16px);
        background-color: $wine-light;
        box-shadow: 0px 2px 6px 0px #00000066, 0px 0px 8px 0px #00000044 inset;

        width: 50%;
        // max-height: 200px;
        padding: 32px;
        outline: $wine-outline solid 1px;
        margin-left: 32px;
    }
    .rm-outer {
        padding: 4px;
        width: fit-content;
        // min-width: 300px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .rm-outer h3 {
        font-size: 1.35em;
        padding:0px;
        margin: 0px;
        text-align: right;
    }

    .group {
        padding-left: 35px;
        border-right: 8px solid yellowgreen;
        padding: 0px 40px 8px 0px;

    }

    .rm-item {
        border-right: 2.5px solid white;
        min-height: 50px;
        max-width: 200px;
        position: relative;
        display: flex;
        align-items: center;
        background-color: #333;
        margin: 0px 8px 4px 0px;
        padding: 8px 4px 8px 8px;

        /* outline: 1px solid yellowgreen; */
    }

    .rm-item::before {
        content:"";
        position: absolute;
        left:100%;
        top: 50%;
        margin-top:-25px;
        border-width: 25px;
        border-style: solid;
        border-color: transparent transparent transparent white;
        /* You get some weird overhangs at specific window widths without this */
        z-index: -1; 
    }

    .rm-item::after {
        content:"";
        position: absolute;
        left:100%;
        top: 50%;
        margin-top:-22px;
        border-width: 22px;
        border-style: solid;
        border-color: transparent transparent transparent #333;
    }

    .rm-item.active  {
        background-color: #555;
        box-shadow: 0px 2px 6px 0px #00000066;

    }

    .rm-item.active::after {
        border-color: transparent transparent transparent #555;
    }

    .core {
        border-color: cyan;
    }
    .core::before {
        border-color: transparent transparent transparent cyan;
    }

    .ide {
        border-color: yellow;
    }
    .ide::before {
        border-color: transparent transparent transparent yellow;
    }

    .tooling {
        border-color: greenyellow;
    }
    .tooling::before {
        border-color: transparent transparent transparent greenyellow;
    }
</style>