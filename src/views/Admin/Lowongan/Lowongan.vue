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
                <b-col sm="2">
                  <label for="input-nama">Cari Lowongan:</label>
                </b-col>
                <b-col sm="8">
                  <b-form-input id="input-nama"></b-form-input>
                </b-col>
                <b-col>
                  <b-btn class="btnsearch">Search</b-btn>
                </b-col>
                <b-col>
                  <b-btn class="btnadd" to="lowongan/add"><b-icon icon="plus-circle-fill"></b-icon></b-btn>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(Perintah)="row">
                <b-button size="sm" class="mr-1" :to='"lowongan/edit/"+row.item.Key'>
                Edit
                </b-button>
                <b-button size="sm">
                Delete
                </b-button>
            </template>
          </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "lowongan",
    components: {
        
    },
    data() {
      return {
        fields: ['JudulLowongan', 'NamaPerusahaan', 'DurasiInternship','Perintah'],
        items: [
          { Key:1,
            JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { Key:2,
            JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { Key:3,
            JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { Key:4,
            JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
        ],
      }
    },
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