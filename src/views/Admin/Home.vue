<template>
    <div class="home">
      <div class="ibik">
          <h1>Inkubator Bisnis dan Kerjasama</h1>
          <h2 class="sticky">IBIK FTI UNTAR</h2>
          <hr size="6" width="200px" align="center" color="Black">
          <p>IBiK merupakan wadah dalam Fakultas Teknologi Informasi(FTI) UNTAR untuk membangun bisnis startup di dalam bidang Teknologi dan sebagai wadah kerjasama antara Fakultas Teknologi Informasi UNTAR dengan mitra lainnya seperti Perusahaan, Industri, Sekolah, dan lainnya, mencakup informasi mengenai kegiatan seperti magang, seminar, dan lowongan kerja yang dibuka atau diadakan oleh mitra yang bekerja sama dengan FTI UNTAR</p>
      </div>
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
.home{
  display: flex;
  flex-direction: column;
  position: relative;
  .ibik{
    text-align: center;
    margin-top: 120px;
    padding: 100px 10%;
    padding-bottom: 300px;
    background: linear-gradient( rgba(230, 194, 139, 0.3),rgb(255, 235, 205, 0.3)), #f5f2e4;
    h1{
      padding-top: 20px;
    }
    h2{
      padding-top: 20px;
    }
    p{
      padding-top: 20px;
    }
  }
}
</style>