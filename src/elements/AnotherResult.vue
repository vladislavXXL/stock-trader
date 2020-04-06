<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        name: "AnotherResult",
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>

<style scoped>

</style>