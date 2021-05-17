<template>
    <div class="AkunPerusahaan-body">
        <div class="title">
          <h2>Akun Perusahaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablebody">
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(Akun)="row">
                    <b-button v-if="row.item.Akun==true" size="sm" class="mr-1" :to='"akun/view/"+row.item.Key'>
                    Lihat Akun
                    </b-button>
                    <h4 v-else>-</h4>
                </template>
                <template #cell(Perintah)="row">
                    <b-button v-if="row.item.Akun==false" size="sm" class="mr-1" :to='"akun/add/"+row.item.Key'>
                    Tambah Akun
                    </b-button>
                    <b-button v-else size="sm" class="mr-1">
                    Hapus Akun
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "AkunPerusahaan",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:"nama", label:"Nama Perusahaan"},
                        {key:"alias", label:"Nama Alias"},
                        "Akun",
                        "Perintah"
                        ],
            items: [
                        {Key:1,
                        nama:"DICE Ice Cube",
                        alias:"DICE",
                        Akun:true},
                        {Key:2,
                        nama:"PT Adicipta Inovasi Teknologi",
                        alias:"AdIns",
                        Akun:false}
            ]
        }
    }
}
</script>

<style lang="scss">
.AkunPerusahaan-body{
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
    .tablebody{
        background-color: white;
        Padding: 108px 5%;
    }
}
</style>