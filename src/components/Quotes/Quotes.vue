<template>
    <div class="component">
        <div class="row d-flex flex-row">
            <div class="col-3 shadow mb-5 mr-3 bg-white rounded quote-wrap">
                Quote with some text
            </div>
        </div>
        <button @click="checkQuotes">Check quotes</button>
    </div>
</template>

<script>
    import {eventBus} from '../../../index';

    export default {
        name: "Quotes",
        data() {
            return {
                quotes: []
            }
        },
/*
        props: {
            quotes: {
                type: Array
            }
        },
*/
        methods: {
            checkQuotes() {
                console.log(quotes);
            }
        },
        created() {
            eventBus.$on('newQuoteEvent', (quote) => {
                this.quotes.push(quote);
            });
        }
    }
</script>

<style scoped>
    .quote-wrap {
        padding: 20px 10px 20px 10px;
        font-family: Bahnschrift;
        color: #635A5F;
        font-size: 25px;
    }
</style>