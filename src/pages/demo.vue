<template>
    <section>
        <button @click="goTo('/mess_vue/modulesA')">主页</button>
        <button @click="goTo('/mess_vue/modulesA/about')">关于</button>
    </section>
</template>

<script>
export default {
    name: 'demo',
    methods: {
        goTo (path) {
            this.$singleSpa.router.push(path)
        }
    }
}
</script>

<style scoped>

</style>