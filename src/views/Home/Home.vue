<template>
    <div class="home">
      <div class="ibik">
          <h1>Inkubator Bisnis dan Kerjasama</h1>
          <h2 class="sticky">IBIK FTI UNTAR</h2>
          <hr size="6" width="200px" align="center" color="Black">
          <p>IBiK merupakan wadah dalam Fakultas Teknologi Informasi(FTI) UNTAR untuk membangun bisnis startup di dalam bidang Teknologi dan sebagai wadah kerjasama antara Fakultas Teknologi Informasi UNTAR dengan mitra lainnya seperti Perusahaan, Industri, Sekolah, dan lainnya, mencakup informasi mengenai kegiatan seperti magang, seminar, dan lowongan kerja yang dibuka atau diadakan oleh mitra yang bekerja sama dengan FTI UNTAR</p>
      </div>
      <div class="Pengumuman">
        <div class="title">
          <h2>Pengumuman</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="listpengumuman">
          <b-card-group deck>
            <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top v-for="item in Pengumumanitems" :key="item.noP">
              <b-card-text>
                <b-button class="link" variant="link" :to='"/pengumuman/"+item.noP'>{{item.judul}}</b-button>
              </b-card-text>
              <template #footer>
                <small class="text-muted">{{item.tanggal}}</small>
              </template>
            </b-card>
          </b-card-group>
        </div>
        <div class="more">
          <b-button class="link" variant="link" to="/pengumuman/">Pengumuman Sebelumnya >></b-button>
        </div>
      </div>
      <div class="Lowongan">
        <div class="title">
          <h2>Lowongan Pekerjaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablelowongan">
          <b-card-group deck>
            <b-card img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top v-for="item in Lowonganitems" :key="item.kodelowongan">
              <b-card-text>
                <b-button class="link" variant="link" :to='/lowongan/+item.kodelowongan' >{{item.judul}}</b-button><br>
                <label >{{item.namapt}}</label>
              </b-card-text>
              <template #footer>
                <small class="text-muted" v-if="item.opsi_full == '1'">{{item.opsi_bulan}} Bulan Full Time</small>
                <small class="text-muted" v-else>{{item.opsi_bulan}} Bulan Part Time</small>
              </template>
            </b-card>
          </b-card-group>
          <div class="more">
            <b-button class="link" variant="link" to="/lowongan/">Lowongan lainnya >></b-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    components: {
        
    },
    data() {
      return {
        Lowonganitems: [],
        Pengumumanitems: [],
      }
    },
    methods: {
      // Get All Pengumuman
      async getPengumuman() {
        try {
          const response = await axios.get("http://localhost:5000/pengumuman");
          this.Pengumumanitems = response.data;
          this.Pengumumanitems = this.Pengumumanitems.slice(0,4);
          for (let index = 0; index < this.Pengumumanitems.length; index++) {
            this.Pengumumanitems[index].tanggal = new Date(this.Pengumumanitems[index].tanggal).toLocaleDateString().replace(/\//g, '-');
            
          }
        } catch (err) {
          console.log(err);
        }
      },
      // Get All Lowongan
      async getLowongan() {
        try {
          const response = await axios.get("http://localhost:5000/lowongan");
          this.Lowonganitems = response.data;
          this.Lowonganitems = this.Lowonganitems.slice(0,4);
        } catch (err) {
          console.log(err);
        }
      },
    },
    created() {
      this.getPengumuman();
      this.getLowongan();
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
  .Pengumuman{
    flex-direction: column;
    background-color: white;
    justify-content: space-between;
    width: 100%;
    margin-top: 0;
    margin-bottom: 50px;
    .title{
      position: sticky;
      top: 120px;
      width: 100vw;
      padding: 20px 20px 1px 20px;
      z-index: 98;
      background-color: rgb(252, 180, 216);
      text-align: center;
    }
    .listpengumuman{
      flex-direction: row;
      justify-content: space-between;
      padding: 10vh 5% 0 5%;
      .link{
        text-align: left;
      }
    }
    .more{
      padding: 0;
      margin-right: 5%;
      text-align: right;
    }
  }
  .Lowongan{
    margin-bottom: 50px;
    margin-top: 0;
    .title{
      position: sticky;
      top: 120px;
      width: 100vw;
      z-index: 98;
      padding: 20px 20px 1px 20px;
      background-color: rgb(252, 180, 216);
      text-align: center;
    }
    .tablelowongan{
      background-color: white;
      padding: 10vh 5% 0 5%;
    }
    .more{
      text-align: right;
    }
  }
}

.link{
  padding: 0;
}
</style>