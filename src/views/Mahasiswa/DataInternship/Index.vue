<template>
    <div class="DataInternship-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="/mahasiswa/internship/#">Data Internship</b-nav-item>
                <b-nav-item to="personal">Data Diri</b-nav-item>
                <b-nav-item to="dokumen">Dokumen</b-nav-item>
            </b-nav>
        </div>
        <router-view class="body-container"></router-view>
    </div>
</template>

<script>
export default {
    name: "IndexDataInternship",
    components: {
        
    }
}
</script>

<style lang="scss">
.DataInternship-contain{
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