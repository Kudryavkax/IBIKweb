<template>
    <div class="InputData-body">
        <label>NPM :</label>
        <b-form-input id="inputnpm" v-model="npm"></b-form-input>
        <b-btn variant="outline-secondary" id="btnn" class="btnnext my-1" @click="check">Next</b-btn>
        <div id="nextsect" class="nextsect">
            <label>Nama :</label>
            <b-form-input v-model="nama"></b-form-input>
            <label>IPK/GPA :</label>
            <b-form-input v-model="ipk"></b-form-input>
            <label>Semester :</label>
            <b-form-input v-model="semester"></b-form-input>
            <label>No.HP :</label>
            <b-form-input v-model="no"></b-form-input>
            <label>Email :</label>
            <b-form-input v-model="email"></b-form-input>
            <label>Skripsi Semester :</label>
            <b-form-radio-group
                v-model="periode"
                :options="periodeoptions"
                class="radio-inline"
            ></b-form-radio-group>
            <b-btn variant="outline-secondary" id="btns" class="btnsave my-1">Simpan</b-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputData",
    components: {
        
    },
    data(){
        return{
            npm:null,
            nama:null,
            ipk:null,
            semester:null,
            no:null,
            email:null,
            periode:null,
            periodeoptions:[
                "Ganjil 2020/2021",
                "Genap 2020/2021"
            ]
        }
    },
    methods: {
        check(){
            document.getElementById("btnn").style.display="none";
            document.getElementById("nextsect").style.display="block";
            document.getElementById("inputnpm").disabled="true";
        }
    }
}
</script>

<style lang="scss">
.InputData-body{
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
        .radio-inline{
            label{
                padding-top: 0;
            }
        }
        .btnsave{
            margin: 20px 0;
        }
    }
}
</style>