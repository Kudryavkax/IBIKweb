<template>
    <div class="PasswordBody">
        <label>Username :</label>
        <b-form-input v-model="username" disabled></b-form-input>
        <label>Password Lama :</label>
        <b-form-input v-model="passwordold" type="password"></b-form-input>
        <label>Password Baru :</label>
        <b-form-input v-model="passwordnew" type="password"></b-form-input>
        <label>Ulangi Password Baru :</label>
        <b-form-input v-model="passwordrepeat" type="password"></b-form-input>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Ganti Password</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "GantiPassword",
    components: {
        
    },
    data(){
        return{
            username:"535180039",
            passwordold:"",
            passwordnew:"",
            passwordrepeat:""
        }
    }
}
</script>

<style lang="scss">
.PasswordBody{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .buttongroup{
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button{
            margin:0 40px;
        }
    }
}
</style>