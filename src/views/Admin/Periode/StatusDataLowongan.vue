<template>
    <div class="StatusDataLowongan-body">
        <h4>Status Pendaftar<br>{{lowongan.judul}}<br>{{lowongan.perusahaan}}</h4>
        <b-btn class="my-1" >Download Excel</b-btn>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
            <template #cell(Status)="row">
                <b-form-radio-group
                    v-model="row.item.Status"
                    :options="options"
                    class="radio-inline"
                ></b-form-radio-group>
            </template>
          </b-table>
          <div class="buttongroup">
              <b-button variant="outline-secondary mr-1" @click="back" >Batal</b-button>
            <b-button variant="outline-secondary" >Simpan</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "StatusDataLowongan",
    components: {
        
    },
    data(){
        return{
            lowongan: {
                judul:"Orang Tua Group",
                perusahaan:"PT Pepper Tree Investama"
            },
            fields: ['No', 'NPM', 'Nama', 'Status'],
            items: [
                {   Key:1,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany",
                    Status:"Diterima"},
                {   Key:2,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany",
                    Status:"Belum"}
            ],
            options:['Belum', 'Diterima', 'Ditolak']
        }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
}
</script>

<style lang="scss">
.StatusDataLowongan-body{
    h4{
        text-align: center;
    }
    .buttongroup{
        margin: 20px 0;
        align-self: flex-end;
    }
}
</style>