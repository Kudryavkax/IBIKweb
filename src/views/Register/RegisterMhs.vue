<template>
    <div class="register">
        <div class="title">
            <h2>Register Akun</h2>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="input">
            <b-container fluid>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-username">Username (NPM) :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="username" id="input-username"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-nama">Nama :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="nama" id="input-nama"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-email">Email :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="email" id="input-email"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-password">Password :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="password" id="input-password" type="password"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-upassword">Ulang Password :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="repassword" id="input-upassword" type="password"></b-form-input>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="button mt-4">
            <b-button variant="outline-secondary">Register</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    components: {
        
    },
    data(){
        return{
            username:null,
            nama:null,
            email:null,
            password:null,
            repassword:null
        }
    }
}
</script>

<style lang="scss">
    .register{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 118px 0 38px 0;
        .title{
            width: 100%;
            Padding: 20px 20px 1px 20px;
            text-align: center;
            background-color: #f9dacd;
        }
        .input{
            width: 50vw;
        }
    }
</style>