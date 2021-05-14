<template>
    <div class="MasaDaftar-body">
        <label class="mt-3" for="datestart">Awal Masa Pendaftaran :</label>
        <b-form-datepicker
        id="datestart"
        class="date"
        :v-model="start"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <label class="mt-3" for="dateend">Akhir Masa Pendafataran :</label>
        <b-form-datepicker
        id="dateend"
        class="date"
        :v-model="end"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <b-btn class="btnsave my-1">Simpan</b-btn>
    </div>
</template>

<script>
export default {
    name: "MasaDaftar",
    components: {
        
    },
    data(){
        return{
            start:null,
            end:null
        }
    },
}
</script>

<style lang="scss">
.MasaDaftar-body{
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