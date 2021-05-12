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
                <b-col sm="2">
                  <label for="input-nama">Cari Pengumuman:</label>
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
          </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pengumuman",
    components: {
        
    },
    data() {
      return {
        fields: ['JudulPengumuman', 'Tanggal'],
        items: [
          { Key: 1,
            JudulPengumuman: 'Webinar IDStar "Moving Towards Society 5.0"', 
            Tanggal: '31 Oktober 2020'},
          { Key: 2,
            JudulPengumuman: 'Webinar IDStar "Moving Towards Society 5.0"', 
            Tanggal: '31 Oktober 2020'},
          { Key: 3,
            JudulPengumuman: 'Webinar IDStar "Moving Towards Society 5.0"', 
            Tanggal: '31 Oktober 2020'},
          { Key: 4,
            JudulPengumuman: 'Webinar IDStar "Moving Towards Society 5.0"', 
            Tanggal: '31 Oktober 2020'},
        ],
      }
    },
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