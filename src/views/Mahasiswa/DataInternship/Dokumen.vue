<template>
    <div class="Dokumenbody">
        <label>Curriculum Vitae (CV) :</label>
        <b-form-file
        class="fileform"
        v-model="cv"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
        <label>Transkrip Nilai :</label>
        <b-form-file
        class="fileform"
        v-model="Transkrip"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="buttongroup">
            <b-button variant="outline-secondary" >Batal</b-button>
            <b-button variant="outline-secondary" >Simpan</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputDokumen",
    components: {
        
    },
    data(){
        return{
            CV:null,
            Transkrip:null,
        }
    }
}
</script>

<style lang="scss">
.Dokumenbody{
    label{
        align-self: flex-start;
        padding-top: 20px;
    }
    .fileform{
        label{
            padding-top: 6px;
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