<template>
    <div class="navibar">
      <b-navbar toggleable="lg" class="navibar-top" type="light" variant="dark">
        <b-navbar-brand class="fti-logo" to="/home/">
        <img src="@/assets/logo.webp" alt="">
        </b-navbar-brand>
        <b-nav-toggle target="nav-content"></b-nav-toggle>
        <b-collapse id="nav-content" is-nav>
          <b-navbar-nav class="ml-auto" v-if="type == 'Admin'">
            <b-nav-item class="btn" to="/admin/periode/">PERIODE</b-nav-item>
            <b-nav-item-dropdown class="btn" text="PENGUMUMAN & LOWONGAN" right>
              <b-dropdown-item to="/admin/pengumuman/">Pengumuman</b-dropdown-item>
              <b-dropdown-item to="/admin/lowongan/">Lowongan</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="btn" text="PERUSAHAAN" right>
              <b-dropdown-item to="/admin/perusahaan/akun/">Akun Perusahaan</b-dropdown-item>
              <b-dropdown-item to="/admin/perusahaan/data/">Data Perusahaan</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="btn" to="/admin/mahasiswa/">AKUN MAHASISWA</b-nav-item>
            <b-nav-item-dropdown class="btn" text="USER" right>
              <b-dropdown-item to="/admin/setting/">Setting</b-dropdown-item>
              <b-dropdown-item to="/home/">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else-if="type == 'Asisten'">
            <b-nav-item-dropdown class="btn" text="MAHASISWA" right>
              <b-dropdown-item to="/asisten/data/pendaftaran">Data Pendaftaran</b-dropdown-item>
              <b-dropdown-item to="/asisten/data/internship/#">Data Internship</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="btn" to="/asisten/lowongan/">LOWONGAN</b-nav-item>
            <b-nav-item-dropdown class="btn" text="ASISTEN" right>
              <b-dropdown-item to="/asisten/absen/">Absensi</b-dropdown-item>
              <b-dropdown-item to="/asisten/perusahaan/data/">Data Perusahaan</b-dropdown-item>
              <b-dropdown-item to="/asisten/internship/">Data Internship</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="btn" text="USER" right>
              <b-dropdown-item to="/asisten/setting/">Setting</b-dropdown-item>
              <b-dropdown-item to="/home">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else-if="type == 'Mahasiswa'">
            <b-nav-item class="btn" to="/mahasiswa/internship/">DATA INTERNSHIP</b-nav-item>
            <b-nav-item class="btn" to="/mahasiswa/pendaftaran">DATA PENDAFTARAN</b-nav-item>
            <b-nav-item class="btn" to="/mahasiswa/lowongan/">LOWONGAN</b-nav-item>
            <b-nav-item-dropdown class="btn" text="USER" right>
              <b-dropdown-item to="/mahasiswa/setting/">Setting</b-dropdown-item>
              <b-dropdown-item to="/home">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else-if="type == 'Perusahaan'">
            <b-nav-item class="btn" to="/perusahaan/lowongan/">LOWONGAN INTERNSHIP</b-nav-item>
            <b-nav-item-dropdown class="btn" text="USER" right>
              <b-dropdown-item to="/perusahaan/setting/">Setting</b-dropdown-item>
              <b-dropdown-item to="/home">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-else>
            <router-link class="btn" to="/home/">HOME</router-link>
            <router-link class="btn" to="/lowongan/">LOWONGAN PEKERJAAN</router-link>
            <a class="btn" href="https://career.untar.ac.id/index.php/ind">UNTAR CAREER</a>
            <router-link class="btn" to="/login/"><b-icon icon="person-fill"></b-icon>LOGIN</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
      type:null
    },
    components: {},
}
</script>

<style scoped lang="scss">
.navibar-top{
  color: black;
  width: 100vw;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient( rgb(255, 235, 205, 0.3),rgb(255, 235, 205, 0.3)), url("../assets/backgroundnav.jpg") ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 120vw;
  background-position-y:40%;
  background-position-x:85%;
  .fti-logo{
    padding: 10px;
    &:hover{
      background-color: rgb(255, 235, 205, 0.1);
    }
    img {
        height: 90px;
    }
  }
  .btn{
    text-align: left;
    font-weight: bold;
  }
  .router-link-active{
    color: blueviolet;
  }
}

</style>