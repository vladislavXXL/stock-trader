<template>
    <div class="col-3 shadow mb-5 mr-3 rounded quote-wrap">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        data() {
            return {

            }
        },
        props: {
            quotes: Array,
            require: true
        },
        methods: {
        }
    }
</script>

<style scoped>
    .quote-wrap {
        padding: 20px 10px 20px 10px;
        font-family: Bahnschrift, serif;
        color: #635A5F;
        font-size: 25px;
        cursor: pointer;
    }

    .quote-wrap:hover {
        background-color: #cc736e;
        color: #fff;
    }
</style>
