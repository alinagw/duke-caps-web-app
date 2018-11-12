<template>
<div>
    <h1>Consultation</h1>
    <p>
        If you are concerned about a student and wish to speak with a mental health professional about your concerns, we have a consultant available to speak with you by phone or in person.
    </p>
    <p class="mb-1"><strong>
      Some common reasons for using our Consultation Services include:
    </strong></p>
    <ul>
        <li>
          concern that a student is showing signs of impairment in daily functioning
          </li>
        <li>
            questions about a student’s development (academically or socially)
        </li>
        <li>
            alarm that a student is showing indications of self-destructive or unusual behaviors
        </li>
        <li>
            concern about a student whose family is experiencing a crisis
        </li>
        <li>
            need for information about referrals for more specialized services in the community
        </li>
    </ul>

</div>
</template>

<script>
export default {
    name: 'ServicesConsultation',
    components: {

    },
    data() {
        return {

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
