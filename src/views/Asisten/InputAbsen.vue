<template>
    <div class="inputabsenbody">
        <div class="title">
          <h2>{{mode}} Absen Asisten</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Tanggal Absen :</label>
            <b-form-datepicker id="example-datepicker" v-model="tanggal" class="tgl mb-2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
            <label>Jam Mulai :</label>
            <div class="time">
                <v-select class="dropdown" v-model="starthour" :options="houroptions" ></v-select>
                <h2 class="mx-1"> : </h2>
                <v-select class="dropdown" v-model="startmin" :options="minoptions" ></v-select>
            </div>
            <label>Jam Selesai :</label>
            <div class="time">
                <v-select class="dropdown" v-model="endhour" :options="houroptions" ></v-select>
                <h2 class="mx-1"> : </h2>
                <v-select class="dropdown" v-model="endmin" :options="minoptions" ></v-select>
            </div>
            <label>Deskripsi :</label>
            <b-form-textarea v-model="desc" placeholder="Masukan Deskripsi" rows="4"></b-form-textarea>
            <div class="buttongroup">
                <b-button variant="outline-secondary" @click="back">Batal</b-button>
                <b-button variant="outline-secondary" @click="saveAbsen">{{mode}} Absen</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Inputabsen",
    components: {
    },
    data(){
        return{
            tanggal:null,
            starthour:null,
            endhour:null,
            startmin:null,
            endmin:null,
            desc:null,
            houroptions:[7,8,9,10,11,12,13,14,15,16,17,18],
            minoptions:[0,15,30,45],
            mode:null
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        // Get Absen
        async getAbsenById() {
            try {
            const response = await axios.get(`http://localhost:5000/absen/${this.$route.params.id}/1`);
            this.tanggal = new Date(response.data.tanggal);
            this.desc = response.data.kegiatan;
            var jam_mulai = response.data.jam_mulai.split(':');
            this.starthour = jam_mulai[0];
            this.startmin = jam_mulai[1];
            var jam_selesai = response.data.jam_selesai.split(':');
            this.endhour = jam_selesai[0];
            this.endmin = jam_selesai[1];
            console.log(response.data);
            } catch (err) {
            console.log(err);
            }
        },
        // Update Absen
        async saveAbsen() {
            if(this.mode == 'Tambah')
                try {
                    await axios.post("http://localhost:5000/absen", {
                    kodeasisten:1,
                    tanggal: this.tanggal,
                    kegiatan: this.desc,
                    jam_mulai: this.starthour+':'+this.startmin+':00',
                    jam_selesai: this.endhour+':'+this.endmin+':00',
                    durasi: (Number(this.endhour)-Number(this.starthour))+(Number(this.endmin)-Number(this.startmin))/60,
                    });
                    this.tanggal=null;
                    this.desc=null;
                    this.starthour=null;
                    this.startmin=null;
                    this.endhour=null;
                    this.endmin=null;
                    this.$router.go(-1);
                } catch (err) {
                    console.log(err);
                }
            else
                try {
                    await axios.put(
                    `http://localhost:5000/absen/${this.$route.params.id}`,
                    {
                    kegiatan: this.desc,
                    jam_mulai: this.starthour+':'+this.startmin+':00',
                    jam_selesai: this.endhour+':'+this.endmin+':00',
                    durasi: (Number(this.endhour)-Number(this.starthour))+(Number(this.endmin)-Number(this.startmin))/60,
                    }
                    );
                    this.tanggal=null;
                    this.desc=null;
                    this.starthour=null;
                    this.startmin=null;
                    this.endhour=null;
                    this.endmin=null;
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
    created() {
      this.getAbsenById();
    }
}
</script>

<style lang="scss">
.inputabsenbody{
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
        .tgl{
            label{
                padding-top: 6px;
            }
        }
        .time{
            display: flex;
            flex-direction: row;
            .dropdown{
                width: 100px;
            }
            h2{
                margin-top: -5px;
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