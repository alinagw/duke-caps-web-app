<template>
<div>
    <h1>Training Programs</h1>
    <p>
        We offer training experiences for pre-doctoral psychology interns, psychiatry residents, and social work interns.
    </p>
    <p>
        At CAPS we utilize an integrated multidisciplinary model in the delivery of a comprehensive range of psychological services to the university student community. We provide training within a context that values the uniqueness of each human being and remains sensitive to cultural and individual diversity in the immediate and extended community. Our training programs are service oriented and individually tailored to provide a broad range of training opportunities, with particular consideration to the unique goals of each discipline.
    </p>
    <div class="d-flex flex-row flex-wrap justify-content-center">
        <b-button href="#">APA Accredited Psychology Internship</b-button>
        <b-button href="#">Psychiatry Residency</b-button>
        <b-button href="#">Social Work Internship</b-button>
    </div>
</div>
</template>

<script>
export default {
    name: 'AboutTraining',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.btn {
    margin: 24px auto;
    background-color: white;
    color: black;
    font-family: "Montserrat", "sans-serif";
    font-size: 14px;
    letter-spacing: 1px;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
}

.btn:hover,
.btn:focus {
    -webkit-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    background-color: white !important;
    color: black !important;
}

.btn:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4) !important;
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4) !important;
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4) !important;
}
</style>
