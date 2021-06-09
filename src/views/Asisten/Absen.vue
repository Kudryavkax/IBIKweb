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
                <template #cell(Waktu)="row" >
                    {{row.item.jam_mulai}} - {{row.item.jam_selesai}}
                </template>
                <template #cell(Perintah)="row">
                    <b-button size="sm" class="m-1" :to='"edit/"+row.item.tanggal'>
                    Edit
                    </b-button>
                    <b-button size="sm" class="m-1" @click="deleteabsen(row.item.tanggal)">
                    Hapus
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Absen",
    components: {
        
    },
    data() {
      return {
          fields:[
              "No", "tanggal", "Waktu", 
              {key:"kegiatan", label:"Deskripsi"}, "Perintah"
          ],
          items:[]
      }
    },
    methods: {
      // Get All Absen
      async getAbsen(id) {
        try {
          const response = await axios.get(`http://localhost:5000/absenid/${id}`);
          this.items = response.data;
          for (let index = 0; index < this.items.length; index++){
            this.items[index].tanggal = new Date(this.items[index].tanggal).toLocaleDateString().replace(/\//g, '-');
            this.items[index].jam_mulai = this.items[index].jam_mulai.substring(0,5);
            this.items[index].jam_selesai = this.items[index].jam_selesai.substring(0,5);
          }
        } catch (err) {
          console.log(err);
        }
      },
      // Delete Absen
      async deleteAbsen(id) {
        try {
          await axios.delete(`http://localhost:5000/absen/${id}`);
          this.getAbsen('1');
        } catch (err) {
          console.log(err);
        }
      },
    },
    created() {
      this.getAbsen('1');
    }
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