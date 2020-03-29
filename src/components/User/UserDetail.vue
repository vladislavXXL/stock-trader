<template>
    <div>
        <h3>Some User Details</h3>
        <p>User ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                class="btn btn-primary"
                :to="link"
        >Edit User
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
                // id: this.$route.params.id
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log('Inside component, beforeRouteEnter');
            if (true) {
                next();
            } else {
                next(false);
            }
        }
        /*
                watch: {
                    '$route'(to, from) {
                        this.id = to.params.id;
                    }
                }
        */
    }
</script>

<style scoped>

</style>
