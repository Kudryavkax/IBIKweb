<template>
    <div class="Periode-body">
        <b-btn class="btnadd my-1" to="add/">Tambah Periode <b-icon-plus-circle-fill></b-icon-plus-circle-fill></b-btn>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items"
            :tbody-tr-class="rowClass">
            <template #cell(Aktif)="row" >
                <b-icon-check v-if="row.item.Aktif==true"></b-icon-check>
                <b-button size="sm" class="mr-1" v-else>
                Set Aktif
                </b-button>
            </template>
            <template #cell(Perintah)="row">
                <b-button size="sm" class="m-1" :to='row.item.Key+"/lowongan/"'>
                Lowongan
                </b-button>
                <b-button size="sm" class="m-1" :to='row.item.Key+"/datamahasiswa/"'>
                Data Daftar Mahasiswa
                </b-button>
                <b-button size="sm" class="m-1" :to='row.item.Key+"/datalowongan/"'>
                Data Daftar Per Lowongan
                </b-button>
                <b-button size="sm" class="m-1" :to='row.item.Key+"/datainternship/"'>
                Data Internship
                </b-button>
                <b-button size="sm" class="m-1" :to='row.item.Key+"/dataupload/"'>
                Data Upload Internship
                </b-button>
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "Periode",
    components: {
        
    },
    data() {
      return {
          fields:[
              "Aktif","Periode", "Perintah"
          ],
          items:[
              { Key:1,
                Aktif:true,
                Periode:"GENAP 2020/2021"},
              { Key:2,
                Aktif:false,
                Periode:"GANJIL 2020/2021"},
              { Key:3,
                Aktif:false,
                Periode:"GENAP 2019/2020"},
          ]
      }
    },
    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.Aktif === true) return 'table-success'
      }
    },
    created(){
      this.$router.push("#");
    }
}
</script>

<style lang="scss">
.Periode-body{
    .btnadd{
        align-self: flex-end;
    }
}
</style>