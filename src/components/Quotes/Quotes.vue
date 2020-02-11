<template>
    <div class="component">
        <div class="row d-flex flex-row">
            <div class="col-3 shadow mb-5 mr-3 rounded quote-wrap text-break"
                 v-if="quotes.length !== 0"
                 v-for="(quote, index) in quotes"
                 @click="removeQuote(index)"
            >
                {{ quote }}
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../../../index';

    export default {
        name: "Quotes",
        props: {
            quote: {
                type: String
            }
        },
        data() {
            return {
                quotes: []
            }
        },
        methods: {
            removeQuote(index) {
                this.quotes.splice(index, 1);
                eventBus.$emit('reduceQuotesEvent', 1);
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