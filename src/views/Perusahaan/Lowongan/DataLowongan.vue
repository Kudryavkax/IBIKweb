<template>
    <div class="DetailDataLowongan-body">
        <div class="title">
            <h4>Data Pendaftar<br>{{lowongan.judul}}</h4>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="table">
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(Mahasiswa)="row">
                    {{row.item.NPM}}<br>{{row.item.Nama}}
                </template>
                <template #cell(File)>
                    <b-button size="sm" class="m-1" >
                    CV
                    </b-button>
                    <b-button size="sm" class="m-1" >
                    Transkrip Nilai
                    </b-button>
                    <b-button size="sm" class="m-1" >
                    Surat Lamaran
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailDataLowongan",
    components: {
        
    },
    data(){
        return{
            fields: ['No','Mahasiswa', 'Email', 'IPK', 'File'],
            items: [
                {   Key:1,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany",
                    Email:"ryusopany@gmail.com",
                    IPK:3.87,
                    cv:null,
                    transkrip:null,
                    lamaran:null},
                {   Key:2,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany",
                    Email:"ryusopany@gmail.com",
                    IPK:3.87,
                    cv:null,
                    transkrip:null,
                    lamaran:null}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 118px 0 58px 0;
    .title{
        position: sticky;
        top: 118px;
        width: 100vw;
        z-index: 98;
        Padding: 20px 20px 1px 20px;
        text-align: center;
        background-color: #f9dacd;
    }
    .table{
        Padding: 108px 5%;
    }
}
</style>