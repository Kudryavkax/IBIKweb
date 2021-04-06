<template>
  <div class="index">
      <div class="page-container">
          <navbar></navbar>
          <router-view class="body-container"></router-view>
          <footing></footing>
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
      flex-direction: row;
      position: relative;
      margin: 0 auto;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .body-container{
        position: absolute;
        z-index: 99;
        margin-top: 90px;
        display: flex;
        align-items: center;
        height: calc(100% - 90px);
        width: 100%;
      }
  }
}
</style>