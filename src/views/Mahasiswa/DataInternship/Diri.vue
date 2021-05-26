<template>
    <div class="DataDiribody">
        <label>Username :</label>
        <b-form-input v-model="npm" disabled></b-form-input>
        <label>Nama Mahasiswa :</label>
        <b-form-input v-model="nama"></b-form-input>
        <label>IPK / GPA :</label>
        <b-form-input v-model="ipk"></b-form-input>
        <label>Semester :</label>
        <b-form-input v-model="semester"></b-form-input>
        <label>No. HP :</label>
        <b-form-input v-model="no"></b-form-input>
        <label>Email :</label>
        <b-form-input v-model="email"></b-form-input>
        <label>Skripsi di Semester :</label>
        <b-form-radio-group
                v-model="skripsi"
                :options="periodeoptions"
                class="radio-inline"
            ></b-form-radio-group>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Simpan</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputDataDiri",
    components: {
        
    },
    data(){
        return{
            npm:"535180039",
            nama:"Mitchell Ryu Sopany",
            ipk:3.87,
            semester:6,
            no:"081519053668",
            email:"mitchell.535180039@stu.untar.ac.id",
            skripsi:"Ganjil 2020/2021",
            periodeoptions:[
                "Ganjil 2020/2021",
                "Genap 2020/2021"
            ]
        }
    }
}
</script>

<style lang="scss">
.DataDiribody{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .radio-inline{
        align-self: flex-start;
        label{
            padding-top: 0;
        }
    }
    .buttongroup{
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        button{
            margin-left: 40px;
        }
    }
}
</style>