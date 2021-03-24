<template>
    <div class="footer-body">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5830.016559191135!2d106.78768167065171!3d-6.169010485962944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8ffa044f%3A0x6f715cfa0b44194!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sfr!4v1616572365371!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
    justify-content: space-between;
    padding-left: 5px;
    color: black;
    width: 100vw;
    z-index: 99;
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: "Bree Serif";
    font-size: 1.2rem;
    iframe{
        height: 30vh;
        width: 50vh;
    }
}
</style>