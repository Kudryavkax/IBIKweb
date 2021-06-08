<template>
    <div class="Lowongan">
        <div class="title">
          <h2> Lowongan Pekerjaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablelowongan">
          <div class="search">
            <b-container fluid>
              <b-row class="my-1">
                <b-col>
                  <label for="input-nama">Cari Lowongan :</label>
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
            <template #cell(JudulLowongan)="row" >
                <b-button class="link" variant="link" :to='""+row.item.kodelowongan'>
                {{row.item.judul}}</b-button>
            </template>
            <template #cell(DurasiInternship)="row" >
                <label v-if="row.item.opsi_full = 1">{{row.item.opsi_bulan}} Bulan Full Time</label>
                <label v-else>{{row.item.opsi_bulan}} Bulan Part Time</label>
            </template>
          </b-table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Lowongan",
    components: {
        
    },
    data() {
      return {
        fields: ['JudulLowongan', 
        {key:'namapt', label:'Nama Perusahaan'}, 'DurasiInternship'],
        items: [],
      }
    },
    methods: {
      // Get All Lowongan
      async getLowongan() {
        try {
          const response = await axios.get("http://localhost:5000/lowongan");
          this.items = response.data;
        } catch (err) {
          console.log(err);
        }
      },
    },
    created() {
      this.getLowongan();
    }
}
</script>

<style lang="scss">
    .Lowongan{
        display: flex;
        flex-direction: column;
        margin: 10vh 0 0 0;
        padding-bottom: 50px;
        .title{
          position: sticky;
          top: 120px;
          z-index: 98;
          width: 100vw;
          Padding: 20px 20px 1px 20px;
          background-color: #fcb4d8;
          text-align: center;
        }
        .tablelowongan{
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