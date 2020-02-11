<template>
    <div class="component">
        <div class="row">
            <form class="d-flex justify-content-center">
                <div class="col-7 form-group">
                    <label>Quote</label>
                    <textarea cols="150" rows="3" class="form-control" v-model="quoteValue"></textarea>
                    <div class="row justify-content-md-center mt-3">
                        <button class="btn btn-info" @click.prevent="addNewQuote">Add Quote</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
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
            }
        },
        methods: {
            addNewQuote() {
                if (this.quoteValue !== '') {
                    this.$emit('newQuoteEvent', this.quoteValue);
                    this.quoteValue = '';
                    this.count++;
                } else {
                    window.alert('Please enter the value')
                }
            }
        },
    }
</script>

<style scoped>
</style>
