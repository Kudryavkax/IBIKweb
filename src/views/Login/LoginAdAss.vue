<template>
    <div class="loginAdAss">
        <div class="title">
            <h2>Login Admin dan Asisten</h2>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="input">
            <b-container fluid>
                <b-row class="mt-3">
                    <b-col sm="4">
                    <label for="input-username">Username :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="username" id="input-username"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="4">
                    <label for="input-password">Password :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="password" id="input-password" type="password"></b-form-input>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="button mt-4">
            <b-button variant="outline-secondary" @click="loginfunc">Login</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginAdmin_Asisten",
    components: {
        
    },
    methods:{
        loginfunc(){
            if(this.username=="admin"&&this.password=="admin")
                this.$router.push("/admin/")
            else
                this.$router.push("/asisten/")
        }
    },
    data(){
        return{
            username:null,
            password:null
        }
    }
}
</script>

<style lang="scss">
    .loginAdAss{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 0 0 140px 0;
        margin: 118px 0 48px 0;
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
    }
</style>