<template>
    <div class="component">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="width" :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="quantity">{{ count }}/{{ quantity }}</div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../../../index";

    export default {
        name: "Progress",
        props: {
            quantity: {
                type: Number,
                require: true,
                default: 10
            },
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
        },
        created() {
            eventBus.$on('newQuoteEvent', (quote) => {
                this.count++;
            });
            eventBus.$on('reduceQuotesEvent', (count) => {
                this.count -= 1;
            });
        }
    }
</script>

<style>
    .component {
        margin: 40px 0 20px 0;
    }
</style>