<template>
    <div class="Periode-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="/admin/periode/#">Daftar Periode</b-nav-item>
                <b-nav-item to="/admin/periode/masadaftar">Masa Pendaftaran Internship</b-nav-item>
                <b-nav-item to="/admin/periode/masainput">Masa Input Data Internship</b-nav-item>
                <b-nav-item to="/admin/periode/input">Input Data Internship Mahasiswa</b-nav-item>
                <b-nav-item to="/admin/periode/asisten/">Data Asisten</b-nav-item>
            </b-nav>
        </div>
        <router-view class="body-container"></router-view>
    </div>
</template>

<script>
export default {
    name: "IndexPeriode",
    components: {
        
    }
}
</script>

<style lang="scss">
.Periode-contain{
  display: flex;
  flex-direction: column;
  position: relative;
  .Navselect{
      position: fixed;
      top: 126px;
      z-index: 98;
      width: 100%;
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
      margin: 210px 100px 0 100px;
  }
}
</style>