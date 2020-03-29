<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        methods: {
            increment() {
                this.$emit('updated', 1)
            },
            decrement() {
                this.$emit('updated', -1)
            }
        }
    }
</script>

<style scoped>

</style>