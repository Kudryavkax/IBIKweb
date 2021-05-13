<template>
    <div class="Setting-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="/admin/setting/nama">Ganti Nama</b-nav-item>
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
      .router-link-active{
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
      }
  }
  .body-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 5vw;
      margin: 168px 100px 0 100px;
  }
}
</style>