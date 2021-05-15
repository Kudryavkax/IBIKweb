<template>
    <div class="LowonganPeriode">
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
          </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "LowonganPeriode",
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
    .LowonganPeriode{
        display: flex;
        flex-direction: column;
        .tablelowongan{
          background-color: white;
          .search{
            display: flex;
            flex-direction: row;
            padding-bottom: 30px;
          }
        }
    }
</style>