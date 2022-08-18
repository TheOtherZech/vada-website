<script>
    import SimpleExample from "$lib/md/code_samples/SimpleExample.svx";
    import MathExample from "$lib/md/code_samples/MathExample.svx";
    import ControlFlowExample from "$lib/md/code_samples/ControlFlowExample.svx";

    import TabBlock from "$lib/TabBlock.svelte";

    import ExternalLink from "@svicons/heroicons-solid/external-link.svelte";
</script>

<div class="content">
    <div class="top-blurb">
        <p>
            <strong>Vada</strong> is the hackable <strong>data composition language</strong> built
            for <strong>creating</strong>, <strong>validating</strong>,
            and <strong>transforming</strong> data artifacts.
        </p>

    </div>
    <div class="top-links">
        <a href="https://www.github.com/TheOtherZech/Vada" rel="external noreferrer nofollow" target="_blank">
            <button >
                <span>Visit the Repo</span>    
                <ExternalLink width="1em"/>
            </button>
        </a>
    </div>
    <div class="caution">
        <div class="hed">
        </div>
        <div class="inner">
            Under construction. Heavy construction.
        </div>
    </div>
    <div class="col2">
        <div class="left">
            <h3>Focused, Yet Flexible</h3>
            <p>
                Vada exists to solve a very specific set of problems for the video game
                industry:
            </p>
            <ol>
                <li>
                    Building binary data artifacts from hierarchical archives containing
                    <strong>thousands</strong> of heterogenous entity records.
                </li>
                <li>
                    Handling the <strong>incremental evolution</strong> of record
                    schemas throughout the lifetime of a project.
                </li>
                <li>
                    Ensuring <strong>consistent data constraints</strong> in ways
                    that offer clear and immediate feedback for both designers 
                    and developers.
                </li>
            </ol>
            <p>
                That means that Vada is built to handle <strong>complex</strong>
                and <strong>diverse</strong> data sets <strong>at scale</strong> and 
                <strong>over time</strong> in ways that facilitate 
                <strong>cross-disciplinary collaboration</strong>.
            </p>
            <p>
                Vada isn't just YAML with functions and imports, or a serialization format
                with some extra bells and whistles.
            </p>
            <p>
                Vada is an <strong>ecosystem</strong> for building <strong>data artifacts</strong>
                that can handle everything from <strong>entity record collections</strong> to
                <strong>dynamic configuration management</strong>.
            </p>
        </div>
        <div class="right">
            <TabBlock group="A" tabs={ [ 
                {title: "simple_example.va", slug: "slug"},
                {title: "math.va", slug: "jim"},
                {title: "control_flow.va", slug: "frank"}, ]}>

                <div class="block0">
                    <SimpleExample/>
                </div>
                <div class="block1">
                    <MathExample/>
                </div>
                <div class="block2">
                    <ControlFlowExample/>
                </div>
                <div class="block3">
                    Another Placeholder
                </div>

            </TabBlock>

        </div>
    </div>
    <div class="col2" style="flex-direction: row-reverse">
        <div class="left">
            <h3>Topologically Empowered</h3>
            <p>
                Vada uses patterns of <strong>parallel construction</strong>
                and <strong>topological semantics</strong> in order to add
                layers of accessibility on top of complex data structures.
            </p>
            <p>
                Records are comprised of both <strong>fields</strong> and
                <strong>sections</strong>, with the latter providing
                <strong>query-like accessors</strong> that enable abstract
                topological traversals and transforms.
            </p>
            <p>
                Sections add <strong>semantics</strong> without forcing 
                <strong>hierarchy</strong>, enabling the construction of
                <strong>parallel access patterns</strong> across the topology
                of an archive.
            </p>
            <p>
                Sections also serve to <strong>intelligently handle</strong>
                the <strong>propagation of types and records</strong>, both 
                <strong>downwards</strong> into sub-modules and 
                <strong>upwards</strong> into manifests, using 
                <strong>parallel construction</strong>
                to <strong>prevent cyclical imports</strong>.
            </p>
        </div>

        <div class="right">
            <TabBlock group="B" tabs={ [ 
                {title: "simple_example.va", slug: "slug"},
                {title: "math.va", slug: "jim"},
                {title: "control_flow.va", slug: "frank"}, ]}>

                <div class="block0">
                    <SimpleExample/>
                </div>
                <div class="block1">
                    <MathExample/>
                </div>
                <div class="block2">
                    <ControlFlowExample/>
                </div>
                <div class="block3">
                    Another Placeholder
                </div>

            </TabBlock>

        </div>
    </div>
    <div class="col2">
        <div class="left">
            <h3>Functionally Inspired</h3>
            <p>
                Vada's Expression syntax focuses on <strong>array math</strong>
                and <strong>function chaining</strong>, using <strong>pipe operators</strong>
                to form readable <strong>lambda sequences</strong> without excessive parentheses.
            </p>
            <p>
                Taking inspiration from <strong><a href="https://cuelang.org/">CUE</a></strong>,
                Vada features a diverse set of <strong>unary prefix comparators</strong>, allowing
                for concise <strong>constraint expressions</strong>. When combined with Vada's 
                <strong>Rust-like range expressions</strong> and  <strong>inline control flow</strong>,
                these operators enable nuanced <strong>polymorphism</strong> without relying on 
                <strong>hierarchical inheritance</strong>.
            </p>
            <p>
                Vada's vector and matrix syntax borrows from MATLAB, with semicolon-separated
                columns and concise symbolic operators for inversion and transposition.
            </p>
        </div>
        <div class="right">
            <TabBlock group="C" tabs={ [ 
                {title: "simple_example.va", slug: "slug"},
                {title: "math.va", slug: "jim"},
                {title: "control_flow.va", slug: "frank"}, ]}>

                <div class="block0">
                    <SimpleExample/>
                </div>
                <div class="block1">
                    <MathExample/>
                </div>
                <div class="block2">
                    <ControlFlowExample/>
                </div>
                <div class="block3">
                    Another Placeholder
                </div>

            </TabBlock>
        </div>
    </div>
</div>
    

<style lang="scss">
    @import 'src/style/variables';
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 16px;
    }
    .top-blurb {
        padding: 0px 8px;
        font-size: 1.75em;
        font-weight: 400;
        text-align: center;
        max-width: 600px;

        strong {
            font-weight: 900;
        }

        p {
            margin: 0px;
        }
    }

    .top-links {
        margin: 16px 0px;
        display: flex;
        gap: 8px;
        a {
            text-decoration: none;
            color: black;
            
            
        }
        button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background-color: $mint-light;
            border-radius: 8px;

            font-family: 'inter';
            font-size: 1em;
            // font-weight: 600;
            color: black;
            cursor: pointer;
        }
    }

    p {
        margin: 0px 0px 24px 0px;
    }
    .col2 {
        display: flex;
        margin-bottom: 32px;
        gap: 16px;


    }

    .left {
        /* padding: 0px 16px; */
        flex-grow: 0;
        font-size: 16px;
        max-width: 500px;
        /* text-align: left; */
    }

    h3 {
        font-size: 1.5em;
    }

    .left p:last-child {
        margin: 0px 0px 0px 0px;
    }

    .right {
        padding: 0px;
        flex-grow: 0;
        max-width: 500px;
        /* max-width: 200px; */
    }

    li {
        margin-inline-start: 24px;
        margin-bottom: 16px;
    }

    @media only screen and (max-width: 850px) {
        .col2 {
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 8px;
        }

        .col2 .left {
            margin-bottom: 16px;
            max-width: 500px;
            padding: 0px 8px;
        }

        .col2 .right {
            max-width: 475px;
        }
    }
</style>

