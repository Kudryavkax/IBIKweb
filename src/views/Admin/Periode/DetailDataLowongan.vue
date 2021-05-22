<template>
    <div class="DetailDataLowongan-body">
        <h4>Data Pendaftar<br>{{lowongan.judul}}<br>{{lowongan.perusahaan}}</h4>
        <b-btn class="my-1" >Download Excel</b-btn>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
            <template #cell(UnggahLamaran)="row">
                <b-icon-check v-if="row.item.UnggahLamaran==true"></b-icon-check>
                <p v-else>-</p>
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "DetailDataLowongan",
    components: {
        
    },
    data(){
        return{
            fields: ['No','NPM', 'Nama', 'Email', 'IPK',  'UnggahLamaran'],
            items: [
                {   Key:1,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany",
                    Email:"ryusopany@gmail.com",
                    IPK:3.87,
                    UnggahLamaran:false}
            ],
            lowongan: {
                judul:"Orang Tua Group",
                perusahaan:"PT Pepper Tree Investama"
            }
        }
    }
}
</script>

<style lang="scss">
.DetailDataLowongan-body{
    h4{
        text-align: center;
    }
}
</style>