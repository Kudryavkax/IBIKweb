<template>
    <div class="AbsenAsisten-body">
        <label>Nama :</label>
        <b-form-input v-model="nama" disabled></b-form-input>
        <label class="mt-3" for="datestart">Tanggal Awal :</label>
        <b-form-datepicker
        id="datestart"
        class="date"
        :v-model="start"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <label class="mt-3" for="dateend">Tanggal Akhir :</label>
        <b-form-datepicker
        id="dateend"
        class="date"
        :v-model="end"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <b-btn variant="outline-secondary" class="btnsave my-1">Download</b-btn>
    </div>
</template>

<script>
export default {
    name: "AbsenAsisten",
    components: {
        
    },
    data(){
        return{
            nama:"Mitchell Ryu Sopany",
            start:null,
            end:null
        }
    },
}
</script>

<style lang="scss">
.AbsenAsisten-body{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .date{
        label{
            padding-top: 6px;
        }
    }
    .btnsave{
        align-self: flex-end;
    }
}
</style>