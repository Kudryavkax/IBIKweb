<template>
    <div class="IndexInternship-contain">
        <div class="Navselect">
            <b-nav tabs>
                <b-nav-item to="/asisten/internship/input">Input data Internship Mahasiswa</b-nav-item>
                <b-nav-item to="/asisten/internship/datalowongan">Ubah Status Pendaftaran Internship</b-nav-item>
            </b-nav>
        </div>
        <router-view class="body-container"></router-view>
    </div>
</template>

<script>
export default {
    name: "IndexInternship",
    components: {
        
    },
    data(){
        return{
            periode:1
        }
    }
}
</script>

<style lang="scss">
.IndexInternship-contain{
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