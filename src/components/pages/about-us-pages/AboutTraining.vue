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
        <b-btn href="https://studentaffairs.duke.edu/caps/programs/apa-accredited-psychology-internship" target="_blank">APA Accredited Psychology Internship</b-btn>
        <b-btn href="https://studentaffairs.duke.edu/caps/training-programs/psychiatry-residency" target="_blank">Psychiatry Residency</b-btn>
        <b-btn href="https://studentaffairs.duke.edu/caps/training-programs/social-work-internship" target="_blank">Social Work Internship</b-btn>
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
    background-color: #38C6D4;
    color: white;
    font-family: "Montserrat", "sans-serif";
    font-size: 14px;
    letter-spacing: 1px;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
}

.btn:hover,
.btn:focus {
    -webkit-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    background-color: #1f7998 !important;
}

.btn:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}
</style>
