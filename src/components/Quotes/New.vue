<template>
    <div class="component">
        <div class="row justify-content-md-center">
            <div class="col-7">
                <h4>Quote</h4>
                <textarea cols="30" rows="3" class="form-control" v-model="quoteValue"></textarea>
                <div class="row justify-content-md-center mt-3">
                    <button class="btn btn-info" @click="addNewQuote">Add Quote</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../../../index';

    export default {
        name: "New",
        props: {
            quantity: {
                type: Number,
                require: true
            }
        },
        data() {
            return {
                quoteValue: '',
                count: 0
            }
        },
        methods: {
            addNewQuote() {
                if (this.count === this.quantity) {
                    window.alert('This is max value of quotes you can create')
                } else {
                    if (this.quoteValue !== '') {
                        eventBus.$emit('newQuoteEvent', this.quoteValue);
                        this.quoteValue = '';
                        this.count++;
                    } else {
                        window.alert('Please enter the value')
                    }
                }
            }
        },
        created() {
            eventBus.$on('reduceQuotesEvent', (count) => {
                this.count -= 1;
            });
        }
    }
</script>

<style scoped>
</style>