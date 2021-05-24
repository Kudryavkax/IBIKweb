<template>
    <div class="footer-body">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5830.016559191135!2d106.78768167065171!3d-6.169010485962944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8ffa044f%3A0x6f715cfa0b44194!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sfr!4v1616572365371!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <div class="foot-content mx-5">
        <div class="title">
            <img src="@/assets/ibikfti.png">
            <div class="word">
                <h1>Inkubator Bisnis dan Kerjasama</h1>
                <h2>Fakultas Teknologi Informasi Universitas Tarumanagara</h2>
            </div>
        </div>
        <p>
        Jl. Let. jend. S. Parman No.1, Blok R Lantai 11, Jakarta 11440<br>
        Telp :021-.5676260 - 5677949, Fax : 56941924
        </p>
        <div class="contact">
            <div class="email">
                <b-icon class="m-2" icon="Envelope"></b-icon>
                <p>Viny Christanti M., M. Kom<br>
                Bisnis :<br>corporate@fti.untar.ac.id<br>
                Mahasiswa :<br>intern@fti.untar.ac.id</p>
            </div>
            <div class="insta">
                <b-icon class="m-2" icon="instagram"></b-icon>
                <p class="word">@IBIKFTI</p>
            </div>
            <div class="contactus">
                <b-button pill variant="outline-secondary" id="contactus-btn" @click="$bvModal.show('contactus-modal')">Contact Us</b-button>
                <b-modal id="contactus-modal" hide-footer>
                    <template #modal-title>
                        Contact us
                    </template>
                    <b-container fluid>
                        <b-row class="mt-3">
                            <b-col sm="3">
                            <label for="input-nama">Nama:</label>
                            </b-col>
                            <b-col>
                            <b-form-input id="input-nama"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mt-3">
                            <b-col sm="3">
                            <label for="input-email">Email:</label>
                            </b-col>
                            <b-col>
                            <b-form-input id="input-email" type="email"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mt-3">
                            <b-col sm="3">
                            <label for="input-perihal">Perihal:</label>
                            </b-col>
                            <b-col>
                            <b-form-textarea v-model="value" debounce="500" rows="7" max-rows="10"></b-form-textarea>
                            </b-col>
                        </b-row>
                    </b-container>
                    <b-button class="mt-3" block @click="$bvModal.hide('contactus-modal')">Send</b-button>
                </b-modal>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    components: {}
}
</script>

<style lang="scss">
.footer-body{
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 99;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: #efe4f5;
    iframe{
        height: auto;
        width: 400px;
    }
    .foot-content{
        padding: 2vh 0 0 0;
        .title{
            display: flex;
            flex-direction: row;
            img{
                margin-top: 5px;
                height: 7vh;
            }
            .word{
                h1{
                    font-size: 3.5vh;
                }
                h2{
                    font-size: 2.2vh;
                }
            }
        }
        p{
            font-size: 1.7vh;
        }
        .contact{
            display: flex;
            justify-content: space-between;
            .email{
                display: flex;
                flex-direction: row;
            }
            .insta{
                display: flex;
                flex-direction: row;
                .word{
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>