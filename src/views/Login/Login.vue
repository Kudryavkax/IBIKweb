<template>
    <div class="login">
        <div class="cardd">
            <router-link to="/login/admin/">
                <div class="bgimg btnadmin" ></div>
                <div class="inside">
                <h4>Login Admin</h4>
                <p>KLIK DISINI UNTUK LOGIN SEBAGAI ADMIN ATAU ASISTEN</p>
                </div>
            </router-link>
        </div>
        <div class="cardd">
            <router-link to="/login/mahasiswa/">
                <div class="bgimg btnmhs" ></div>
                <div class="inside">
                <h4>Login Mahasiswa</h4>
                <p>KLIK DISINI UNTUK LOGIN SEBAGAI MAHASISWA</p>
                </div>
            </router-link>
        </div>
        <div class="cardd">
            <router-link to="/login/perusahaan/">
                <div class="bgimg btnper" ></div>
                <div class="inside">
                <h4>Login Perusahaan</h4>
                <p>KLIK DISINI UNTUK LOGIN SEBAGAI PERUSAHAAN</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    components: {
        
    },
}
</script>

<style lang="scss">
    .login{
        display: flex;
        flex-direction: row;
        position: relative;
        padding: 20px;
        height: 840px;
        margin-top: 120px;
        justify-content: space-around;
        .cardd{
            width: 420px;
            overflow: hidden;
            .bgimg{
                position: relative;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                -webkit-transition: all .2s;
                -moz-transition: all .2s;
                -o-transition: all .2s;
                transition: all .2s;
                &:hover{
                    -ms-transform: scale(1.2);
                    -moz-transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                    -o-transform: scale(1.2);
                    transform: scale(1.2);
                }
            }
            .btnadmin{
                background-image:linear-gradient(#d95b61bb,#d95b61bb), url("../../assets/admin.jpg");
            }
            .btnmhs{
                background-image:linear-gradient(#5b68d9bb,#5b68d9bb), url("../../assets/student.jpg");
            }
            .btnper{
                background-image:linear-gradient(#d9d75bbb,#d9d75bbb), url("../../assets/perusahaan.jpg");
            }
            .inside{
                color: white;
                position: absolute;
                top: 15vh;
                padding-left: 20px;
                width: 26vw;
                h4{
                    font-size: 1.7vw;
                }
                p{
                    font-size: 1.15vw;
                }
            }
        }
    }
</style>