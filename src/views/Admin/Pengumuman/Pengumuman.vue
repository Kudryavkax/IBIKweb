<template>
    <div class="Pengumuman">
        <div class="title">
          <h2> Pengumuman</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablepengumuman">
          <div class="search">
            <b-container fluid>
              <b-row class="my-1">
                <b-col>
                  <label for="input-nama">Cari Pengumuman:</label>
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
            <template #cell(Perintah)="row">
                <b-button size="sm" class="mr-1" :to='"edit/"+row.item.noP'>
                Edit
                </b-button>
                <b-button size="sm" @click="deletePengumuman(row.item.noP)">
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
    name: "Pengumuman",
    components: {
        
    },
    data() {
      return {
        fields: [{key:'judul', label:'Judul Pengumuman'}, 'tanggal','Perintah'],
        items: [],
      }
    },
    methods: {
      // Get All Pengumuman
      async getPengumuman() {
        try {
          const response = await axios.get("http://localhost:5000/pengumuman");
          this.items = response.data;
          for (let index = 0; index < this.items.length; index++) {
          this.items[index].tanggal = this.items[index].tanggal.substring(0,10);
            
          }
        } catch (err) {
          console.log(err);
        }
      },
      // Delete Pengumuman
      async deletePengumuman(id) {
        try {
          await axios.delete(`http://localhost:5000/pengumuman/${id}`);
          this.getPengumuman();
        } catch (err) {
          console.log(err);
        }
      },
    },
    created(){
      this.getPengumuman();
    }
}
</script>

<style lang="scss">
    .Pengumuman{
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
        .tablepengumuman{
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