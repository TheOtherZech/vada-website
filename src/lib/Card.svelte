<script lang="ts">
    export let kind ="";
</script>

<div class={`card ${kind}`}>
    <div class="hed"></div>
    <div class="inner">
        <slot></slot>
    </div>
</div>