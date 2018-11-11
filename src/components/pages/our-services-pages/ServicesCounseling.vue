<template>
<div>
    <h1>Individual Counseling</h1>
    <p>
        Individual counseling can help the individual student explore, understand, and work through difficulties on a one-to-one basis with a CAPS counselor. Seeking support is a sign of a resourceful student, one able to know when it's time to take action in order to move through the challenges of life here at Duke. Often, simply having an objective person with whom to discuss things brings about a fresh perspective and a renewed sense of strength and confidence. Other times, the process helps students recognize different options.
    </p>
    <div class="divider"></div>
    <h1>Couples Counseling</h1>
    <p>
        CAPS offers couples counseling to Duke students and their partners struggling with frequent conflicts, problems in communication, loss of intimacy, or difficulty managing a shared crisis. The main goal is to help couples gain clarity on the direction of the relationship moving forward. In some cases, couples decide to continue the relationship and enjoy growth and greater closeness as a result of the counseling experience. In other cases, counseling helps couples reach decisions to end their relationship but do in a way that still promotes growth, respect, and appreciation for each other.
    </p>
    <p>
        CAPS offers couples counseling to all students, regardless of marital status or sexual orientation. At least one member of the couple seeking couples counseling must be a Duke student.
    </p>
    <div class="divider"></div>
    <h1>Group Counseling</h1>
    <p>
      Our Group Services include group therapy, discussion groups and workshops with a variety of goals that aim to promote wellbeing. Research demonstrates that group therapy is equally effective as individual therapy and is often the treatment of choice for student issues.
    </p>
    <b-card-group deck>
        <service-card v-for="(group, index) in groups" :key="index" :service="group"></service-card>
    </b-card-group>
</div>
</template>

<script>
import ServiceCard from "./../../content/ServiceCard"
import servicesJSON from "./../../../assets/data/services.json"

export default {
    name: 'ServicesCounseling',
    components: {
      ServiceCard
    },
    data() {
        return {
          groups: servicesJSON.groupCounseling
        }
    }
}
</script>

<style scoped>
.section-content .content-img {
    width: 100%;
    margin: 0 0 32px 0;
    transition: 0.3s;
}

@media (min-width: 576px) {
    .section-content .content-img {
        width: 50%;
        margin: 0 0 32px 32px;
    }
}

@media (min-width: 992px) {
    .section-content .content-img {
        width: 30%;
    }
}
</style>
