<template>
  <div class="index">
      <div class="page-container">
          <navbar :type="'Mahasiswa'"></navbar>
          <router-view class="body-container"></router-view>
          <footing></footing>
      </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar"
import footing from '@/components/Footer'

export default {
  name: "Mahasiswa",
  components: {
    navbar,
    footing,
  },
}
</script>

<style lang="scss">
.index {

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
        position: relative;
      }
  }
}
</style>