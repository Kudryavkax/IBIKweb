<template>
    <div class="InputDataPerusahaanbody">
        <div class="title">
          <h2> Tambah Data Perusahaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
            <label>Nama Perusahaan :</label>
            <b-form-input v-model="nama"></b-form-input>
            <label>Nama Alias Perusahaan :</label>
            <b-form-input v-model="alias"></b-form-input>
            <label>Banyak Alamat :</label>
            <b-form-input v-model="banyakalamat"></b-form-input>
            <h4>Alamat Perusahaan</h4>
            <b-table hover 
                head-variant="light"
                :fields="alamatfields"
                :items="alamatitems">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(ket)>
                    <b-form-input v-model="keterangan"></b-form-input>
                </template>
                <template #cell(Alamat)>
                    <b-form-textarea
                    id="textarea"
                    v-model="desalamat"
                    max-rows="3"
                    ></b-form-textarea>
                </template>
            </b-table>
            <label>Banyak Kontak :</label>
            <b-form-input v-model="banyakkontak"></b-form-input>
            <h4>Kontak Perusahaan</h4>
            <b-table hover 
                head-variant="light"
                :fields="kontakfields"
                :items="kontakitems">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(Nama)>
                    <b-form-input v-model="namakontak"></b-form-input>
                </template>
                <template #cell(Telepon)>
                    <b-form-input v-model="telepon"></b-form-input>
                </template>
                <template #cell(Email)>
                    <b-form-input v-model="email"></b-form-input>
                </template>
            </b-table>
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
                <b-button variant="outline-secondary" to="/admin/perusahaan/data">Batal</b-button>
                <b-button variant="outline-secondary" >Tambah Perusahaan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputDataPerusahaan",
    components: {
    },
    data(){
        return{
            nama:"",
            alias:"",
            banyakalamat:0,
            alamatitems:[""],
            alamatfields:[
                "No",
                {key:"ket",label:"Ket. Alamat"},
                "Alamat"
            ],
            keterangan:null,
            desalamat:null,
            banyakkontak:0,
            kontakitems:[""],
            kontakfields:[
                "No",
                "Nama",
                "Telepon",
                "Email"
            ],
            namakontak:null,
            telepon:null,
            email:null,
            start:null,
            end:null,
            options:[
                "Genap 2020/2021",
                "Ganjil 2020/2021"
            ],
            periode:null,
            file1:null
        }
    }
}
</script>

<style lang="scss">
.InputDataPerusahaanbody{
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
        h4{
            margin: 20px 0;
            text-align: center;
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