<template>
  <div class="index">
      <div class="page-container">
          <navbar></navbar>
          <router-view class="body-container"></router-view>
          <div class="foot-placeholder">
          <footing></footing>
          </div>
      </div>
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
.index {
  background-color: rgb(245, 242, 228);

  .page-container {
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: space-between;
      margin: 0 auto;
      width: 100vw;
      min-height: 100vh;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .body-container{
        background-color: rgb(245, 242, 228);
        position: relative;
        z-index: 98;
        margin-top: 110px;
        display: flex;
        align-items: center;
        width: 100%;
      }
  }
}
</style>