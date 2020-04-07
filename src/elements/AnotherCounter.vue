<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "AnotherCounter",
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
        }
    }
</script>

<style scoped>

</style>