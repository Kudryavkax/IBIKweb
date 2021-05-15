<template>
    <div class="MasaInput-body">
        <label class="mt-3" for="datestart">Awal Masa Input Data :</label>
        <b-form-datepicker
        id="datestart"
        class="date"
        :v-model="start"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <label class="mt-3" for="dateend">Akhir Masa Input Data :</label>
        <b-form-datepicker
        id="dateend"
        class="date"
        :v-model="end"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        ></b-form-datepicker>
        <b-btn variant="outline-secondary" class="btnsave my-1">Simpan</b-btn>
    </div>
</template>

<script>
export default {
    name: "MasaInput",
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
.MasaInput-body{
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