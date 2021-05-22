<template>
    <div class="DataLowongan-body">
        <h4>Data Pendaftaran Per Lowongan {{periode}}</h4>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
            <template #cell(perintah)="row">
                <b-dropdown id="dropdown-1" text="Perintah" class="m-md-2">
                        <b-dropdown-item :to='"datalowongan/"+row.item.Key+"/detail"'>Detail Pendaftar</b-dropdown-item>
                        <b-dropdown-item :to='"datalowongan/"+row.item.Key+"/status"'>Status Diterima</b-dropdown-item>
                    </b-dropdown>
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "DataLowongan",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        'JudulLowongan',
                        'NamaPerusahan',
                        'UnggahLamaran',
                        'Jumlah',
                        {key:'Perintah', label:""}
                        ],
            items: [
                {Key:1,
                JudulLowongan:"Orang Tua Group",
                NamaPerusahaan:"PT Pepper Tree Investama"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.DataLowongan-body{
    h4{
        margin: 20px;
    }
}
</style>