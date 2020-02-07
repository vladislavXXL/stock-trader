<template>
    <div class="component">
        This is content for Green template
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Green"
    }
</script>

<style scoped>
    div.component {
        background-color: lightgreen;
    }
</style>