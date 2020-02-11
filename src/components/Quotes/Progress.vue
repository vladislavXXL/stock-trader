<template>
    <div class="component">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="width" :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="quantity">{{ count }}/{{ quantity }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Progress",
        props: {
            quantity: {
                type: Number,
                require: true
            },
            count: {
                type: Number,
                require: true
            }
        },
        data() {
            return {
                count: 0
            }
        },
        computed: {
            width() {
                return 'width:' + this.count / this.quantity * 100 + '%';
            }
        }
    }
</script>

<style>
    .component {
        margin: 40px 0 20px 0;
    }
</style>
