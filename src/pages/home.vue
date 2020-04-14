<template>
    <section>
        <h1>mess_vue(VUE)-主页</h1>
        <router-view></router-view>
        <button @click="goTo('/mess_vue/modulesA/subHome')">子页面</button>
    </section>
</template>

<script>
export default {
    name: 'home',
    methods: {
        goTo (path) {
            this.$singleSpa.router.push(path)
        }
    }
}
</script>

<style scoped>

</style>