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
                  <label for="input-nama">Cari Pengumuman :</label>
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
            <template #cell(JudulPengumuman)="row" >
                <b-button class="link" variant="link" :to='""+row.item.noP'>
                {{row.item.judul}}</b-button>
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
        fields: ['JudulPengumuman', 'tanggal'],
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
            this.items[index].tanggal = new Date(this.items[index].tanggal).toLocaleDateString().replace(/\//g, '-');
            
          }
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
          top: 120px;
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