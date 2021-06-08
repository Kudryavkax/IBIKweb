<template>
  <div class="lowongan">
      <h2 class="title">
        {{item.judul}}
      </h2>
      <div class="lowonganbody">
          <div class="textbody">
            <p class="isi" v-html="'Periode:<br>'+item.namaperiode" />
            <p class="isi" v-html="'Deskripsi:<br>'+item.deskripsi" />
            <p class="isi" v-html="'Perusahaan:<br>'+item.namapt" />
            <p class="isi" v-if="item.opsi_full == 1" v-html="'Durasi Internship:<br>'+item.opsi_bulan+' Bulan<br>Full Time'" />
            <p class="isi" v-else v-html="'Durasi Internship:<br>'+item.opsi_bulan+' Bulan<br>Part Time'" />
          </div>
          <img :src="gambar">
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "DetailLowongan",
    components: {
        
    },
    data() {
        return{
            item:{},
            gambar:"http://ibik.fti.untar.ac.id/downfilelowongan.php?lw=10&nm=10-CRM+Functional+Consultant+Internship.JPG",
        }
    },
    methods: {
      // Get All Pengumuman
      async getLowonganById() {
        try {
          const response = await axios.get(`http://localhost:5000/lowongan/${this.$route.params.id}`);
          this.item = response.data;
          this.item.tanggal = this.item.tanggal.substring(0,10);
        } catch (err) {
          console.log(err);
        }
      },

    },
    created(){
      this.getLowonganById();
    }
}
</script>

<style lang="scss" scoped>
    .lowongan{
        display: flex;
        flex-direction: column;
        margin-top: 108px;
        padding: 20px 5vw;
        .title{
            text-align: center;
        }
        .lowonganbody{
            display: flex;
            flex-direction: row;
            padding: 10px 20px;
            justify-content: space-evenly;
            .textbody{
                flex-direction: column;
                .isi{
                    white-space: pre-line;
                }
            }
            img{
                width: 50vw;
                height: 40vh;
                object-fit: contain;
            }
        }
    }
</style>