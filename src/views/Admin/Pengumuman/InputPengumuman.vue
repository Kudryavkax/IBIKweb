<template>
    <div class="Pengumumanbody">
        <div class="title">
          <h2>{{mode}} Pengumuman</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Judul Pengumuman :</label>
            <b-form-input v-model="judul" placeholder="Masukan Judul"></b-form-input>
            <label>Detail Pengumuman :</label>
            <b-form-textarea v-model="isi" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <label>File Pengumuman :</label>
            <b-form-file
            class="fileform"
            v-model="nmfile"
            :state="Boolean(nmfile)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" @click="back">Batal</b-button>
                <b-button variant="outline-secondary" @click="savePengumuman" >{{mode}} Pengumuman</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "InputPengumuman",
    components: {
        
    },
    data(){
        return{
            judul:'',
            isi:'',
            nmfile:null,
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        // Get All Pengumuman
        async getPengumumanById() {
            try {
            const response = await axios.get(`http://localhost:5000/pengumuman/${this.$route.params.id}`);
            this.judul = response.data.judul;
            this.isi = response.data.isi;
            this.nmfile = response.data.nmfile;
            } catch (err) {
            console.log(err);
            }
        },
        // Update Pengumuman
        async savePengumuman() {
            if(this.mode == 'Tambah')
                try {
                    await axios.post("http://localhost:5000/pengumuman", {
                    judul: this.judul,
                    isi: this.isi,
                    nmfile: this.nmfile,
                    periode: '202122A'
                    });
                    this.judul='';
                    this.isi='';
                    this.nmfile=null;
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
                    isi: this.isi,
                    nmfile: this.nmfile,
                    }
                    );
                    this.judul='';
                    this.isi='';
                    this.nmfile=null;
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
            this.getPengumumanById();
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