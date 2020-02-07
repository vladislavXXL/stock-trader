<template>
    <div class="component">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" :aria-valuemax="quantity">3/{{ quantity }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        props: {
            quantity: {
                type: Number,
                require: true,
                default: 10
            },
        }
    }
</script>

<style>
    .component {
        margin: 40px 0 20px 0;
    }
</style>