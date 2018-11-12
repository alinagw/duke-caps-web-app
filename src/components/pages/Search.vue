<template>
<b-container fluid>
  <b-card-group deck>
    <b-card no-body>
      <b-card-body>
        <h4>question</h4>
        <h6>subtitle</h6>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item>option 1</b-list-group-item>
        <b-list-group-item>option 2</b-list-group-item>
      </b-list-group>
    </b-card>
  </b-card-group>
  <!--<b-container>
    <b-form-input v-model="query" type="text"></b-form-input>
    <p>{{ query }}</p>
    <b-btn @click="runSearch">run</b-btn>
    <ul>
      <li v-for="(result, index) in results" :key="index">
        {{ result.item.title }}
        <br>
        {{ result.item.tags }}
        <br>
        {{ result.score }}
        </li>
    </ul>
  </b-container>-->
</b-container>
</template>

<script>
import searchJSON from "./../../assets/data/search.json"
export default {
    name: 'Search',
    components: {
    },
    data() {
        return {
            items: searchJSON,
            query: "",
            filters: [],
            results: [],
            questions: [
              {
                question: "Is this an emergency?",
                instructions: "",
                selectMultiple: false,
                options: [
                  {
                    title: "YES",
                    tags: ["emergency"],
                    end: true
                  },
                  {
                    title: "No",
                    tags: [],
                    end: false
                  }
                ]
              },
              {
                question: "How soon do you need help?",
                instructions: "Select only one option.",
                selectMultiple: false,
                options: [
                  {
                    title: "NOW!! This is an emergency!",
                    tags: ["emergency"],
                    end: true
                  },
                  {
                    title: "As soon as possible!",
                    tags: ["available"],
                    end: false
                  },
                  {
                    title: "I can wait",
                    tags: [],
                    end: false
                  }
                ]
              },
              {
                question: "Who needs help?",
                instructions: "",
                selectMultiple: false,
                options: [
                  {
                    title: "Me",
                    tags: [],
                    end: false
                  },
                  {
                    title: "I need to report a concern for another student",
                    tags: ["report"],
                    end: true
                  }
                ]
              },
              {
                question: "I am a...",
                instructions: "Select only one option.",
                selectMultiple: false,
                options: [
                  {
                    title: "Duke student",
                    tags: ["student"],
                    end: false
                  },
                  {
                    title: "parent or family member of a Duke student",
                    tags: ["parent", "family"],
                    end: false
                  },
                  {
                    title: "Duke faculty member",
                    tags: ["faculty"],
                    end: false
                  },
                  {
                    title: "person just interested in browsing!",
                    tags: ["faculty"],
                    end: false
                  },
                ]
              },
              {
                question: "Are you experiencing any academic difficulties?",
                instructions: "Select all that apply.",
                selectMultiple: true,
                options: [
                  {
                    title: "overwhelmed with academic stress",
                    tags: ["academic", "stress"],
                    end: true
                  },
                  {
                    title: "concerned about graduation",
                    tags: ["graduation"]
                  },
                  {
                    title: "struggling as a first-year",
                    tags: ["first-year"]
                  },
                  {
                    title: "can't keep up with school work",
                    tags: ["time management", "procrastination", "academic"]
                  },
                  {
                    title: "thinking of taking a medical leave of absence from Duke",
                    tags: ["leave", "absence"]
                  }
                ]
              },
              {
                question: "I'm searching for resources for...",
                instructions: "Select all that apply.",
                selectMultiple: false,
                options: [
                  {
                    title: "grief, loss, death of a loved one",
                    tags: ["grief", "loss", "death"],
                    end: true
                  },
                  {
                    title: "struggling with identity",
                    tags: ["emergency"],
                    end: true
                  },
                  {
                    title: "relationship problems",
                    tags: ["relationship", "couple", "boyfriend", "girlfriend", "significant other", "partner", "conflict"]
                  },
                  {
                    title: "difficulty sleeping",
                    tags: ["sleep", "sleeping"]
                  },
                  {
                    title: "difficulty eating",
                    tags: ["eat", "eating", "food"]
                  },
                  {
                    title: "sexual assault on campus",
                    tags: ["sexual assault"],
                    end: true
                  },
                ]
              },
              {
                question: "I'm searching for resources for...",
                instructions: "",
                selectMultiple: false,
                options: [
                  {
                    title: "Depression",
                    tags: ["depression"],
                    end: true
                  },
                  {
                    title: "Anxiety & Panic",
                    tags: ["anxiety", "panic"],
                    end: true
                  },
                  {
                    title: "ADD & ADHD",
                    tags: ["ADD-ADHD"]
                  },
                  {
                    title: "Eating disorders",
                    tags: ["eating", "eat", "food", "body"]
                  },
                  {
                    title: "Substance abuse",
                    tags: ["alcohol", "substance", "drug"]
                  },
                  {
                    title: "General emotion regulation",
                    tags: ["emotion"]
                  },
                  {
                    title: "Medication effects",
                    tags: ["medication", "side-effect", "drug", "pharma"],
                    end: true
                  },
                ]
              },
              {
                question: "I'm searching for resources for...",
                instructions: "",
                selectMultiple: false,
                options: [
                  {
                    title: "open to anything!",
                    tags: ["emergency"],
                    end: true
                  },
                  {
                    title: "talking to someone individually or as a couple",
                    tags: ["individual", "couple"],
                    end: true
                  },
                  {
                    title: "participating in groups with other students",
                    tags: ["group", "workshop"],
                    end: true
                  },
                  {
                    title: "getting psychiatric help and/or medication help",
                    tags: ["psychiatry", "medication", "medical"],
                    end: true
                  },
                  {
                    title: "practicing mindfulness, meditation, and relaxation",
                    tags: ["mindfulness", "meditation", "relaxation", "wellness"],
                    end: true
                  },
                  {
                    title: "learning about health, wellness, and coping skills",
                    tags: ["health", "wellness", "skills", "cope"],
                    end: true
                  },
                  {
                    title: "something fun and active like exercise or music",
                    tags: ["fun", "exercise", "music", "outdoor", "outside", "retreat"]
                  },
                  {
                    title: "reading online resources",
                    tags: ["article"]
                  }
                ]
              }
            ]
        }

        /* 
        - is this an emergency?
        - when do you need the help? (it's an emergency, as soon as possible, i can wait)
        - who you are (student, parent, faculty)
        - looking for help for... (yourself, family, friend, couples)
        - what makes you unique? (minority, LGBTQ+, etc.)
        - do you need help academically?
        - are you experiencing any of these difficult life situations?
        - mental health problems?
        - what kind of help would you like?*/
    },
    methods: {
        runSearch() {
            var options = {
                keys: ["title", "tags"],
                defaultAll: false,
                threshold: 0.1,
                tokenize: true,
                findAllMatches: true,
                includeScore: true
            }

            this.$search(this.query, this.items, options).then(result => {
                this.results = result;
            });
        }
    }
}
</script>

<style>

</style>
