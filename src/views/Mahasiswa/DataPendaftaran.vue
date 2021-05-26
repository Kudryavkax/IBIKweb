<template>
    <div class="InputDataPendaftaran-body">
        <div class="title">
            <h2>Daftar Lowongan</h2>
            <hr size="6" width="100px" align="center" color="Black">
        </div>
        <div class="inputform">
            <label>Lowongan yang diinginkan :</label>
            <v-select class="dropdown" v-model="lowongan" :options="options" @input="check"></v-select>
            <div id="nextsect" class="nextsect">
                <label>Surat Lamaran :</label>
                <b-form-file
                class="fileform"
                v-model="lamaran"
                :state="Boolean(file1)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ></b-form-file>
                <b-btn variant="outline-secondary" id="btns" class="btnsend my-1">Daftar</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputDataPendaftaran",
    components: {
        
    },
    data(){
        return{
            lowongan:null,
            options:[
                "Lowongan 1",
                "Lowongan 2",
                "Lowongan 3"
            ],
            lamaran:null,

        }
    },
    methods: {
        check(){
            if(this.lowongan!=null)
                document.getElementById("nextsect").style.display="block";
            else
                document.getElementById("nextsect").style.display="none";
        }
    }
}
</script>

<style lang="scss">
.InputDataPendaftaran-body{
    display: flex;
    flex-direction: column;
    margin: 10vh 0 0 0;
    padding-bottom: 50px;
    .title{
        position: fixed;
        top: 120px;
        z-index: 98;
        width: 100%;
        Padding: 20px 20px 1px 20px;
        text-align: center;
        background-color: #f9dacd;
    }
    .inputform{
        padding: 0 5vw;
        margin: 168px 100px 0 100px;
        label{
            align-self: flex-start;
            padding-top: 20px;
        }
        .btnnext{
            align-self: flex-end;
        }
        .nextsect{
            display: flex;
            flex-direction: column;
            width: 100%;
            display: none;
            .fileform{
                label{
                    padding-top: 6px;
                }
            }
            .btnsend{
                margin: 20px 0;
            }
        }
    }
}
</style>