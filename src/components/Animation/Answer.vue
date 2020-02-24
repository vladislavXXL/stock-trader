<template>
    <div class="row justify-content-center">
        <div class="col-6">
            <div class="card text-center" style="background-color: palegreen;">
                <div class="card-body">
                    <h2>That's Correct!</h2>
                    <hr>
                    <button class="btn btn-primary" @click="nextQuiz">Next Question</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Answer",
        methods: {
            nextQuiz() {
                this.$emit('nextQuiz', false);
            }
        }
    }
</script>

<style scoped>

</style>
