<template>
    <div class="login">
        <div class="title">
            <h2>Login</h2>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="input">
            <b-container fluid>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-username">Username:</label>
                    </b-col>
                    <b-col>
                    <b-form-input id="input-username"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-password">Password:</label>
                    </b-col>
                    <b-col>
                    <b-form-input id="input-password" type="password"></b-form-input>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="button mt-4">
            <b-button variant="outline-secondary">Login</b-button>
        </div>
        <div class="registrasi">
            Belum ada Akun? <b-button class="link" variant="link" to="/register">Buat Akun</b-button>
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
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 0;
        .title{
            Padding: 20px 20px 1px 20px;
            text-align: center;
            background-color: #f9dacd;
            width: 100%;
        }
        .input{
            align-items: center;
            width: 50vw;
        }
        .registrasi{
            .link{
                margin: 0;
                padding-top: 0;
                padding-left: 8px;
            }
        }
    }
</style>