<template>
  <div class="lowongan">
      <h2 class="title">
          CRM FUNCTIONAL CONSULTANT INTERNSHIP
      </h2>
      <div class="lowonganbody">
          <div class="textbody">
            <p class="isi" v-html="'Periode:<br>'+periode" />
            <p class="isi" v-html="'Deskripsi:<br>'+isitext" />
            <p class="isi" v-html="'Perusahaan:<br>'+perusahaan" />
            <p class="isi" v-html="'Durasi Internship:<br>'+durasi+'<br>'+jenis" />
          </div>
          <img :src="gambar">
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailLowongan",
    components: {
        
    },
    data() {
        return{
            periode:"Ganjil 2020/2021",
            perusahaan:"PT Dynamics Inovasi Solusindo",
            durasi:"12 Bulan",
            jenis:"Full Time",
            gambar:"http://ibik.fti.untar.ac.id/downfilelowongan.php?lw=10&nm=10-CRM+Functional+Consultant+Internship.JPG",
            isitext:"Hari/Tanggal: 9-11 November 2020<br>Waktu :13.00 - 17.30<br>Tempat : Zoom Meeting"
        }
    },
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