<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        name: "Result",
        props: {
            counter: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>