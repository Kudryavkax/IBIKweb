<template>
  <div class="pengumuman">
      <h2 class="title">
          {{item.judul}}
          <p class="tanggalpost">{{item.tanggal}}</p>
      </h2>
      <div class="pengumumanbody">
          <p class="isi" v-html="item.isi">
          </p>
          <img src="http://103.75.25.78/ibikfti/downfilepengumuman.php?nm=28-idstar_society5_p1.jpeg">
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Pengumuman",
    components: {
        
    },
    data() {
        return{
            item:{}
        }
    },
    methods: {
      // Get All Pengumuman
      async getPengumumanById() {
        try {
          const response = await axios.get(`http://localhost:5000/pengumuman/${this.$route.params.id}`);
          this.item = response.data;
          this.item.tanggal = this.item.tanggal.substring(0,10);
        } catch (err) {
          console.log(err);
        }
      },

    },
    created(){
      this.getPengumumanById();
    }
}
</script>

<style lang="scss" scoped>
    .pengumuman{
        display: flex;
        flex-direction: column;
        padding: 20px 5vw;
        margin-top: 108px;
        .title{
            text-align: center;
            .tanggalpost{
                font-weight: normal;
                font-size: 12px;
            }
        }
        .pengumumanbody{
            display: flex;
            flex-direction: row;
            padding: 0 20px;
            justify-content: space-around;
            .isi{
                white-space: pre-line;
            }
            img{
                width: 50vw;
                height: 40vh;
                object-fit: contain;
            }
        }
    }
</style>