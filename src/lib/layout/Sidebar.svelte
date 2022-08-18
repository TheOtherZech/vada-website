
<script>
    import IconButton from '$lib/stubs/IconButton.svelte';
    import DocumentText from '@svicons/heroicons-solid/document-text.svelte';
    import Home from '@svicons/heroicons-solid/home.svelte';
    import InformationCircle from '@svicons/heroicons-solid/information-circle.svelte';
</script>
<div class="sidebar">
    <div class="hed">
        <a href="/" id="logo"><h1>VADA</h1></a>
        <!-- <span>The Data Composition Language</span> -->
        <div class='butrow'>
            <IconButton target="/">
                    <Home width="1.25em"/>
            </IconButton>
            <IconButton target="/">
                <DocumentText width="1.25em"/>
            </IconButton>
            <IconButton target="/about">
                <InformationCircle width="1.25em"/>
            </IconButton>
        </div>
        
    </div>
    <div class="body">
        <slot></slot>
    </div>
</div>


<style>
    .sidebar {
        height: calc(100vh - 16px);
        background-color: #333;
        box-shadow: 0px 2px 6px 0px #00000066;
        padding: 0px;
        flex-grow: 0;
        min-width: 96px;
        /* max-width: 100px; */
        /* width: 96px; */
    }


    .sidebar .hed {
        display: flex;
        align-items: stretch;
        flex-direction: column;
        padding: 0px;
    }
    .sidebar .hed a {
        
        color: unset;
        text-decoration: none;
        transition: background-color 400ms;
        border-radius: 0px;
        padding: 4px;
        /* margin-bottom: 4px; */
    }

    .sidebar .hed a::after {
        display: block;
        content:"";
        width: 50%;
        height: 2px;
        background-color: aliceblue;
        margin: 0px;
        transition: width 400ms;
    }

    .sidebar .hed a:hover {
        background-color: #00000066;
    }

    .sidebar .hed a:hover::after {
        width: 100%;
    }

    .sidebar .hed h1 {
        font-family: 'Iosevka Aile Web', sans-serif;
        font-size: 3em;
        font-weight: 800;
        display: inline;
        line-height: 1;
    }

    .sidebar .hed .butrow {
        padding: 0px 4px 0px 4px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    /* .sidebar .hed span {
        padding: 4px;
        font-size: 0.75em;
    } */

    .sidebar .body {
        padding: 8px;
    }

    .sidebar .body :global(p) {
        margin: 0px;
    }
</style>