<template>
    <div class="lowonganbody">
        <div class="title">
          <h2>{{mode}} Lowongan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Judul Lowongan :</label>
            <b-form-input v-model="judul" placeholder="Masukan Judul"></b-form-input>
            <label>Detail Lowongan :</label>
            <b-form-textarea v-model="text" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <label>Durasi Internship :</label>
            <b-form-radio-group
                v-model="durasi"
                :options="durasioptions"
                class="radio-inline"
            ></b-form-radio-group>
            <label>Part/Full Time Internship :</label>
            <b-form-radio-group
                v-model="tipe"
                :options="tipeoptions"
                class="radio-inline"
            ></b-form-radio-group>
            <label>File Lowongan :</label>
            <b-form-file
            class="fileform"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/asisten/lowongan">Batal</b-button>
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
            mode:"",
            file1:null,
            perusahaan:null,
            tipe:null,
            durasi:null,
            durasioptions:[
                "3 Bulan",
                "6 Bulan",
                "9 Bulan",
                "12 Bulan",
            ],
            tipeoptions:[
                "Part Time",
                "Full Time"
            ],
            options:[
                "PT ",
                "applebee",
                "applebecause"
            ],
        }
    },
    mounted() {
        this.mode=window.location.hash.substring(window.location.hash.lastIndexOf('/')+1);
        if(this.mode=="add"){
            this.mode="Tambah";
        }else{
            this.mode="Edit"
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
        .radio-inline{
            label{
                padding-top: 0;
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