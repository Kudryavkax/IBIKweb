<template>
    <div class="navibar">
      <b-navbar toggleable="lg" class="navibar-top" type="light" variant="dark">
        <b-navbar-brand class="fti-logo" to="/home/">
        <img src="@/assets/logo.webp" alt="">
        </b-navbar-brand>
        <b-nav-toggle target="nav-content"></b-nav-toggle>
        <b-collapse id="nav-content" is-nav>
          <b-navbar-nav class="ml-auto">
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
    components: {}
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