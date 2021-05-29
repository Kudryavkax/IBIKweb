<template>
    <div class="InputAkunPerusahaanbody">
        <div class="title">
          <h2>{{mode}} Akun Perusahaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Perusahaan :</label>
            <b-form-input v-model="perusahaan"></b-form-input>
            <label>Username :</label>
            <b-form-input v-model="username"></b-form-input>
            <label>Nama :</label>
            <b-form-input v-model="name"></b-form-input>
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/admin/perusahaan/akun/">Batal</b-button>
                <b-button variant="outline-secondary" >{{mode}} Lowongan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputAkunPerusahaan",
    components: {
    },
    data(){
        return{
            perusahaan:"",
            username:"",
            name:"",
            mode:"",
        }
    },
    mounted() {
        this.mode=window.location.hash.substr(0,window.location.hash.lastIndexOf('/'));
        this.mode=this.mode.substring(this.mode.lastIndexOf('/')+1);
        if(this.mode=="add"){
            this.mode="Tambah";
        }else{
            this.mode="Edit"
        }
    }
}
</script>

<style lang="scss">
.InputAkunPerusahaanbody{
    .title{
        position: sticky;
        top: 108px;
        width: 100vw;
        z-index: 98;
        Padding: 20px 20px 1px 20px;
        background-color: #fcb4d8;
        text-align: center;
    }
    .forminput{
        margin: 100px;
        label{
            align-self: flex-start;
            padding-top: 20px;
        }
        .buttongroup{
            margin: 20px 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            button{
                margin-left: 20px;
            }
        }
    }
}
</style>