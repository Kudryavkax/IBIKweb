<template>
    <div class="DataInternshipbody">
        <h4>Identitas Diri</h4>
        <div class="datadiri">
            <div class="leftident">
                <p>NPM </p>
                <p>Nama Mahasiswa </p>
                <p>IPK / GPA </p>
                <p>Semester </p>
                <p>No. HP </p>
                <p>Email </p>
                <p>Skripsi di Semester </p>
            </div>
            <div class="rightdesc">
                <p>: {{npm}}</p>
                <p>: {{nama}}</p>
                <p>: {{ipk}}</p>
                <p>: {{semester}}</p>
                <p>: {{no}}</p>
                <p>: {{email}}</p>
                <p>: {{skripsi}}</p>
            </div>
        </div>
        <h4>Status Lowongan</h4>
        <div class="lowongantaken">
            <b-table hover 
                head-variant="light"
                :fields="fields"
                :items="items">
                <template #cell(No)="row" >
                    {{row.index+1}}
                </template>
                <template #cell(Lowongan)="row">
                    {{row.item.judul}} di {{row.item.perusahaan}}
                </template>
                <template #cell(Status)="row">
                    <p v-if="row.item.status == 'Belum'">
                        Belum di Review
                    </p>
                    <p v-else>
                        {{row.item.status}}
                    </p>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataInternship",
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
            fields:[
                'No',
                'Lowongan',
                'Status'
            ],
            items:[
                {Key:1,
                judul:"Orang Tua Group",
                perusahaan:"PT Pepper Tree Investama",
                status:"Belum"}
            ]
        }
    },
    created(){
        this.$router.push('#')
    }
}
</script>

<style lang="scss">
.DataInternshipbody{
    h4{
        margin: 20px 0;
    }
    .datadiri{
        display: flex;
        flex-direction: row;
        .leftident{
            flex-direction: column;
        }
        .rightdesc{
            flex-direction: column;
            margin-left: 30px;
        }
    }
    .lowongantaken{
        width: 100%;
    }
}
</style>