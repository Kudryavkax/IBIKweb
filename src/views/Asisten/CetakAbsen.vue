<template>
    <div class="CetakAbsen-body">
        <div class="title">
          <h2>Cetak Absen Asisten</h2>
          <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="forminput">
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
            <div class="buttongroup">
                <b-button variant="outline-secondary" to="/asisten/absen">Batal</b-button>
                <b-button variant="outline-secondary" >Download</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CetakAbsen",
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
.CetakAbsen-body{
    .title{
        position: sticky;
        top: 108px;
        width: 100vw;
        z-index: 98;
        Padding: 20px 20px 1px 20px;
        background-color: #fcb4d8;
        text-align: center;
    }
    .forminput{
        margin: 100px;
        label{
            align-self: flex-start;
            padding-top: 20px;
        }
        .date{
            label{
                padding-top: 6px;
            }
        }
        .buttongroup{
            margin: 20px 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            button{
                margin-left: 20px;
            }
        }
    }
}
</style>