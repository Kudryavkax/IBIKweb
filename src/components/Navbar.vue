<template>
    <div class="navibar">
        <router-link class="fti-logo" to="/">
            <img src="@/assets/logo.png" alt="">
        </router-link>
        <div class="content">
            <router-link to="/home" :class="'btn '+navbar_class(0)" @click.native="active_page = 0">HOME</router-link>
            <router-link to="/" :class="'btn '+navbar_class(1)" @click.native="active_page = 1">LOWONGAN PEKERJAAN</router-link>
            <a href="https://career.untar.ac.id/index.php/ind" :class="'btn '">UNTAR CAREER</a>
            <router-link to="/" :class="'btn '+navbar_class(2)" @click.native="active_page = 2">
            <b-icon icon="person-fill"></b-icon>
            LOGIN
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    components: {},
    data() {
    return {
      active_page: 0
    }
  },
  methods: {
    navbar_class(val) {
      if(this.active_page == val){
        return "active";
      }
      else{
        return "";
      }
    }
  },
  created() {
    switch (this.$route.path) {
      case '/home':
        this.active_page = 0
            break;
      case '/lowongan':
        this.active_page = 1
        break;
      case '/login':
        this.active_page = 2
        break;
    }
  }
}
</script>

<style scoped lang="scss">
.navibar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    width: 100vw;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient( rgb(255, 235, 205, 0.3),rgb(255, 235, 205, 0.3)), url("../assets/backgroundnav.jpg") ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw;
    .fti-logo{
      padding: 10px;
      &:hover{
        background-color: rgb(255, 235, 205, 0.1);
      }
      img {
          height: 90px;
      }
    }

    .content {
        display: flex;
        flex-direction: row;
        margin: auto 0;
        .btn {
            margin: 0 4px;
            box-shadow: none;
            color: black;
            font-family: "Bree Serif";
            font-size: 1.2rem;
            &.active {
                color: violet;
                &::after {
                    content: "";
                    background: white;
                    display: block;
                    top: 0;
                    width: 100%;
                    height: 2px;
                }
            }
        }
    }
}
</style>