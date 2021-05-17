<template>
    <div class="DataMahasiswa-body">
        <h4>Data Pendaftaran Mahasiswa {{periode}}</h4>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
            <template #cell(npmnama)="row">
                {{row.item.npm}}/{{row.item.nama}}
            </template>
            <template #cell(ipksemester)="row">
                {{row.item.ipk}}/{{row.item.semester}}
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "DataMahasiswa",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:'npmnama', label:'NPM / Nama Mahasiswa'},
                        {key:'ipksemester', label:'IPK / Semester'},
                        {key:'periode', label:'Skripsi di Semester'},
                        'Jumlah',
                        'UnggahCV',
                        'UnggahTranskrip'
                        ],
            items: [
                {npm:"535180039",
                nama:"Mitchell Ryu Sopany",
                ipk:3.87,
                semester:7,
                periode:"Genap 2020/2021"}
            ]
        }
    }
}
</script>

<style lang="scss">
.DataMahasiswa-body{
    h4{
        margin: 20px;
    }
}
</style>