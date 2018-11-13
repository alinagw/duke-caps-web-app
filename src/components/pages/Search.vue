<template>
<b-container fluid class="py-5 article">
  <b-jumbotron fluid header-level="4">
        <div class="jumbotron-img">
            <!--<img :src="article.image">-->
        </div>
    </b-jumbotron>
    <b-container fluid>
        <b-card class="content-card" no-body>
            <b-container fluid class="article-content">
              
            </b-container>
        </b-card>
    </b-container>
    <!--<b-card no-body class="search-question-card">
        <b-card-body>
            <h1 class="card-title">{{ currQuestionObj.question }}</h1>
            <h4 class="card-subtitle">{{ currQuestionObj.instructions }}</h4>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item v-for="(option, i) in currQuestionObj.options" :key="i" action @click="toggleSelectOption(i)" :active="isSelected(i)">
                {{ option.title }}
            </b-list-group-item>
        </b-list-group>
        <b-card-footer class="text-right">
            <b-btn class="search-question-next-button" @click="nextQuestion">
                Next
                <arrow-right class="search-question-next-arrow"></arrow-right>
            </b-btn>
        </b-card-footer>
    </b-card>-->
</b-container>
</template>

<script>
import searchJSON from "./../../assets/data/search.json"
import ArrowRight from "vue-material-design-icons/ArrowRight.vue"
export default {
    name: 'Search',
    components: {
        ArrowRight
    },
    data() {
        return {
            items: searchJSON,
            query: "",
            filters: [],
            results: [],
            currQuestion: 0,
            currQuestionSelection: [],
            questions: [{
                    question: "Is this an emergency?",
                    instructions: "",
                    selectMultiple: false,
                    required: true,
                    options: [{
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
                    required: true,
                    options: [{
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
                    required: true,
                    options: [{
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
                    required: true,
                    options: [{
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
                    required: false,
                    options: [{
                            title: "overwhelmed with academic stress",
                            tags: ["academic", "stress"],
                            end: true
                        },
                        {
                            title: "concerned about graduation",
                            tags: ["graduation"],
                            end: false
                        },
                        {
                            title: "struggling as a first-year",
                            tags: ["first-year"],
                            end: false
                        },
                        {
                            title: "can't keep up with school work",
                            tags: ["time management", "procrastination", "academic"],
                            end: false
                        },
                        {
                            title: "thinking of taking a medical leave of absence from Duke",
                            tags: ["leave", "absence"],
                            end: false
                        }
                    ]
                },
                {
                    question: "Are you experiencing any difficulties with daily life?",
                    instructions: "Select all that apply.",
                    selectMultiple: true,
                    required: false,
                    options: [{
                            title: "grief, loss, death of a loved one",
                            tags: ["grief", "loss", "death"],
                            end: false
                        },
                        {
                            title: "struggling with identity",
                            tags: ["emergency"],
                            end: false
                        },
                        {
                            title: "relationship problems",
                            tags: ["relationship", "couple", "boyfriend", "girlfriend", "significant other", "partner", "conflict"],
                            end: false
                        },
                        {
                            title: "difficulty sleeping",
                            tags: ["sleep", "sleeping"],
                            end: false
                        },
                        {
                            title: "difficulty eating",
                            tags: ["eat", "eating", "food"],
                            end: false
                        },
                        {
                            title: "sexual assault on campus",
                            tags: ["sexual assault"],
                            end: false
                        },
                    ]
                },
                {
                    question: "Are you struggling with any of the following mental health problems?",
                    instructions: "",
                    selectMultiple: true,
                    required: false,
                    options: [{
                            title: "Depression",
                            tags: ["depression"],
                            end: false
                        },
                        {
                            title: "Anxiety & Panic",
                            tags: ["anxiety", "panic"],
                            end: false
                        },
                        {
                            title: "ADD & ADHD",
                            tags: ["ADD-ADHD"],
                            end: false
                        },
                        {
                            title: "Eating disorders",
                            tags: ["eating", "eat", "food", "body"],
                            end: false
                        },
                        {
                            title: "Substance abuse",
                            tags: ["alcohol", "substance", "drug"],
                            end: false
                        },
                        {
                            title: "General emotion regulation",
                            tags: ["emotion"],
                            end: false
                        },
                        {
                            title: "Medication effects",
                            tags: ["medication", "side-effect", "drug", "pharma"],
                            end: false
                        },
                    ]
                },
                {
                    question: "What kind of resources might be helpful to you?",
                    instructions: "",
                    selectMultiple: true,
                    required: true,
                    options: [{
                            title: "open to anything!",
                            tags: ["emergency"],
                            end: false
                        },
                        {
                            title: "talking to someone individually or as a couple",
                            tags: ["individual", "couple"],
                            end: false
                        },
                        {
                            title: "participating in groups with other students",
                            tags: ["group", "workshop"],
                            end: false
                        },
                        {
                            title: "getting psychiatric help and/or medication help",
                            tags: ["psychiatry", "medication", "medical"],
                            end: false
                        },
                        {
                            title: "practicing mindfulness, meditation, and relaxation",
                            tags: ["mindfulness", "meditation", "relaxation", "wellness"],
                            end: false
                        },
                        {
                            title: "learning about health, wellness, and coping skills",
                            tags: ["health", "wellness", "skills", "cope"],
                            end: false
                        },
                        {
                            title: "something fun and active like exercise or music",
                            tags: ["fun", "exercise", "music", "outdoor", "outside", "retreat"],
                            end: false
                        },
                        {
                            title: "reading online resources",
                            tags: ["article"],
                            end: false
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
    computed: {
        currQuestionObj() {
            return this.questions[this.currQuestion];
        }
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
        },

        toggleSelectOption(index) {
            if (this.isSelected(index)) {
                // remove from selected
                this.currQuestionSelection.splice(this.currQuestionSelection.indexOf(index), 1);
            } else {
                if (!this.currQuestionObj.selectMultiple) {
                    this.currQuestionSelection = [];
                }
                this.currQuestionSelection.push(index);
            }
        },

        isSelected(index) {
            if (this.currQuestionSelection.includes(index)) {
                return true;
            }
            return false;
        },

        nextQuestion() {
            if (this.currQuestion < this.questions.length - 1) {
                if (this.currQuestionSelection.length > 0) {
                    for (var i = 0; i < this.currQuestionSelection.length; i++) {
                        var currOption = this.questions[this.currQuestion].options[this.currQuestionSelection[i]];
                        if (!currOption.end) {
                            this.addTagsToSearch(currOption.tags);
                        } else {
                            // return the ending
                            return;
                        }
                    }
                } else {
                    if (this.currQuestionObj.required) {
                      // required
                      return;
                    }
                }

                this.currQuestion++;
                this.currQuestionSelection = [];

            } else {
                // return end of questions
                return;
            }
        },

        addTagsToSearch(tags) {
            if (tags.length > 0) {
                for (var i = 0; i < tags.length; i++) {
                    this.query += tags[i] + " ";
                }
            }
            console.log(this.query);
        }
    }
}
</script>

<style scoped>
.article {
    margin-bottom: 64px;
}

.article-content {
    padding: 48px 8% 48px 8%;
    color: #454F63;
}

.content-card {
    max-width: 95%;
    margin: auto;
    border: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    -moz-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    z-index: 2;
}

@media (min-width: 1200px) {

    .article-content,
    .content-card {
        width: 1200px;
        max-width: 1200px;
    }
}

.article .jumbotron {
    position: relative;
    text-align: center;
    background-color: transparent;
    padding-top: 104px;
    padding-bottom: 184px;
    margin-bottom: -96px;
    z-index: 1;
}

.article .jumbotron h1 {
    color: white;
    font-family: "Scope One", "serif";
    font-weight: bolder;
    font-size: 64px;
    letter-spacing: 4px;
    margin-bottom: 0;
}

.article .jumbotron-img {
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    overflow: hidden;
    z-index: -1;
}

.article .jumbotron img {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    object-fit: cover;
    object-position: top;
    filter: blur(3px) brightness(65%);
}

.article-back-button {
    position: absolute;
    top: 24px;
    left: 24px;
    text-transform: uppercase;
    font-family: "Montserrat", "sans-serif";
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    transition: 0.3s;
}

.article-back-arrow {
    font-size: 22px;
    margin-right: 8px;
}

.article-back-button:hover {
    text-decoration: none;
}

.article-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
    color: #1D222D;
}

.article-content h4 {
    font-family: "Montserrat", "sans-serif";
    color: #7A859C;
    margin-top: 28px;
}

.article-content p,
.article-content ul,
.article-content ol {
    font-family: "Montserrat", "sans-serif";
    font-weight: 300;
    font-size: 15px;
}

.divider {
    height: 1.5px;
    border-radius: 50%;
    width: 90%;
    margin: auto;
    background-color: #F4F4F6;
}

.article-content .divider {
    width: 100%;
    margin: 32px 0;
}

.search-question-card {
    font-family: "Montserrat", "sans-serif";
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.45);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.45);
    transition: 0.3s ease;
    padding-top: 24px;
    width: 400px;
    margin: auto;
    margin-bottom: 30px;
}

.search-question-card .card-title {
    color: #2DC6D6;
    font-size: 24px;
}

.search-question-card .card-subtitle {
    color: #7A859C;
    font-size: 14px;
}

.search-question-card .card-footer {
    background-color: transparent;
    border: none;
}

.search-question-next-button,
.search-question-next-button:focus {
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

.search-question-next-button .search-question-next-arrow {
    font-size: 20px;
    height: 12px;
}

.search-question-next-button .search-question-next-arrow svg {
    bottom: -0.38rem;
}

.search-question-next-button:hover {
    background-color: #1f7998;
    box-shadow: none;
}

.search-question-next-button.disabled,
.search-question-next-button:disabled {
    background-color: #E2E4EB;
    color: #79859D;
}

/*
.inner-container {
  position: relative;
  max-width: 20%;
  min-width: 360px;
  height: 300px;
  width: 100%;
  margin: 0 auto 100px;
}

.question-card-content {
  position: absolute;
  opacity: 0;
  top: 2em;
  left: 10%;
  width: 80%;
  margin: 0 auto;
}

.question-card-active {
  display: block !important;
  margin: 0 auto;
  opacity: 1;
  transition: ease-in-out 1s;
}

.question-card {
  position: relative;
  background: #fff;
  border-radius: 5px;
  padding: 2em 0;
  height: 300px;
  box-sizing: border-box;
  transition: .3s ease;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.35);
}
.question-card:first-child, .card:nth-child(2) {
  background: #00c4c7;
  height: 8px;
  border-radius: 5px 5px 0 0;
  padding: 0;
  box-shadow: none;
}
.question-card:first-child {
  margin: 0 20px;
  background: #00b0b2;
}
.question-card:nth-child(2) {
  margin: 0 10px;
}
*/
</style>
