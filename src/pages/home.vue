<template>
    <section>
        <h1>mess_vue(VUE)-主页</h1>
        <router-view></router-view>
        <button @click="goTo('subHomePage')">子页面</button>
    </section>
</template>

<script>
export default {
    name: 'home',
    methods: {
        goTo (name) {
            if (!name) return
            this.$router.push({ name: name })
        }
    }
}
</script>

<style scoped>

</style>