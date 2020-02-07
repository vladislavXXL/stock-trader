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
        data() {
            return {
                quoteValue: ''
            }
        },
        methods: {
            addNewQuote() {
                console.log(this.quoteValue);
                eventBus.$emit('newQuoteEvent', this.quoteValue);
            }
        }
    }
</script>

<style scoped>

</style>