<template>
    <div class="PeriodeAdd-body">
        <label>Semester :</label>
        <b-form-radio-group
            v-model="semester"
            :options="semesteroptions"
            class="radio-inline"
        ></b-form-radio-group>
        <label>Tahun :</label>
        <b-input-group class="mb-2">
            <b-form-input v-model="startyear"></b-form-input>
            <p>/</p>
            <b-form-input v-model="endyear"></b-form-input>
        </b-input-group>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Tambah Periode</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PeriodeAdd",
    components: {
        
    },
    data(){
        return{
            semester:null,
            semesteroptions:[
                "Ganjil","Genap"
            ],
            startyear:null,
            endyear:null,
        }
    }
}
</script>

<style lang="scss">
.PeriodeAdd-body{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    p{
        margin: 0 5px;
        font-size: 24px;
    }
    .radio-inline{
        align-self: flex-start;
            label{
                padding-top: 0;
            }
        }
    .buttongroup{
        margin: 20px 0;
        align-self: flex-end;
    }
}
</style>