<template>
<b-card :img-src="service.photo" :img-alt="service.name" img-top img-fluid no-body tag="div" class="service-card">
    <b-card-body>
        <h4 class="card-title">{{ service.name }}</h4>
        <h6 class="card-subtitle mb-3 text-muted">{{ serviceTime }}</h6>
        <p class="card-text">
            {{ service.description }}
        </p>
    </b-card-body>
</b-card>
</template>

<script>
import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

export default {
    name: 'StaffBioCard',

    props: [
        "service"
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
        serviceTime () {
            if (this.service.timeRegular) {
                return this.service.timeRegular;
            } else if (this.service.timeOfferings) {
                return "Offerings vary by semester";
            } else {
                return "";
            }
        }
    }
}
</script>

<style>
.service-card {
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

.service-card .card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

@media (min-width: 768px) {
    .service-card {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
    }
}

.service-card:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}

.service-card .card-title {
    font-weight: 400;
}

.service-card .card-subtitle {
    font-size: 15px;
}



.service-card .card-footer {
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
    color: #FFD960;
    transition: all 0.5s;
}

.card-collapse-toggle:hover {
    background-color: rgba(223, 226, 232, 0.5);
}
</style>
