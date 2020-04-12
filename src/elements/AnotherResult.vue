<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
        <p>Info: {{ ourOwn }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        name: "AnotherResult",
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            }),
            ourOwn() {
                return 'Some value';
            }
        }
        /*
                computed: mapGetters([
                    'doubleCounter',
                    'stringCounter'
                ])
        */
        /*
                computed: {
                    counter() {
                        return this.$store.getters.doubleCounter;
                    },
                    clicks() {
                        return this.$store.getters.stringCounter;
                    }
                }
        */
    }
</script>

<style scoped>

</style>