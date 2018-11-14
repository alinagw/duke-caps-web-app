<template>
    <div class="start-home">
        <h1>Getting Started With CAPS</h1>
        <iframe class="embedded-video" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"
                align="middle"
                src="https://www.youtube.com/embed/9qkPR26yigA?autoplay=0&start=0&rel=0">
        </iframe>
        <h4>Looking to Initiate services with CAPS?</h4>
        <p>
            If you would like to begin services at CAPS, please drop in between the hours of 9:00 am to 4:00 pm, Monday
            - Friday and ask to speak with a counselor. No appointment needed!
        </p>
        <p>
            You will meet with a counselor on a first-come, first-served basis. The earlier in the day you come in the
            better. Please plan for an hour visit.
        </p>
        <p>
            <a @click="showCollapse = !showCollapse" :class="showCollapse ? 'collapsed' : null"
               :aria-controls="collapsible-duke-marine-lab" :aria-expanded="showCollapse ? 'true' : 'false'">
                Duke Marine Lab Students
                <span v-show="!showCollapse"><chevron-down class="collapse-toggle-icon ml-2"></chevron-down></span>
                <span v-show="showCollapse"><chevron-up class="collapse-toggle-icon ml-2"></chevron-up></span>
            </a>
        </p>
        <b-collapse id="collapsible-duke-marine-lab" v-model="showCollapse">
            <p> We recognize that students studying at the Duke Marine Lab may have a difficult time driving to Durham
                to access CAPS services. To assist students seeking counseling services, we have identified therapists
                in
                Beaufort and the surrounding communities who are available to meet with Duke students for brief
                counseling services. These services are available through the student health fee you pay when you
                register for
                classes and will support up to six counseling appointments with one of the therapists CAPS has
                identified. Should you decide to continue counseling after these six sessions, you will be responsible
                for subsequent fees.
                Many students utilize their health insurance to cover these charges and you may wish to discuss this
                with the counselor at the time of your initial appointment.
            </p>
            <p>Please contact Lia Gilmore, LCSW, Referral Coordinator for CAPS at 919-660-1012 to access these resources
                and
                to make her aware of which provider you will be seeing so arrangements for billing can be made.
            </p>
            <p>Should you prefer to seek this information from an administrator at the Marine Lab, you may contact Katie
                Wood, Program Coordinator for Duke Marine Lab at 252-504-7508.
            </p>
        </b-collapse>
    </div>
</template>

<script>
    import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
    import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

    export default {
        name: 'StartHome',
        components: {
            ChevronDown,
            ChevronUp
        },
        data() {
            return {
                showCollapse: false
            }
        }
    }
</script>

<style scoped>
    .start-home a:hover {
        text-decoration-line: underline;
        color: #007bff;
        cursor: pointer;
    }

    .start-home a {
        color: #007bff;
    }

    .embedded-video {
        width: 100%;
        transition: 0.3s;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 576px) {
        .embedded-video {
            width: 75%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (min-width: 992px) {
        .embedded-video {
            width: 100%;
        }
    }
</style>
