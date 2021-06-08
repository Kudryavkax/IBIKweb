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
            <b-form-textarea v-model="deskripsi" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <label>Perusahaan :</label>
            <v-select class="dropdown" v-model="kodept" :options="options"></v-select>
            <label>Durasi Internship :</label>
            <b-form-radio-group
                v-model="opsi_bulan"
                :options="durasioptions"
                class="radio-inline"
            ></b-form-radio-group>
            <label>Part/Full Time Internship :</label>
            <b-form-radio-group
                v-model="opsi_full"
                :options="tipeoptions"
                class="radio-inline"
            ></b-form-radio-group>
            <label>File Lowongan :</label>
            <b-form-file
            class="fileform"
            v-model="nmfile"
            :state="Boolean(nmfile)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" @click="back">Batal</b-button>
                <b-button variant="outline-secondary" @click="saveLowongan">{{mode}} Lowongan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Inputlowongan",
    components: {
    },
    data(){
        return{
            judul:"",
            deskripsi:"",
            mode:"",
            nmfile:null,
            kodept:null,
            opsi_bulan:null,
            opsi_full:null,
            durasioptions:[
                {text:"3 Bulan", value:3},
                {text:"6 Bulan", value:6},
                {text:"9 Bulan", value:9},
                {text:"12 Bulan", value:12},
            ],
            tipeoptions:[
                {text:"Part Time", value:0},
                {text:"Full Time", value:1}
            ],
            options:[
                {label:"BCA", id:1},
                {label:"applebee", id:2},
                {label:"applebecause", id:3},
            ],
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        // Get All Lowongan
        async getLowonganById() {
            try {
            const response = await axios.get(`http://localhost:5000/lowongan/${this.$route.params.id}`);
            this.judul = response.data.judul;
            this.deskripsi = response.data.deskripsi;
            this.nmfile = response.data.nmfile;
            this.kodept = response.data.kodept;
            this.opsi_bulan = response.data.opsi_bulan;
            this.opsi_full = response.data.opsi_full;
            } catch (err) {
            console.log(err);
            }
        },
        // Update Lowongan
        async saveLowongan() {
            if(this.mode == 'Tambah')
                try {
                    await axios.post("http://localhost:5000/lowongan", {
                    judul: this.judul,
                    deskripsi: this.deskripsi,
                    nmfile: this.nmfile,
                    kodept: this.kodept,
                    opsi_bulan: this.opsi_bulan,
                    opsi_full: this.opsi_full,
                    periode: '202122A',
                    });
                    this.judul = null;
                    this.deskripsi = null;
                    this.nmfile = null;
                    this.kodept = null;
                    this.opsi_bulan = null;
                    this.opsi_full = null;
                    this.$router.go(-1);
                } catch (err) {
                    console.log(err);
                }
            else
                try {
                    await axios.put(
                    `http://localhost:5000/pengumuman/${this.$route.params.id}`,
                    {
                    judul: this.judul,
                    deskripsi: this.deskripsi,
                    nmfile: this.nmfile,
                    kodept: this.kodept,
                    opsi_bulan: this.opsi_bulan,
                    opsi_full: this.opsi_full,
                    }
                    );
                    this.judul='';
                    this.isi='';
                    this.nmfile=null;
                    this.kodept = null;
                    this.opsi_bulan = null;
                    this.opsi_full = null;
                    this.$router.go(-1);
                } catch (err) {
                    console.log(err);
                }
        },
    },
    mounted() {
        this.mode=window.location.hash.substring(window.location.hash.lastIndexOf('/')+1);
        if(this.mode=="add"){
            this.mode="Tambah";
        }else{
            this.mode="Edit"
        }
    },
    created(){
        if (this.$route.params != null){
            this.getLowonganById();
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