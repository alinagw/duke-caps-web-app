<template>
<div>
    <b-carousel id="home-carousel" v-model="carouselSlide" img-width="1024" img-height="480">
        <b-carousel-slide img-src="https://studentaffairs.duke.edu/sites/default/files/styles/carousel_b_image_xwide/public/2018-07/IMG_1996_0.jpg?itok=PJuovoci"></b-carousel-slide>
        <b-carousel-slide img-src="https://studentaffairs.duke.edu/sites/default/files/styles/carousel_b_image_xwide/public/2017-12/IMG_0483_3.jpg?itok=ql1-UlbV"></b-carousel-slide>
    </b-carousel>
    <b-card-group deck class="quicklinks">
        <home-quicklink-card v-for="(link, index) in quicklinks" :key="index" :link="link"></home-quicklink-card>
    </b-card-group>
    <b-container fluid style="margin-bottom: 80px">
      <b-card class="content-card" no-body>
        <b-container class="section-content" fluid>
          <h1>Welcome to CAPS! <b-img class="content-img" src="https://studentaffairs.duke.edu/sites/default/files/styles/medium/public/2017-08/wellness_tree_seal_rgb.png?itok=X5LOgZRK" right fluid rounded></b-img></h1>
                <p>
                 
                    CAPS helps Duke Students enhance strengths and develop abilities to successfully live, grow and learn in their personal and academic lives. We offer many services to Duke undergraduate, graduate, and professional students, including brief individual and group counseling, couples counseling and more. CAPS staff also provide outreach to student groups, particularly programs supportive of at-risk populations, on a wide range of issues impacting them in various aspects of campus life.
                </p>
        </b-container>
      </b-card>
    </b-container>
</div>
</template>

<script>
import HomeQuicklinkCard from "./../content/HomeQuicklinkCard"
export default {
    name: 'Homepage',
    components: {
        HomeQuicklinkCard
    },
    data() {
        return {
            carouselSlide: 0,
            quicklinks: [{
                    title: "Get Started",
                    description: "Find out how to get started with CAPS and what to expect.",
                    image: "",
                    link: "/get-started",
                    color: ""
                },
                {
                    title: "While You Wait",
                    description: "Discover ways to stay healthy while you wait for your CAPS appointment.",
                    image: "",
                    link: "/resources/while-you-wait",
                    color: ""
                },
                {
                    title: "Personalized Resources",
                    description: "Don't know where to start? Search for CAPS resources fit for your unique needs.",
                    image: "",
                    link: "",
                    color: ""
                },
                {
                    title: "Emergency",
                    description: "Contact information and resources for immediate help.",
                    image: "",
                    link: "/resources/emergency",
                    color: ""
                }
            ]

        }
    }
}
</script>

<style scoped>
#home-carousel {
  
}

.quicklinks {
    margin: auto;
    margin-top: -6%;
    max-width: calc(95% - 16px);
    margin-bottom: 32px;
}

@media (min-width: 1200px) {
    .quicklinks {
        width: 1200px;
        max-width: 1200px;
    }
}

.section-content {
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
    .section-content, .content-card {
      width: 1200px;
      max-width: 1200px;
    }
}

.section-content h1 {
    font-family: "Scope One", "serif";
    margin-bottom: 24px;
    color: #1D222D;
}

.section-content h4 {
    font-family: "Montserrat", "sans-serif";
    color: #7A859C;
    margin-top: 28px;
}

.section-content p, .section-content ul, .section-content ol {
    font-family: "Montserrat", "sans-serif";
    font-weight: 300;
    font-size: 15px;
}

.section-content .content-img {
    width: 100%;
    margin: 0 0 32px 0;
    transition: 0.3s;
}

@media (min-width: 576px) {
    .section-content .content-img {
        width: 40%;
        margin: 0 0 32px 32px;
    }
}

@media (min-width: 992px) {
    .section-content .content-img {
        width: 20%;
    }
}
</style>
