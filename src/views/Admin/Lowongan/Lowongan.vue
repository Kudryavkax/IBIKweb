<template>
    <div class="lowongan">
        <div class="title">
          <h2> Lowongan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablelowongan">
          <div class="search">
            <b-container fluid>
              <b-row class="my-1">
                <b-col>
                  <label for="input-nama">Cari Lowongan:</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input id="input-nama"></b-form-input>
                </b-col>
                <b-col>
                  <b-btn class="btnsearch">Search</b-btn>
                </b-col>
                <b-col>
                  <b-btn class="btnadd" to="add"><b-icon icon="plus-circle-fill"></b-icon></b-btn>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(DurasiInternship)="row" >
                <label v-if="row.item.opsi_full == 1">{{row.item.opsi_bulan}} Bulan Full Time</label>
                <label v-else>{{row.item.opsi_bulan}} Bulan Part Time</label>
            </template>
            <template #cell(Perintah)="row">
                <b-button size="sm" class="mr-1" :to='"edit/"+row.item.kodelowongan'>
                Edit
                </b-button>
                <b-button size="sm" @click="deleteLowongan(row.item.kodelowongan)">
                Delete
                </b-button>
            </template>
          </b-table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "lowongan",
    components: {
        
    },
    data() {
      return {
        fields: [{key:'judul', label:'Judul Lowongan'}, 
        {key:'namapt', label:'Nama Perusahaan'}, 'DurasiInternship','Perintah'],
        items: [],
      }
    },
    methods: {
      // Get All Lowongan
      async getLowongan() {
        try {
          const response = await axios.get("http://localhost:5000/lowongan");
          this.items = response.data;
          console.log(response.data)
        } catch (err) {
          console.log(err);
        }
      },
      // Delete Lowongan
      async deleteLowongan(id) {
        try {
          await axios.delete(`http://localhost:5000/lowongan/${id}`);
          this.getLowongan();
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
    .lowongan{
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