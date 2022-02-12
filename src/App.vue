<template>
    <div class="app">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>
.app {
    font-size: 14px;
    color: aquamarine;
}
</style>