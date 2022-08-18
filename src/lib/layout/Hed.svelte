<script>
    import IconButton from '$lib/stubs/IconButton.svelte';
    import DocumentText from '@svicons/heroicons-solid/document-text.svelte';
    import Home from '@svicons/heroicons-solid/home.svelte';
    import Map from '@svicons/heroicons-solid/map.svelte';
    import InformationCircle from '@svicons/heroicons-solid/information-circle.svelte';
    import Sparkles from '@svicons/heroicons-solid/sparkles.svelte';
</script>

<div class="hed dark">
    <div class="hed-inner">
        <div class="left">
            <a href="/" id="logo">V<span>ada</span>   </a>
        </div>
        <div class="center">
        </div>
        <div class="right">
            <div class='butrow'>
                <IconButton target="/tour">
                    <Sparkles width="1.5em"/>
                    <span>Tour</span>
                </IconButton>
                <IconButton target="/docs">
                    <DocumentText width="1.5em"/>
                    <span>Docs</span>
                </IconButton>
                <IconButton target="/roadmap">
                    <Map width="1.5em"/>
                    <span>Roadmap</span>
                </IconButton>


                <IconButton target="/about">
                    <InformationCircle width="1.5em"/>
                    <span>About</span>
                </IconButton>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .hed {
        margin: 8px;
    }
    .hed-inner {
        /* background-color: #333; */
        /* outline: #777 solid 1px; */
        box-shadow: 0px 0px 8px 0px #00000044;
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: space-between;

        box-sizing: border-box;
        overflow-y: hidden;
        overflow-x: auto;
        scrollbar-width: none;  /* Firefox */

    }

    .hed-inner::-webkit-scrollbar {
        display: none;
    }

    .hed-inner .left {
        display: flex;
        padding: 4px 0px 8px 8px;
    }

    .hed-inner .left a {

        color: unset;
        text-decoration: none;
        transition: background-color 400ms;
        border-radius: 0px;
        padding: 0px;

        // img {
        //     width: 48px;
        //     margin: -10px;
        //     // height: 32px;
        // }
    }

    .hed-inner .left a::after {
        display: block;
        content:"";
        width: 50%;
        height: 2px;
        background-color: white;
        margin: 0px;
        transition: width 400ms;
    }

    .hed-inner .left a:hover::after {
        width: 100%;
    }

    .hed-inner .left a {
        font-family: 'Inter', sans-serif;
        font-size: 2.5em;
        font-weight: 800;
        display: inline;
        line-height: 1;
        letter-spacing: 0px;
        span {
            font-variant: small-caps;
            margin-left: -6px;
        }
    }

    .hed-inner .right {
        padding: 0px 16px 0px 8px;
        display: flex;
    }

    .hed-inner .right .butrow {
        display: flex;
        flex-direction: row;
    }


</style>