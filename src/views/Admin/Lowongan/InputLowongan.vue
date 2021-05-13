<template>
    <div class="lowonganbody">
        <div class="title">
          <h2>{{mode}} Lowongan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Judul Lowongan:</label>
            <b-form-input v-model="judul" placeholder="Masukan Judul"></b-form-input>
            <label>Detail Lowongan:</label>
            <b-form-textarea v-model="text" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <label>File Lowongan:</label>
            <b-form-file
            class="fileform"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/admin/lowongan">Batal</b-button>
                <b-button variant="outline-secondary" >{{mode}} Lowongan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Inputlowongan",
    components: {
        
    },
    data(){
        return{
            judul:"",
            text:"",
            mode:"Tambah",
            file1:null
        }
    }
}
</script>

<style lang="scss">
.lowonganbody{
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
        .fileform{
            label{
                padding-top: 6px;
            }
        }
        .buttongroup{
            margin: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            button{
                margin:0 40px;
            }
        }
    }
}
</style>