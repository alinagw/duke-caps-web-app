<template>
<b-card :title="employeeTitle" :sub-title="employee.jobTitle" :img-src="employee.photo" :img-alt="employee.name" img-top img-fluid no-body tag="div" class="staff-bio-card">
    <b-card-body>
        <h4 class="card-title">{{ employeeTitle }}</h4>
        <h6 class="card-subtitle mb-3 text-muted">{{ employee.jobTitle }}</h6>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-collapse v-model="showCollapse" :id="'employee-' + employee.id + '-collapse'">
            <p class="card-text">yeet</p>
        </b-collapse>
    </b-card-body>
    <b-card-footer class="text-center">
        <b-btn class="card-collapse-toggle" @click="showCollapse = !showCollapse" :class="showCollapse ? 'collapsed' : null" :aria-controls="'employee-' + employee.id + '-collapse'" :aria-expanded="showCollapse ? 'true' : 'false'">
            <span v-show="!showCollapse"><chevron-down></chevron-down></span>
            <span v-show="showCollapse"><chevron-up></chevron-up></span>
        </b-btn>
    </b-card-footer>
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
    -webkit-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 10px 0px rgba(69, 91, 99, 0.45);
    margin-bottom: 30px !important;
    min-width: calc(100% - 30px);
    max-width: calc(100% - 30px);
    transition: all 0.3s;
    font-family: "Montserrat", "sans-serif";
}

.staff-bio-card .card-img-top {
    height: 400px;
    object-fit: cover;
    object-position: top;
}

@media (min-width: 576px) {
    .staff-bio-card {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
    }

    .staff-bio-card .card-img-top {
        height: 350px;
    }
    
}

@media (min-width: 992px) {
    .staff-bio-card {
        min-width: calc(33% - 30px);
        max-width: calc(33% - 30px);
    }

    .staff-bio-card .card-img-top {
        height: 300px;
    }
}

.staff-bio-card:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}

.staff-bio-card .card-title {
    font-weight: 400;
}

.staff-bio-card .card-subtitle {
    font-size: 15px;
}



.staff-bio-card .card-footer {
    background-color: transparent;
    border: none;
}

.card-collapse-toggle {
    background-color: transparent;
    border: none;
    color: #78849E;
    border-radius: 50%;
    padding: 0;
    width: 36px;
    height: 36px;
    font-size: 28px;
    line-height: 28px;

}

.card-collapse-toggle:hover,
.card-collapse-toggle:focus {
    background-color: transparent;
    box-shadow: none;
    color: #78849E;
    transition: all 0.5s;
}

.card-collapse-toggle:hover {
    background-color: rgba(223, 226, 232, 0.5);
}
</style>
