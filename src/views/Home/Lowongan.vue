<template>
    <div class="Lowongan">
        <div class="title">
          <h2> Lowongan Pekerjaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablelowongan">
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
        .title{
        position: sticky;
        top: 108px;
        width: 100vw;
        Padding: 10px 20px 1px 20px;
        background-color: hotpink;
        text-align: center;
        }
        .tablelowongan{
        height: 80vh;
        background-color: white;
        Padding: 10vh 5%;
        }
    }
</style>