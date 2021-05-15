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
            <template #cell(perintah)>
                <b-button size="sm" class="m-1">
                Detail Pendaftar
                </b-button>
                <b-button size="sm" class="m-1">
                Excel Pendaftar
                </b-button>
                <b-button size="sm" class="m-1">
                Proses Diterima
                </b-button>
                <b-button size="sm" class="m-1">
                Excel Diterima
                </b-button>
                <b-button size="sm" class="m-1">
                Zip File
                </b-button>
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
                        'Perintah'
                        ],
            items: [
                {JudulLowongan:"Orang Tua Group",
                NamaPerusahaan:"PT Pepper Tree Investama"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.DataLowongan-body{
}
</style>