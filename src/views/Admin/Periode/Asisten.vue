<template>
    <div class="Asisten-body">
        <b-btn class="btnadd my-1" to="asisten/add">Tambah Asisten <b-icon icon="plus-circle-fill"></b-icon></b-btn>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(Perintah)="row">
                <b-button size="sm" class="mr-1" :to='"asisten/absen/"+row.item.Key'>
                Absensi
                </b-button>
                <b-button size="sm" class="mr-1" :to='"asisten/edit/"+row.item.Key'>
                Edit
                </b-button>
                <b-button size="sm">
                Delete
                </b-button>
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "Asisten",
    components: {
        
    },
    data(){
        return{
            fields: ['NPM', 'Nama', 'Perintah'],
            items: [
                {   Key:1,
                    NPM:"535180039",
                    Nama:"Mitchell Ryu Sopany"}
            ]
        }
    }
}
</script>

<style lang="scss">
.Asisten-body{
    .btnadd{
        align-self: flex-end;
    }
}
</style>