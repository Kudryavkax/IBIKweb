<template>
  <div class="pengumuman">
      <h2 class="title">
          Webinar IDStar "Moving towards Society 5.0"
          <p class="tanggalpost">31 Oktober 2020</p>
      </h2>
      <div class="pengumumanbody">
          <p class="isi" v-html="isitext">
          </p>
          <img src="http://103.75.25.78/ibikfti/downfilepengumuman.php?nm=28-idstar_society5_p1.jpeg">
      </div>
  </div>
</template>

<script>
export default {
    name: "Pengumuman",
    components: {
        
    },
    data() {
        return{
            isitext:"Hari/Tanggal: 9-11 November 2020<br>Waktu :13.00 - 17.30<br>Tempat : Zoom Meeting"
        }
    },
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