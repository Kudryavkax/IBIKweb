<template>
    <div class="Namabody">
        <label>Username :</label>
        <b-form-input v-model="username" disabled></b-form-input>
        <label>Nama :</label>
        <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Ganti Nama</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "GantiNama",
    components: {
        
    },
    data(){
        return{
            username:"535180039",
            nama:"Mitchell Ryu Sopany"
        }
    }
}
</script>

<style lang="scss">
.Namabody{
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