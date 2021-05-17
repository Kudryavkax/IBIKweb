<template>
    <div class="DataUpload-body">
        <h4>Data Upload Internship {{periode}}</h4>
        <h3>Teknik Informatika</h3>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
        </b-table>
        <h3>Sistem Informasi</h3>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "DataUpload",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:"npmnama", label:"NPM / Nama"},
                        "KHS",
                        {key:"terima", label:"Surat diterima Internship"},
                        {key:"fti", label:"Surat FTI ke Perusahaan"},
                        "Logbook",
                        "Laporan"
                        ],
            items: [
            ]
        }
    }
}
</script>

<style lang="scss">
.DataUpload-body{
    h4{
        margin: 20px;
    }
}
</style>