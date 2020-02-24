<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <div class="card">
                <div class="card-header text-center">
                    What's {{ question.text }}?
                </div>
                <div class="card-body d-flex justify-content-center flex-wrap">
                    <div class="col-2" v-for="(value, index) in question.answers">
                        <button class="btn btn-primary" @click="checkAnswer(index)">{{ value }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props: {
            question: {
                type: Object,
                require: true
            }
        },
        methods: {
            checkAnswer(index) {
                if (this.question.answer === this.question.answers[index]) {
                    this.$emit('isCorrect', true);
                } else {
                    window.alert('It\'s a wrong answer');
                }
            }
        }
    }
</script>

<style scoped>

</style>
