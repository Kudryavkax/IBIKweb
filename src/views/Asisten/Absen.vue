<template>
    <div class="Absen-body">
        <div class="title">
          <h2>Absensi</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="table">
            <div class="btngroup">
                <b-btn class="btnadd my-1" to="add">Tambah Absen <b-icon-plus-circle-fill></b-icon-plus-circle-fill></b-btn>
                <b-btn class="btn m-1" to="cetak">Cetak Absen</b-btn>
            </div>
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row" >
                    {{row.index+1}}
                </template>
                <template #cell(Perintah)="row">
                    <b-button size="sm" class="m-1" :to='"edit/"+row.item.Key'>
                    Edit
                    </b-button>
                    <b-button size="sm" class="m-1" >
                    Hapus
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Absen",
    components: {
        
    },
    data() {
      return {
          fields:[
              "No", "Tanggal", "Waktu", "Deskripsi", "Perintah"
          ],
          items:[
              { Key:1,
                Tanggal:"11 Maret 2020",
                Waktu:"09.30 - 18.00",
                Deskripsi:"Menyusun Kepanitiaan EVOS"},
          ]
      }
    },
}
</script>

<style lang="scss">
.Absen-body{
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
    .table{
        background-color: white;
        Padding: 108px 5%;
        .btngroup{
            display: flex;
            flex-direction: row-reverse;
        }
    }
}
</style>