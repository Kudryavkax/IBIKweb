<template>
    <div class="navibar">
        <router-link class="fti-logo" to="/">
            <img src="@/assets/logo.webp" alt="">
        </router-link>
        <div class="content">
            <router-link to="/" :class="'btn '+navbar_class(0)">Home</router-link>
            <router-link to="/" :class="'btn '+navbar_class(1)">Lowongan Pekerjaan</router-link>
            <router-link to="/" :class="'btn '+navbar_class(2)">Untar Career</router-link>
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
    font-family: "Bree Serif";
    font-size: 1.2rem;
    background-image: url("../assets/backgroundnav.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw;
    img {
        height: 5vh;
    }

    .content {
        display: flex;
        flex-direction: row;
        margin: auto 0;
        .btn {
            margin: 0 10px;
            box-shadow: none;
            color: black;
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