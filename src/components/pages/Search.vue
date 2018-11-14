<template>
<div class="search">
    <b-jumbotron fluid>
        <b-input-group id="search-bar">
            <b-form-input v-model="query" size="lg" type="text" placeholder="Search for resources" class="pl-4" @keyup.enter.native="runSearch"></b-form-input>
            <b-input-group-append>
                <b-btn id="search-submit" @click="runSearch">
                    <magnify></magnify>
                </b-btn>
            </b-input-group-append>
        </b-input-group>
    </b-jumbotron>
    <b-container fluid>
        <b-card class="search-content-card" no-body>
            <b-container fluid class="search-content">

                <b-row no-gutters>
                    <b-col v-show="showFiltersSidebar" class="col-12 col-md-3" id="search-filters-sidebar">
                        <b-form-group v-for="(category, key) in filters" :key="key" class="search-filters" :id="'filter-' + key">
                            <template slot="label">
                                <b-link v-b-toggle="'filter-' + key + '-collapse'" class="filter-collapse-toggle float-right">
                                    <span class="when-closed"><chevron-down></chevron-down></span>
                                    <span class="when-opened"><chevron-up></chevron-up></span>
                                </b-link>
                                <b>{{ category.header }}</b><br>

                            </template>
                                <b-collapse :id="'filter-' + key + '-collapse'" class="px-1 pb-1">
                                    <b-form-checkbox-group :id="'category-' + key + '-options'" stacked v-model="category.selected" :options="category.options" class="search-filter-checkboxes"></b-form-checkbox-group>
                                </b-collapse>
                        </b-form-group>
                        <div class="my-4 text-center">
                            <b-btn class="filter-submit-button" @click="runSearch">Submit</b-btn>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-9 pl-3" id="search-results-content">
                        <div class="mb-5">
                            <h1 class="mb-1">Results</h1>
                            <h6 v-show="submittedQuery">{{ submittedQuery }}</h6>
                            <div class="divider" v-show="submittedQuery"></div>
                        </div>
                        <div v-show="!foundResults">
                            <h4>No results found.</h4>
                        </div>
                        <div v-if="resultsTyped.helpNow.length">
                            <h1>Immediate Help</h1>
                            <b-card-group deck>
                                <home-quicklink-card v-for="(help, index) in resultsTyped.helpNow" :key="index" :link="help.object"></home-quicklink-card>
                            </b-card-group>
                            <div class="divider" v-show="resultsTyped.capsService.length"></div>
                        </div>
                        <div v-if="resultsTyped.capsService.length">
                            <h1>CAPS Services</h1>
                            <b-card-group deck>
                                <home-quicklink-card v-for="(service, index) in resultsTyped.capsService" :key="index" :link="service.object"></home-quicklink-card>
                            </b-card-group>
                            <div class="divider"></div>
                        </div>
                        <div v-if="resultsTyped.groupCounseling.length">
                            <h1>Group Counseling</h1>
                            <b-card-group deck>
                                <workshop-card v-for="(group, index) in resultsTyped.groupCounseling" :key="index" :service="group.object"></workshop-card>
                            </b-card-group>
                            <div class="divider" v-show="resultsTyped.workshopDiscussion.length"></div>
                        </div>
                        <div v-if="resultsTyped.workshopDiscussion.length">
                            <h1>Workshops &amp; Discussions</h1>
                            <b-card-group deck>
                                <workshop-card v-for="(workshop, index) in resultsTyped.workshopDiscussion" :key="index" :service="workshop.object"></workshop-card>
                            </b-card-group>
                            <div class="divider" v-show="resultsTyped.studentArticle.length"></div>
                        </div>
                        <div v-if="resultsTyped.studentArticle.length">
                            <h1>Student Wellbeing Articles</h1>
                            <b-card-group deck>
                                <article-card v-for="(article, index) in resultsTyped.studentArticle" :key="index" :article="article.object">
                                </article-card>
                            </b-card-group>
                            <div class="divider" v-show="resultsTyped.mentalHealthArticle.length"></div>
                        </div>
                        <div v-if="resultsTyped.mentalHealthArticle.length">
                            <h1>Mental Health Articles</h1>
                            <b-card-group deck>
                                <article-card v-for="(article, index) in resultsTyped.mentalHealthArticle" :key="index" :article="article.object">
                                </article-card>
                            </b-card-group>
                            <div class="divider" v-show="resultsTyped.parentArticle.length"></div>
                        </div>
                        <div v-if="resultsTyped.parentArticle.length">
                            <h1>Parents, Friends, &amp; Family Articles</h1>
                            <b-card-group deck>
                                <article-card v-for="(article, index) in resultsTyped.parentArticle" :key="index" :article="article.object">
                                </article-card>
                            </b-card-group>
                        </div>
                    </b-col>
                </b-row>

            </b-container>
        </b-card>
    </b-container>
</div>
</template>

<script>
import searchJSON from "./../../assets/data/search.json"
import ArrowRight from "vue-material-design-icons/ArrowRight.vue"
import WorkshopCard from "./../content/WorkshopCard"
import ArticleCard from "./../content/ArticleCard"
import Magnify from "vue-material-design-icons/Magnify.vue"
import ChevronDown from "vue-material-design-icons/ChevronDown.vue"
import ChevronUp from "vue-material-design-icons/ChevronUp.vue"
import FilterVariant from "vue-material-design-icons/FilterVariant.vue"
import HomeQuicklinkCard from "./../content/HomeQuicklinkCard"

export default {
    name: 'Search',
    components: {
        ArrowRight,
        Magnify,
        WorkshopCard,
        ArticleCard,
        ChevronDown,
        ChevronUp,
        FilterVariant,
        HomeQuicklinkCard
    },
    data() {
        return {
            items: searchJSON,
            query: "",
            submittedQuery: "",
            showFiltersSidebar: true,
            filters: {
                who: {
                    header: "Who needs help?",
                    selected: [],
                    options: [{
                            text: "Students",
                            value: "student"
                        },
                        {
                            text: "Couples",
                            value: "couple"
                        },
                        {
                            text: "Parents & Family",
                            value: "parent"
                        },
                        {
                            text: "Faculty",
                            value: "faculty"
                        }
                    ]
                },
                when: {
                    header: "Urgency",
                    selected: [],
                    options: [{
                            text: "Emergency",
                            value: "emergency"
                        },
                        {
                            text: "Available Now",
                            value: "available"
                        },
                        {
                            text: "Available Later",
                            value: "later"
                        }
                    ]
                },
                what: {
                    header: "Types of Resources",
                    selected: [],
                    options: [{
                            text: "Individual",
                            value: "individual"
                        },
                        {
                            text: "Couples",
                            value: "couples"
                        },
                        {
                            text: "Workshops & Discussions",
                            value: "workshop"
                        },
                        {
                            text: "Group Counseling",
                            value: "group"
                        },
                        {
                            text: "Psychiatry & Meds",
                            value: "psychiatric"
                        },
                        {
                            text: "Mindfulness Practice",
                            value: "mindfulness"
                        },
                        {
                            text: "Fun & Active",
                            value: "fun"
                        },
                        {
                            text: "Articles",
                            value: "article"
                        }
                    ]
                },
                problems: {
                    header: "Common Problems",
                    selected: [],
                    options: [{
                            text: "Academic Stress",
                            value: "academic stress"
                        },
                        {
                            text: "College Transition",
                            value: "college"
                        },
                        {
                            text: "Mental Health",
                            value: "mental health"
                        },
                        {
                            text: "Relationships",
                            value: "relationships"
                        },
                        {
                            text: "Sleeping & Eating",
                            value: "sleeping eating"
                        }
                    ]
                }
            },
            results: [],
            resultsTyped: {
                capsService: [],
                workshopDiscussion: [],
                groupCounseling: [],
                studentArticle: [],
                mentalHealthArticle: [],
                parentArticle: [],
                helpNow: [],
                other: []
            },
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
        },
        resultsTypes() {
            var types = [];
            if (this.results.length) {
                for (var i = 0; i < this.results.length; i++) {
                    if (!types.includes(this.results[i].type)) {
                        types.push(this.results[i].type);
                    }
                }
            }
            return types;
        },
        foundResults() {
            if (this.submittedQuery.length && this.results.length) {
                return true;
            } else if (this.submittedQuery.length === 0) {
                return true;
            }
            return false;
        },

        
    },
    methods: {
        filterChecked (filter) {
            if (this.submittedQuery.includes(filter)) {
                return true;
            } return false;
        },

        runSearch() {
            this.results = [];
            this.resultsTyped = {
                capsService: [],
                workshopDiscussion: [],
                groupCounseling: [],
                studentArticle: [],
                mentalHealthArticle: [],
                parentArticle: [],
                helpNow: [],
                other: []
            };
            this.submittedQuery = "";

            this.query = this.query.trim();
            this.addFilters();

            if (this.query) {
                var options = {
                    keys: ["title", "tags"],
                    defaultAll: false,
                    threshold: 0.1,
                    tokenize: true,
                    findAllMatches: true
                }

                this.$search(this.query, this.items, options).then(result => {
                    this.results = result;
                    this.submittedQuery = this.query;
                    if (this.results.length) {
                        this.parseResults();
                    }
                });
            }

        },

        parseResults() {

            for (var i = 0; i < this.results.length; i++) {
                switch (this.results[i].type) {
                    case "workshop-discussion":
                        this.resultsTyped.workshopDiscussion.push(this.results[i]);
                        break;
                    case "caps-service":
                        this.resultsTyped.capsService.push(this.results[i]);
                        break;
                    case "group":
                        this.resultsTyped.groupCounseling.push(this.results[i]);
                        break;
                    case "student-article":
                        this.resultsTyped.studentArticle.push(this.results[i]);
                        break;
                    case "mental-health-article":
                        this.resultsTyped.mentalHealthArticle.push(this.results[i]);
                        break;
                    case "help-now":
                        this.resultsTyped.helpNow.push(this.results[i]);
                        break;
                    case "parent-article":
                        this.resultsTyped.parentArticle.push(this.results[i]);
                        break;
                    default:
                        this.resultsTyped.other.push(this.results[i]);
                        break;
                }
            }

        },

        addFilters() {
            for (var filter in this.filters) {
                var selected = this.filters[filter].selected;
                if (selected.length) {
                    for (var i = 0; i < selected.length; i++) {
                        this.query += " " + selected[i];
                    }
                }
            }
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
.search {
    margin-bottom: 64px;
}

.search-content {
    padding: 48px 8% 48px 8%;
    color: #454F63;
}

.search-content-card {
    max-width: 95%;
    margin: auto;
    border: 0;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    -moz-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.3), 0px 2px 10px 0px rgba(69, 91, 99, 0.12);
    z-index: 2;
}

#search-filters-sidebar {
    margin-left: -4%;
    border-right: 1.5px solid #F4F4F6;
    margin-right: 2%;
    padding-right: 12px;
}

.article-scroll-menu {
    font-size: 13px !important;
    position: sticky;
    top: 72px;
    margin-right: 24px;
    border-right: 1.5px solid #F4F4F6;
    border-radius: 0;
}

@media (min-width: 1200px) {

    .search-content,
    .content-card {
        width: 1200px;
        max-width: 1200px;
    }
}

.search .jumbotron {
    position: relative;
    text-align: center;
    background-color: transparent;
    padding-top: 104px;
    padding-bottom: 184px;
    margin-bottom: -96px;
    background-image: url("./../../assets/images/search-bg.jpg");
    background-size: cover;
}

.search .jumbotron h1 {
    color: white;
    font-family: "Scope One", "serif";
    font-weight: bolder;
    font-size: 64px;
    letter-spacing: 4px;
    margin-bottom: 0;
}

.search .jumbotron-img {
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    overflow: hidden;
    z-index: -1;
}

.search .jumbotron img {
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    object-fit: cover;
    object-position: top;
    filter: blur(3px) brightness(65%);
}

.search-back-button {
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

.search-back-arrow {
    font-size: 22px;
    margin-right: 8px;
}

.search-back-button:hover {
    text-decoration: none;
}

.search-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
    color: #1D222D;
}

.search-content h4 {
    font-family: "Montserrat", "sans-serif";
    color: #7A859C;
    margin-top: 28px;
}

.search-content h6 {
    color: #38C6D4;
    font-family: "Montserrat", "sans-serif";
}

.search-content p,
.search-content ul,
.search-content ol {
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

.search-content .divider {
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

.search-filters {
    font-family: "Montserrat", "sans-serif";
    font-weight: 300;
    font-size: 13px;
}

.search-filters legend {
    color: #112C5A;
}

.search-filter-checkboxes label {
    min-height: initial !important;
}

.search-filter-checkboxes .custom-control-label::before,
.search-filter-checkboxes .custom-control-label::after {
    top: 0.1rem !important;
}

.search-filter-checkboxes .custom-control-input:focus~.custom-control-label::before {
    box-shadow: none;
}

.search-filter-checkboxes .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #37A5EB;
}

#search-bar {
    border-radius: 32px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.6);
    -moz-box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.6);
    box-shadow: 0px 2px 5px 0px rgba(69, 91, 99, 0.6);
    transition: 0.3s;
    font-family: "Montserrat", "sans-serif";
}

#search-bar:hover {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5);
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5);
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5);
}

#search-bar input {
    border: none;
    font-weight: 300;
    transition: all 0.3s ease;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    color: #495265;
    font-size: 18px;
}

#search-bar input:focus {
    box-shadow: none;
}

#search-bar input::placeholder {
    color: #79859D;
}

#search-bar:focus-within {
    -webkit-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5), 0px 0px 6px 2px #37A5EB;
    -moz-box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5), 0px 0px 6px 2px #37A5EB;
    box-shadow: 0px 5px 18px 0px rgba(69, 91, 99, 0.5), 0px 0px 6px 2px #37A5EB;

}

#search-submit {
    font-size: 24px;
    line-height: initial;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    background-color: white;
    border: none;
    color: #79859D;
    z-index: 2;
}

#search-submit .magnify-icon svg {
    bottom: -0.2rem;
}

#search-submit:hover {
    color: #37A5EB;
}

#search-submit:focus {
    box-shadow: none;
}

.collapsed>.when-opened,
:not(.collapsed)>.when-closed {
    display: none;
}

.filter-collapse-toggle {
    color: #79859D;
    font-size: 20px;
    height: 14px;
    transition: 0.3s;
}

.filter-collapse-toggle:hover {
    color: #37A5EB;
}

.filter-collapse-toggle svg {
    bottom: initial !important;
}

.filter-submit-button,
.filter-submit-button:focus {
    border: none;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700 !important;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: #2DC6D6;
    box-shadow: none;
}

.filter-submit-button:hover {
    background-color: #1f7998;
    box-shadow: none;
}

.quicklink-card {
    min-width: 100% !important;
    width: 100%;
}

@media (min-width: 576px) {
    .quicklink-card {
        min-width: calc(50% - 30px) !important;
    } 
}

@media (min-width: 992px) {
    .quicklink-card {
        min-width: calc(33% - 30px) !important;
    }
}

.article-card {
    max-width: 100% !important;
}
</style>
