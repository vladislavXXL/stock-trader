<template>
    <div class="component">
        <div class="row d-flex flex-row">
            <app-quote :quotes="quotes"
                       v-for="(quote, index) in quotes"
                       @click.native="removeQuote(index)"
            >
                {{ quote }}
            </app-quote>
        </div>
    </div>
</template>

<script>
    import Quote from "./Quote.vue";

    export default {
        name: "Quotes",
        props: {
            quotes: {
                type: Array,
                require: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            removeQuote(index) {
                this.$emit('reduceQuotesEvent', index);
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style scoped>

</style>
