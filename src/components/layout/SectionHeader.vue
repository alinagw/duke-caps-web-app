<template>
<div>
    <b-jumbotron fluid>

    </b-jumbotron>
</div>
</template>

<script>
import SectionTabs from "./../layout/SectionTabs"

export default {
    name: 'SectionHeader',
    props: [
      "section"
    ],
    components: {
        SectionTabs
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>
