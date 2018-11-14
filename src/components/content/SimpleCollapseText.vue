<div>
    <a v-b-toggle="id" class="card-subtitle mb-3 mt-4">{{ title }}
        <span v-show="!showCollapse"><chevron-down class="collapse-toggle-icon ml-2"></chevron-down></span>
        <span v-show="showCollapse"><chevron-up class="collapse-toggle-icon ml-2"></chevron-up></span>
    </a>
    <b-collapse v-model= "showCollapse" :id="id" class="mt-2">
        <b-card>
            {{ content }}
        </b-card>
    </b-collapse>
</div>

<script>
    import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
    import ChevronUp from "vue-material-design-icons/ChevronUp.vue"

    export default {
        name: 'SimpleCollapseText',

        props: [
            "title",
            "content"
        ],

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