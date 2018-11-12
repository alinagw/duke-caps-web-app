<template>
<b-card overlay :img-src="employee.photo" :img-alt="employee.name" img-fluid tag="div" no-body class="staff-bio-card">
    <div class="card-img-overlay d-flex flex-column justify-content-end">
        <h4 class="card-title">{{ employeeTitle }}</h4>
        <h6 class="card-subtitle">{{ employee.jobTitle }}</h6>
    </div>
</b-card>
</template>

<script>
import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

export default {
    name: 'StaffBioCard',

    props: [
        "employee"
    ],

    components: {
        ChevronDown,
        ChevronUp
    },

    data() {
        return {
            showCollapse: false

        }
    },

    computed: {
        employeeTitle() {
            var title = this.employee.name;
            if (this.employee.hasOwnProperty("degree")) {
                title += ", " + this.employee.degree;
            }
            return title;
        }
    }
}
</script>

<style>
.staff-bio-card {
    border: none;
    border-radius: 8px;
    margin-bottom: 30px !important;
    max-width: 100%;
    height: 400px;
    transition: 0.3s;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    transition: box-shadow 0.5s;
    font-family: "Montserrat", "sans-serif";
}

.staff-bio-card .card-img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.staff-bio-card .card-img-overlay {
    border-radius: 8px;
    background: rgb(17, 21, 27);
    background: linear-gradient(to top, rgba(17, 21, 27, 0.9) 3%, rgba(17, 21, 27,0) 40%);
}

@media (min-width: 576px) {
    .staff-bio-card {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
        height: 300px;
    } 
}

@media (min-width: 768px) { 
    .staff-bio-card {
        height: 400px;
    } 
}

@media (min-width: 992px) {
    .staff-bio-card {
        min-width: calc(33% - 30px);
        max-width: calc(33% - 30px);
    }
}

.staff-bio-card:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}

.staff-bio-card .card-title {
    font-size: 20px;
    color: white;
}

.staff-bio-card .card-subtitle {
    font-size: 13px;
    color: rgba(247, 247, 250, 0.7);
}
</style>
