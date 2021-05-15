<template>
    <div class="register">
        <div class="title">
            <h2>Daftar Perusahaan</h2>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="input">
            <b-container fluid>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-namapt">Nama Perusahaan :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="nama" id="input-namapt"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-alias">Alias Perusahaan :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="alias" id="input-alias"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-alamat">Alamat :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="alamat" id="input-alamat "></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-kontak">Nama Kontak :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="kontak" id="input-kontak"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-nokontak">Nomor Kontak :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="telepon" id="input-nokontak"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="3">
                    <label for="input-emailkontak">Email Kontak :</label>
                    </b-col>
                    <b-col>
                    <b-form-input v-model="email" id="input-emailkontak"></b-form-input>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="button mt-4">
            <b-button variant="outline-secondary">Daftar</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    components: {
        
    },
    data(){
        return{
            nama:null,
            alias:null,
            alamat:null,
            kontak:null,
            telepon:null,
            email:null

        }
    }
}
</script>

<style lang="scss">
    .register{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 118px 0 58px 0;
        .title{
            width: 100%;
            Padding: 20px 20px 1px 20px;
            text-align: center;
            background-color: #f9dacd;
        }
        .input{
            width: 50vw;
        }
    }
</style>