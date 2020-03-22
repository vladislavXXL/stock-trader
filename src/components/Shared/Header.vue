<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="a" active-class="nav-item nav-link active" exact>Home</router-link>
        <router-link to="/user" tag="a" active-class="nav-item nav-link active">User</router-link>
        <router-link to="/user/1" tag="a" active-class="nav-item nav-link active">User 1</router-link>
        <router-link to="/user/2" tag="a" active-class="nav-item nav-link active">User 2</router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>
