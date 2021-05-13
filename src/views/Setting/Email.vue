<template>
    <div class="EmailBody">
        <label>Username:</label>
        <b-form-input v-model="username" disabled></b-form-input>
        <label>Email:</label>
        <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Ganti Email</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "GantiEmail",
    components: {
        
    },
    data(){
        return{
            username:"535180039",
            email:"Mitchell.535180039@stu.untar.ac.id"
        }
    }
}
</script>

<style lang="scss">
.EmailBody{
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