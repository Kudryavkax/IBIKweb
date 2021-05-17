<template>
    <div class="DataInternship-body">
        <h4>Data Internship {{periode}}</h4>
        <h3>Teknik Informatika</h3>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
        </b-table>
        <h3>Sistem Informasi</h3>
        <b-table hover 
            head-variant="light"
            :fields="fields"
            :items="items">
            <template #cell(No)="row">
                {{row.index +1}}
            </template>
          </b-table>
    </div>
</template>

<script>
export default {
    name: "DataInternship",
    components: {
        
    },
    data(){
        return{
            periode:"Genap 2020/2021",
            fields: [   'No',
                        {key:"npmnama", label:"NPM / Nama"},
                        {key:"emailhp", label:"Email / HP"},
                        {key:"ipksmt", label:"IPK / Semester"},
                        "lowongan"
                        ],
            items: [
            ]
        }
    }
}
</script>

<style lang="scss">
.DataInternship-body{
    h4{
        margin: 20px;
    }
}
</style>