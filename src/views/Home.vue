<template>
    <div class="page-container">
        <navbar></navbar>
        <router-view class="body-container"></router-view>
        <footing></footing>
    </div>
</template>

<script>
import navbar from "@/components/Navbar"
import footing from '@/components/Footer'

export default {
  name: "Home",
  components: {
    navbar,
    footing,
  },
}
</script>

<style lang="scss">
.page-container {
    position: relative;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>