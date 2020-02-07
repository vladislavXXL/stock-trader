<template>
    <div class="component">
        This is content for red template
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Red"
    }
</script>

<style scoped>
    div.component {
        background-color: lightcoral;
    }
</style>