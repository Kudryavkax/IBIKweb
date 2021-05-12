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
                <b-col sm="2">
                  <label for="input-nama">Cari Lowongan:</label>
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
    name: "Lowongan",
    components: {
        
    },
    data() {
      return {
        fields: ['JudulLowongan', 'NamaPerusahaan', 'DurasiInternship'],
        items: [
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
          { JudulLowongan: 'CRM FUNCTIONAL CONSULTANT INSTERNSHIP', 
            NamaPerusahaan: 'PT Dynamics Inovasi Solusindo', 
            DurasiInternship: '12 Bulan Full Time' },
        ],
      }
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
          top: 108px;
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