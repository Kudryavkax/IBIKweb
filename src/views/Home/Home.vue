<template>
    <div class="home">
      <div class="ibik">
          <h1>Inkubator Bisnis dan Kerjasama</h1>
          <h2 class="sticky">IBIK FTI UNTAR</h2>
          <hr size="6" width="200px" align="center" color="Black">
          <p>Website IBIK memberikan informasi mengenai kerjasama antara Fakultas Teknologi Informasi(FTI) UNTAR dan perusahaan, mencakup informasi mengenai kegiatan seperti magang, seminar, dan lowongan kerja yang dibuka atau diadakan oleh perusahaan yang bekerja sama dengan FTI UNTAR</p>
      </div>
      <div class="Pengumuman">
        <div class="listpengumuman">
          <h3>Pengumuman</h3>
          <hr size="6" width="100px" align="left" color="Black">
          <b-list-group>
            <b-list-group-item class="isi" to="/lowongan">
              <a class="title">Webinar IDStar "Moving towards Society 5.0"</a>
              <a class="date">31 Oktober 2020</a></b-list-group-item>
            <b-list-group-item class="isi" to="">
              <a class="title">Virtual Campus Tour ruparupa.com</a>
              <a class="date">31 Oktober 2020</a>
            </b-list-group-item>
            <b-list-group-item class="isi" to="">
              <a class="title">Webinar BCA "Beyond the Foundation of ITBCA Services"</a>
              <a class="date">15 Oktober 2020</a></b-list-group-item>
            <b-list-group-item class="isi" to="">
              <a class="title">Webinar BCA " Digital Innovation Solution at IT BCA"</a>
              <a class="date">22 September 2020</a></b-list-group-item>
          </b-list-group>
        </div>
        <div class="carousel">
          <b-carousel
            id="carousel-fade"
            indicators
          >
            <b-carousel-slide class="image"
              img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LxpdqDoY3j9mhOnpYsTgJAHaE8%26pid%3DApi%26h%3D160&f=1"
            ></b-carousel-slide>
            <b-carousel-slide class="image"
              img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EJ_Nl2727-4yyvjiDuebawHaK-%26pid%3DApi%26h%3D160&f=1"
            ></b-carousel-slide>
            <b-carousel-slide class="image"
              :img-src= "require('../../assets/backgroundnav.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <div class="Lowongan">
        <div class="title">
          <h2> Lowongan Pekerjaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablelowongan">
          <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
          </b-table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
        
    },
    data() {
      return {
        fields: ['JudulLowongan', 'NamaPerusahaan', 'DurasiInternship'],
        items: [
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Splusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Splusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Splusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Splusindo', 
            DurasiInternship: '12 Bulan Full Time' },
        ],
      }
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
    padding: 0 10%;
    background: linear-gradient( rgba(230, 194, 139, 0.3),rgb(255, 235, 205, 0.3)) ;
  }
  .Pengumuman{
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    padding: 50px 5%;
    width: 100%;
    height: 60%;
    .isi{
      display: flex;
      flex-direction: row;
      background-color: thistle;
      justify-content: space-between;
      width: 50vw;
      margin: 0 10px 10px 0;
      .title{
        color: black;
        text-decoration: none;
      }
      .date{
        color: white;
        text-decoration: none;
      }
    }
    .carousel{
      height: 45vh;
      width: 100%;
      padding: 0 20px 0 10px;
      background:linear-gradient(#ffffff,#ebe6bf) ;
      .carousel-item img {
        height:45vh ;
        width: auto;
        object-fit: contain;
      }
    }
  }
  .Lowongan{
    .title{
      position: sticky;
      top: 108px;
      width: 100vw;
      Padding: 10px 20px 1px 20px;
      background-color: hotpink;
      text-align: center;
    }
    .tablelowongan{
      background-color: white;
      Padding: 20px 5%;
    }
  }
}

</style>