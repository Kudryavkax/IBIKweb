<template>
    <div class="InputAsisten-body">
        <label>NPM :</label>
        <b-form-input v-model="npm"></b-form-input>
        <label>Nama :</label>
        <b-form-input v-model="nama"></b-form-input>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Tambah Asisten</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputAsisten",
    components: {
        
    },
    data(){
        return{
            npm:null,
            nama:null,
        }
    }
}
</script>

<style lang="scss">
.InputAsisten-body{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .buttongroup{
        margin: 20px 0;
        align-self: flex-end;
    }
}
</style>