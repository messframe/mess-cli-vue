<template>
    <section>
        <button @click="goTo('homePage')">主页</button>
        <button @click="goTo('about')">关于</button>
    </section>
</template>

<script>
export default {
    name: 'demo',
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