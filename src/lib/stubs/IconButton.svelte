<script>
    export let target ="/";
</script>

<a href={target}>
    <slot></slot>
</a>

<style lang="scss">
    @import 'src/style/variables';
    a {
        text-decoration: none;
        color: unset;
        transition: color 400ms;
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0px 0px 0px 8px;
    }

    a:hover {
        color: #aaa;
    }

    a :global(span) {
        padding: 0px 0px 0px 4px;
    }

</style>