<template>
    <div class="Asisten-body">
        <b-btn class="btnadd my-1">Tambah Asisten <b-icon icon="plus-circle-fill"></b-icon></b-btn>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(Perintah)>
                <b-button size="sm" class="mr-1">
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
                {   NPM:"535180039",
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