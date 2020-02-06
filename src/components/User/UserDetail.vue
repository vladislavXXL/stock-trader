<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button class="btn-success" @click="resetName">Reset Name on Event</button>
        <button class="btn-success" @click="resetFn()">Reset Name by Callback</button>
    </div>
</template>

<script>
    import {eventBus} from '../../../index';

    export default {
        name: "UserDetail",
        props: {
            name: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Max';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div.component {
        background-color: lightcoral;
    }
</style>