<template>
    <div class="container">
        <app-progress :quan="quantity"></app-progress>
        <app-new></app-new>
        <app-quotes></app-quotes>
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
                quantity: 10
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