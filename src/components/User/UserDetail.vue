<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ $route.params.id }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
/*        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id;
            }
        }*/
    }
</script>

<style scoped>

</style>
