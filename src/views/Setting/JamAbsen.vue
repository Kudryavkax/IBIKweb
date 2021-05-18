<template>
    <div class="JamAbsenbody">
        <label>Rentang Jam :</label>
        <div class="timeinput">
            <b-form-timepicker class="timepick" v-model="start" :hour12="false" placeholder="Choose a time" locale="en"></b-form-timepicker>
            <h2>~</h2>
            <b-form-timepicker class="timepick" v-model="end" :hour12="false" placeholder="Choose a time" locale="en"></b-form-timepicker>
        </div>
        <label>Nama KaTU :</label>
        <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Ganti Jam Absen</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "GantiJamAbsen",
    components: {
        
    },
    data(){
        return{
            start:null,
            end:null,
            nama:"Susanti"
        }
    }
}
</script>

<style lang="scss">
.JamAbsenbody{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .timeinput{
        display: flex;
        flex-direction: row;
        width: 100%;
        .timepick{
            label{
                padding-top: 10px;
            }
        }
    }
    .buttongroup{
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button{
            margin:0 40px;
        }
    }
}
</style>