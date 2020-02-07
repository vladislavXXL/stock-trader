<template>
    <div class="container">
        <div class="row">
            <button class="btn btn-primary mr-2" @click="selected = 'appBlue'">Load Blue Template</button>
            <button class="btn btn-success mr-2" @click="selected = 'appGreen'">Load Green Template</button>
            <button class="btn btn-danger mr-2" @click="selected = 'appRed'">Load Red Template</button>
        </div>
        <component :is="selected">
            <h5 slot="text">Content</h5>
            <p slot>Some text value</p>
        </component>
    </div>
</template>

<script>
    import Blue from "./components/Colored/Blue.vue";
    import Green from "./components/Colored/Green.vue";
    import Red from "./components/Colored/Red.vue";

    export default {
        data() {
            return {
                selected: Blue
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style scoped>

</style>