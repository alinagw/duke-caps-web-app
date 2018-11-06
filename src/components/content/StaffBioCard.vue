<template>
<b-card :title="employee.name" :sub-title="employee.jobTitle" :img-src="employee.photo" :img-alt="employee.name" img-top tag="article" no-body class="staff-bio-card mb-2">
    <b-card-body>
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
        //"employee"
    ],

    components: {
      ChevronDown,
      ChevronUp
    },

    data() {
        return {
            showCollapse: false,
            employee: {
              id: "1",
              name: "Full Name",
              jobTitle: "Job Title at CAPS",
              photo: "https://picsum.photos/600/300/?image=25"
            }

        }
    }
}
</script>

<style>
.staff-bio-card {
  border: none;
  border-radius: 8px;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
-moz-box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
box-shadow: 0px 2px 10px 0px rgba(69,91,99,0.45);
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

.card-collapse-toggle:hover, .card-collapse-toggle:focus {
  background-color: transparent;
  box-shadow: none;
  color: #78849E;
  transition: all 0.5s;
}

.card-collapse-toggle:hover {
  background-color: rgba(223,226,232, 0.5);
}

</style>
