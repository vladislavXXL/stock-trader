<template>
    <div class="container">
        <app-progress :quantity="quantity"></app-progress>
        <app-new :quantity="quantity"></app-new>
        <keep-alive>
            <app-quotes></app-quotes>
        </keep-alive>
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