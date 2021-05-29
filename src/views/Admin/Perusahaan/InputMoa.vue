<template>
    <div class="InputMoAPerusahaanbody">
        <div class="title">
          <h2> {{mode}} MoA Perusahaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label class="mt-3" for="datestart">Tanggal Tanda Tangan MoA :</label>
            <b-form-datepicker
            id="datestart"
            class="date"
            :v-model="start"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            ></b-form-datepicker>
            <label class="mt-3" for="dateend">Tanggal Akhir MoA :</label>
            <b-form-datepicker
            id="dateend"
            class="date"
            :v-model="end"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            ></b-form-datepicker>
            <label>Periode Tanda Tangan MoA :</label>
            <v-select class="dropdown" v-model="periode" :options="options"></v-select>
            <label>File MoA:</label>
            <b-form-file
            class="fileform"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/admin/perusahaan/data/">Batal</b-button>
                <b-button variant="outline-secondary" >{{mode}} MoA Perusahaan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputMoAPerusahaan",
    components: {
    },
    data(){
        return{
            mode:"",
            start:null,
            end:null,
            options:[
                "Genap 2020/2021",
                "Ganjil 2020/2021"
            ],
            periode:null,
            file1:null
        }
    },
    mounted() {
        this.mode=window.location.hash.substr(0,window.location.hash.lastIndexOf('/'));
        this.mode=this.mode.substring(this.mode.lastIndexOf('/')+1);
        if(this.mode=="moaadd"){
            this.mode="Tambah";
        }else{
            this.mode="Edit"
        }
    }
}
</script>

<style lang="scss">
.InputMoAPerusahaanbody{
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
        .date{
            label{
                padding-top: 6px;
            }
        }
        .fileform{
            label{
                padding-top: 6px;
            }
        }
    }
}
</style>