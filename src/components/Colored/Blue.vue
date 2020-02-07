<template>
    <div class="component">
        <slot name="text"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Blue"
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        background-color: lightblue;
        height: 140px;
        margin: 20px auto;
        padding-top: 37px;
        text-align: center;
    }
</style>