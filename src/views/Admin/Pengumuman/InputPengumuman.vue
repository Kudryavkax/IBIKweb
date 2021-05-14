<template>
    <div class="Pengumumanbody">
        <div class="title">
          <h2>{{mode}} Pengumuman</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Judul Pengumuman:</label>
            <b-form-input v-model="judul" placeholder="Masukan Judul"></b-form-input>
            <label>Detail Pengumuman:</label>
            <b-form-textarea v-model="text" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <label>File Pengumuman:</label>
            <b-form-file
            class="fileform"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/admin/pengumuman">Batal</b-button>
                <b-button variant="outline-secondary" >{{mode}} Pengumuman</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputPengumuman",
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
.Pengumumanbody{
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