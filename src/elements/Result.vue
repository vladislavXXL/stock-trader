<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        name: "Result",
/*
        props: {
            counter: {
                type: Number,
                required: true
            }
        }
*/
        computed: {
            counter() {
                return this.$store.state.counter;
            }
        }
    }
</script>

<style scoped>

</style>