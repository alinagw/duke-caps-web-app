<template>
<b-card :img-src="service.photo" :img-alt="service.name" img-top img-fluid no-body class="workshop-card">
    <b-card-body>
        <h4 class="card-title">{{ service.name }}</h4>
        <p class="card-text mb-0"  style="font-weight:300;" v-for="(paragraph, index) in service.description" :key="index">
            {{ paragraph }}
        </p>
        <b-collapse v-model="showCollapse" :id="'service-' + service.id + '-collapse'">
            <h6 class="card-subtitle mb-3 mt-4">Offerings</h6>
            <p class="card-text" v-if="!offeringsAvailable" style="font-weight:300;"><strong>
                {{ service.timeOfferings }}
            </strong></p>
            <div v-if="offeringsAvailable">
                <div class="d-flex flex-row justify-content-between pr-4" v-for="(time, index) in service.timeOfferings" :key="index">
                    <p class="card-text" style="font-weight:300;"> {{ time.date }} <strong>|</strong> {{ time.time }}</p>
                    <b-link v-if="checkRSVP(time)" class="card-text" :href="time.rsvp" target="_blank">RSVP</b-link>
                </div>
            </div>
        </b-collapse>
    </b-card-body>
    <b-card-footer class="text-center pb-3">
        <b-btn class="offerings-collapse-toggle" @click="showCollapse = !showCollapse" :class="showCollapse ? 'collapsed' : null" :aria-controls="'service-' + service.id + '-collapse'" :aria-expanded="showCollapse ? 'true' : 'false'" :disabled="!offeringsAvailable">
            <span v-show="!offeringsAvailable">No Offerings Available</span>
            <span v-show="offeringsAvailable">
                <span v-show="!showCollapse">
                    Show Offerings
                    <chevron-down class="collapse-toggle-icon ml-2"></chevron-down>
                </span>
            <span v-show="showCollapse">Hide Offerings <chevron-up class="collapse-toggle-icon ml-2"></chevron-up></span>
            </span>
        </b-btn>
    </b-card-footer>
</b-card>
</template>

<script>
import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

export default {
    name: 'WorkshopCard',

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
        offeringsAvailable() {
            if (typeof this.service.timeOfferings === "string") {
                return false;
            }
            return true;
        }
    },

    methods: {
        checkRSVP (time) {
            if (time.hasOwnProperty("rsvp")) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style>
.workshop-card {
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    margin-bottom: 30px !important;
    transition: all 0.3s;
    transition: box-shadow 0.5s;
    font-family: "Montserrat", "sans-serif";
    min-width: calc(100% - 30px);
    max-width: calc(100% - 30px);
}

@media (min-width: 992px) {
    .workshop-card {
        min-width: calc(50% - 30px);
        max-width: calc(50% - 30px);
    }
}

.workshop-card .card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.workshop-card:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.4);
}

.workshop-card .card-title {
    font-weight: 400;
    font-size: 20px;
    color: #1D222C;
}

.workshop-card .card-subtitle {
    font-size: 17px;
    color: #79859D;
}

.workshop-card .card-text {
    font-size: 14px;
    color: #454F63;
}

.workshop-card .card-footer {
    background-color: transparent;
    border: none;
}

.workshop-card a.card-text {
    color: #2DC6D6;
    font-size: 16px;
    font-weight: 600;
    user-select: none;
    transition: 0.3s;
}

.workshop-card a.card-text:hover {
    color: #1f7998;
    text-decoration: none;
}

.offerings-collapse-toggle, .offerings-collapse-toggle:focus {
    border: none;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: #2DC6D6;
    box-shadow: none;
}

.offerings-collapse-toggle .collapse-toggle-icon {
    font-size: 20px;
    height: 12px;
}

.offerings-collapse-toggle .collapse-toggle-icon svg {
    bottom: -0.38rem;
}

.offerings-collapse-toggle:hover {
    background-color: #1f7998;
    box-shadow: none;
}

.offerings-collapse-toggle.disabled, .offerings-collapse-toggle:disabled {
    background-color: #E2E4EB;
    color: #79859D;
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
