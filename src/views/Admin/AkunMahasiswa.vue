<template>
    <div class="AkunMahasiswa-body">
        <div class="title">
          <h2>Akun Mahasiswa</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablebody">
            <div class="search">
            <b-container fluid>
              <b-row class="my-1">
                <b-col sm="2">
                  <label for="input-nama">Cari Mahasiswa :</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input id="input-nama"></b-form-input>
                </b-col>
                <b-col>
                  <b-btn class="btnsearch">Search</b-btn>
                </b-col>
              </b-row>
            </b-container>
            </div>
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(Perintah)>
                    <b-button size="sm" class="mr-1">
                    Reset Password
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "AkunMahasiswa",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:"npm", label:"NPM"},
                        {key:"nama", label:"Nama"},
                        "Perintah"
                        ],
            items: [
                        {Key:1,
                        npm:535180039,
                        nama:"Mitchell Ryu Sopany"},
            ]
        }
    }
}
</script>

<style lang="scss">
.AkunMahasiswa-body{
    display: flex;
    flex-direction: column;
    margin: 10vh 0 0 0;
    padding-bottom: 50px;
    .title{
        position: sticky;
        top: 108px;
        width: 100vw;
        z-index: 98;
        Padding: 20px 20px 1px 20px;
        background-color: #fcb4d8;
        text-align: center;
    }
    .tablebody{
        background-color: white;
        Padding: 108px 5%;
        .search{
            display: flex;
            flex-direction: row;
            padding-bottom: 30px;
          }
    }
}
</style>