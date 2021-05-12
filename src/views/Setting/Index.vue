<template>
    <div class="Setting-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="/admin/setting/nama" active>Ganti Nama</b-nav-item>
                <b-nav-item to="/admin/setting/email">Ganti Email</b-nav-item>
                <b-nav-item to="/admin/setting/password">Ganti Password</b-nav-item>
            </b-nav>
        </div>
        <router-view class="body-container"></router-view>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
        
    }
}
</script>

<style lang="scss">
.Setting-contain{
  display: flex;
  flex-direction: column;
  position: relative;
  .Navselect{
      position: fixed;
      top: 128px;
      width: 100%;
  }
  .body-container{
      display: flex;
      flex-direction: column;
      padding: 0 5vw;
      margin: 148px 0 0 0;
  }
}
</style>