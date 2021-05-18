<template>
    <div class="AdminSetting-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="nama">Ganti Nama</b-nav-item>
                <b-nav-item to="email">Ganti Email</b-nav-item>
                <b-nav-item to="password">Ganti Password</b-nav-item>
                <b-nav-item to="jam">Ganti Jam Absen</b-nav-item>
            </b-nav>
        </div>
        <router-view class="body-container"></router-view>
    </div>
</template>

<script>
export default {
    name: "AdminIndexSetting",
    components: {
        
    }
}
</script>

<style lang="scss">
.AdminSetting-contain{
  display: flex;
  flex-direction: column;
  position: relative;
  .Navselect{
      position: fixed;
      top: 126px;
      width: 100%;
      z-index: 98;
      background-color: white;
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