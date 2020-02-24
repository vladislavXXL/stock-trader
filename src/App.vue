<template>
    <div class="container">
        <app-header></app-header>
        <transition
                name="flip"
                mode="out-in"
                appear
        >
            <!--
                            enter-active-class="animated zoomIn"
                            leave-active-class="animated zoomOut"
            -->
            <component
                    :is="!isAnswered ? 'app-question' : 'app-answer'"
                    :question="getRandomQuiz()"
                    @isCorrect="isAnswered = $event"
                    @nextQuiz="isAnswered = $event"
            >
            </component>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Answer from './components/Animation/Answer.vue';
    import Question from './components/Animation/Question.vue';

    export default {
        data() {
            return {
                isAnswered: false,
                questions: [
                    {
                        text: '14 - 27',
                        answers: [-18, -7, -19, -13],
                        answer: -13
                    },
                    {
                        text: '15 + 16',
                        answers: [35, 30, 31, 29],
                        answer: 31
                    },
                    {
                        text: '45 + 12',
                        answers: [47, 58, 12, 57],
                        answer: 57
                    },
                    {
                        text: '100 - 28',
                        answers: [72, 64, 24, -15],
                        answer: 72
                    }
                ]
            }
        },
        methods: {
            getRandomQuiz() {
                return this.questions[Math.floor(Math.random() * this.questions.length)];
            }
        },
        components: {
            appHeader: Header,
            appAnswer: Answer,
            appQuestion: Question
        }
    }
</script>

<style scoped>
    .flip-enter {
       /*transform: rotateY(0deg);*/
    }

    .flip-enter-active {
        animation: flip-in 0.5s ease-out forwards;
    }

    .flip-leave {
        /*transform: rotateY(0deg);*/
    }

    .flip-leave-active {
        animation: flip-out .5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
