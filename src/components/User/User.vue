<template>
    <div class="component">
        <h1>The user Component</h1>
        <p>I'm an awesome User!</p>
        <button class="btn btn-success" @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue";
    import UserEdit from "./UserEdit.vue";

    export default {
        name: "User",
        data() {
            return {
                name: 'Max'
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>