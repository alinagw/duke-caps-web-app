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
                    image: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 64 63.9\" style=\"enable-background:new 0 0 64 63.9;\" xml:space=\"preserve\">\r\n<title>search-tool-symbol-magnifying glass-zoom-magnifier<\/title>\r\n<g>\r\n\t<path d=\"M32,7c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13C45,12.8,39.2,7,32,7z M32,31c-6.1,0-11-4.9-11-11S25.9,9,32,9\r\n\t\ts11,4.9,11,11C43,26.1,38.1,31,32,31z\"\/>\r\n\t<path d=\"M36,40v-2.5c9.7-2.2,15.8-11.9,13.5-21.5C47.3,6.3,37.7,0.2,28,2.4S12.2,14.3,14.5,24C16,30.7,21.3,36,28,37.5V40\r\n\t\tc0,0.7,0.4,1.4,1,1.7V48c-0.5,0-1,0.4-1,0.9l-0.7,8c-0.2,2.6,1.7,4.8,4.3,5.1c2.6,0.2,4.8-1.7,5.1-4.3c0-0.3,0-0.5,0-0.8l-0.7-8\r\n\t\tc0-0.5-0.5-0.9-1-0.9v-6.3C35.6,41.4,36,40.7,36,40z M34,59.1c-0.5,0.6-1.2,0.9-2,0.9l0,0c-1.5,0-2.7-1.2-2.7-2.7\r\n\t\tc0-0.1,0-0.1,0-0.2l0.6-7.1h4.2l0.6,7.1C34.7,57.8,34.5,58.6,34,59.1z M30,40v-2h4v2H30z M33,42v6h-2v-6H33z M32,36\r\n\t\tc-8.8,0-16-7.2-16-16S23.2,4,32,4s16,7.2,16,16C48,28.8,40.8,36,32,36z\"\/>\r\n\t<path d=\"M29,18c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2C28,17.6,28.4,18,29,18z\"\/>\r\n\t<path d=\"M35,18c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2C34,17.6,34.4,18,35,18z\"\/>\r\n\t<path d=\"M39.7,20.3c-0.4-0.4-1-0.4-1.4,0L37,21.6c-2.7,2.7-7.2,2.7-9.9,0l-1.3-1.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4\r\n\t\tl1.3,1.3c3.5,3.5,9.2,3.5,12.7,0l1.3-1.3C40.1,21.3,40.1,20.7,39.7,20.3z\"\/>\r\n\t<path d=\"M16,7c0-0.6-0.4-1-1-1c-1.7,0-3-1.3-3-3c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.7-1.3,3-3,3C6.4,6,6,6.4,6,7s0.4,1,1,1\r\n\t\tc1.7,0,3,1.3,3,3c0,0.6,0.4,1,1,1s1-0.4,1-1c0-1.7,1.3-3,3-3C15.6,8,16,7.6,16,7z M11,8c-0.3-0.4-0.6-0.7-1-1c0.4-0.3,0.7-0.6,1-1\r\n\t\tc0.3,0.4,0.6,0.7,1,1C11.6,7.3,11.3,7.6,11,8z\"\/>\r\n\t<rect x=\"50\" y=\"32\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"50\" y=\"36\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"48\" y=\"34\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"52\" y=\"34\" width=\"2\" height=\"2\"\/>\r\n<\/g>\r\n<\/svg>",
                    link: "/search",
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
