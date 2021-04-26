<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    created(){
      document.title="IBiK FTI"
      document.images="~assets/logo.webp"
    }
};
</script>


<style lang="scss">
</style>
