<template>
    <div class="container">
        <app-progress :quantity="quantity" :count="quotes.length"></app-progress>
        <app-new :quantity="quantity" @newQuoteEvent="newQuote"></app-new>
        <app-quotes :quotes="quotes" @reduceQuotesEvent="deleteQuote"></app-quotes>
        <app-info>Info: Click on Quote to delete it</app-info>
    </div>
</template>

<script>
    import Progress from "./components/Quotes/Progress.vue";
    import New from "./components/Quotes/New.vue";
    import Quotes from "./components/Quotes/Quotes.vue";
    import Info from "./components/Quotes/Info.vue";

    export default {

        data() {
            return {
                quantity: 10,
                quotes: []
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.quantity) {
                    return alert('This is max value of quotes you can create. Please delete any quote first!')
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appProgress: Progress,
            appNew: New,
            appQuotes: Quotes,
            appInfo: Info
        }
    }
</script>

<style>
</style>
