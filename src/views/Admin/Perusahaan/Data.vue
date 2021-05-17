<template>
    <div class="DataPerusahaan-body">
        <div class="title">
          <h2>Data Perusahaan</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="tablebody">
            <b-btn class="btnadd my-1" to="data/add"><b-icon icon="plus-circle-fill"></b-icon></b-btn>
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row">
                    {{row.index +1}}
                </template>
                <template #cell(tandatangan)="row">
                    {{row.item.tanggalawal}} <br> s/d <br> {{row.item.tanggalakhir}}
                </template>
                <template #cell(Perintah)="row">
                    <b-button size="sm" class="mr-1" :to='"data/edit/"+row.item.Key'>
                    Edit
                    </b-button>
                </template>
                <template #cell(MoA)="row">
                    <b-dropdown id="dropdown-1" text="Perintah" class="m-md-2">
                        <b-dropdown-item>Download</b-dropdown-item>
                        <b-dropdown-item :to='"data/moaadd/"+row.item.Key'>Tambah</b-dropdown-item>
                        <b-dropdown-item :to='"data/moaedit/"+row.item.Key'>Edit</b-dropdown-item>
                        <b-dropdown-item >Hapus</b-dropdown-item>
                    </b-dropdown>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataPerusahaan",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:"nama", label:"Nama Perusahaan"},
                        {key:"alias", label:"Nama Alias"},
                        "Periode",
                        "Perintah",
                        {key:"tandatangan", label:"Tanggal Tanda Tangan - Akhir MoA"},
                        {key:"MoA",label:"MoA"},
                        ],
            items: [
                        {Key:1,
                        nama:"DICE Ice Cube",
                        alias:"DICE",
                        tanggalawal:"24 Juli 2020",
                        tanggalakhir:"23 Juli 2021",
                        Periode:"Ganjil 2020/2021"},
            ]
        }
    }
}
</script>

<style lang="scss">
.DataPerusahaan-body{
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
        text-align: center;
        display: flex;
        flex-direction: column;
        .btnadd{
            align-self: flex-end;
            
        }
        background-color: white;
        Padding: 108px 5%;
    }
}
</style>