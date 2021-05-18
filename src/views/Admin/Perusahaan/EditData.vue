<template>
    <div class="EditDataPerusahaanbody">
        <div class="title">
          <h2> Edit Data Perusahaan</h2>
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
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/admin/perusahaan/data">Batal</b-button>
                <b-button variant="outline-secondary" >Edit Perusahaan</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditDataPerusahaan",
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
        }
    }
}
</script>

<style lang="scss">
.EditDataPerusahaanbody{
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
    }
}
</style>