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
                    link: "/get-started",
                    icon: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 128 128.7\" style=\"enable-background:new 0 0 128 128.7;\" xml:space=\"preserve\">\r\n<style type=\"text\/css\">\r\n\t.st0{display:none;}\r\n\t.st1{display:inline;}\r\n\t.st2{fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:10;}\r\n<\/style>\r\n<g class=\"st0\">\r\n\t<g class=\"st1\">\r\n\t\t<rect class=\"st2\" width=\"128\" height=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"124\" x2=\"128\" y2=\"124\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"120\" x2=\"128\" y2=\"120\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"116\" x2=\"128\" y2=\"116\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"112\" x2=\"128\" y2=\"112\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"108\" x2=\"128\" y2=\"108\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"104\" x2=\"128\" y2=\"104\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"100\" x2=\"128\" y2=\"100\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"96\" x2=\"128\" y2=\"96\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"92\" x2=\"128\" y2=\"92\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"88\" x2=\"128\" y2=\"88\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"84\" x2=\"128\" y2=\"84\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"80\" x2=\"128\" y2=\"80\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"76\" x2=\"128\" y2=\"76\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"72\" x2=\"128\" y2=\"72\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"68\" x2=\"128\" y2=\"68\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"64\" x2=\"128\" y2=\"64\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"60\" x2=\"128\" y2=\"60\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"56\" x2=\"128\" y2=\"56\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"52\" x2=\"128\" y2=\"52\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"48\" x2=\"128\" y2=\"48\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"44\" x2=\"128\" y2=\"44\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"40\" x2=\"128\" y2=\"40\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"36\" x2=\"128\" y2=\"36\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"32\" x2=\"128\" y2=\"32\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"28\" x2=\"128\" y2=\"28\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"24\" x2=\"128\" y2=\"24\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"20\" x2=\"128\" y2=\"20\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"16\" x2=\"128\" y2=\"16\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"12\" x2=\"128\" y2=\"12\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"8\" x2=\"128\" y2=\"8\"\/>\r\n\t\t<line class=\"st2\" x1=\"0\" y1=\"4\" x2=\"128\" y2=\"4\"\/>\r\n\t\t<line class=\"st2\" x1=\"124\" y1=\"0\" x2=\"124\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"120\" y1=\"0\" x2=\"120\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"116\" y1=\"0\" x2=\"116\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"112\" y1=\"0\" x2=\"112\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"108\" y1=\"0\" x2=\"108\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"104\" y1=\"0\" x2=\"104\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"100\" y1=\"0\" x2=\"100\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"96\" y1=\"0\" x2=\"96\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"92\" y1=\"0\" x2=\"92\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"88\" y1=\"0\" x2=\"88\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"84\" y1=\"0\" x2=\"84\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"80\" y1=\"0\" x2=\"80\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"76\" y1=\"0\" x2=\"76\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"72\" y1=\"0\" x2=\"72\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"68\" y1=\"0\" x2=\"68\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"64\" y1=\"0\" x2=\"64\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"60\" y1=\"0\" x2=\"60\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"56\" y1=\"0\" x2=\"56\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"52\" y1=\"0\" x2=\"52\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"48\" y1=\"0\" x2=\"48\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"44\" y1=\"0\" x2=\"44\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"40\" y1=\"0\" x2=\"40\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"36\" y1=\"0\" x2=\"36\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"32\" y1=\"0\" x2=\"32\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"28\" y1=\"0\" x2=\"28\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"24\" y1=\"0\" x2=\"24\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"20\" y1=\"0\" x2=\"20\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"16\" y1=\"0\" x2=\"16\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"12\" y1=\"0\" x2=\"12\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"8\" y1=\"0\" x2=\"8\" y2=\"128\"\/>\r\n\t\t<line class=\"st2\" x1=\"4\" y1=\"0\" x2=\"4\" y2=\"128\"\/>\r\n\t<\/g>\r\n<\/g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M8.5,35.4l3.5,1.8c4.3,2.1,8.3,4.8,11.9,7.8c3.8,3.2,5.9,5.8,7.8,8.2c2,2.5,3.7,4.6,6.6,6.5c3.8,2.5,8.5,3.8,14,3.8\r\n\t\t\tc3.5,0,7.3-0.5,11.4-1.5c3.5,4.9,6.1,10.6,7.6,16.5c-0.7,5.2-1,10.5-1,15.8v0.1l0,0c0,2.2,0.1,4.5,0.2,6.8\r\n\t\t\tc-3.1-0.6-6.7-0.6-10.5,0.8c-5.5,2-8.8,6-10.4,8.6c-3.2-0.4-8.6-0.2-13.8,3.3c-3.8,2.6-5.8,5.9-6.9,8.3l-1.6,3.5H118l-0.8-3.1\r\n\t\t\tc-0.7-2.6-2.1-5-3.9-6.9c-3.6-3.7-8.2-4.5-10.7-4.6c-1.4-2.1-4.2-5.2-8.8-6.8c-5.9-2-11.1-0.2-13.7,1.1c-1-0.7-2.5-1.6-4.3-2.4\r\n\t\t\tc-0.2-2.4-0.3-4.7-0.3-7.1c1.6-2.6,3.3-5.1,5.3-7.4c2,0.6,4,0.9,5.8,0.9c2.1,0,4.1-0.4,5.8-1.2c2.9-1.3,4.4-3.3,6.6-6.1\r\n\t\t\tc1.2-1.5,2.7-3.4,4.8-5.7c1.9-2,3.8-4,5.9-5.9L112,68l-2.8-1.8c-7.5-4.8-17.2-4.5-24,0.7c-7.5,5.7-8,14.6-8,17.5\r\n\t\t\tc-0.6,0.6-1.1,1.3-1.6,2c0.2-2.8,0.5-5.5,0.8-8.2h0.1v-0.1c0.9-6.4,2.3-12.7,4.3-18.9c10.8-3,18.2-7.9,21.8-14.7\r\n\t\t\tc2.1-3.9,2.5-7.5,3-11.3c0.5-4,1-8.2,3.4-13.6c1.9-4.3,4.5-8.4,7.7-12l2.8-3.2l-4.2-0.9C98-0.3,80.4,7.8,73.3,22.7\r\n\t\t\tc-7.4,15.6,0.3,30.7,2.7,34.8c-1,3.5-2,7.2-2.8,10.8c-1.7-3.7-3.8-7.3-6.2-10.5c-0.2-4.6-1.7-18.3-13.1-26.7\r\n\t\t\tc-12-8.9-29.4-8.2-42.3,1.8L8.5,35.4z M79.6,111.1l1.6-1c0.9-0.6,5.6-3.3,11-1.4c4,1.4,6.1,4.5,6.8,5.8l0.8,1.4l1.5-0.1\r\n\t\t\tc1.2-0.1,5.4,0,8.4,3.1c0.5,0.5,0.9,1,1.2,1.5H35.7c0.8-0.9,1.8-1.9,3-2.7c4.8-3.3,10.2-2.5,11.8-2.2l1.9,0.4l0.9-1.7\r\n\t\t\tc0.9-1.7,3.5-5.9,8.6-7.8c8.6-3.1,16.3,3.3,16.4,3.4L79.6,111.1z M88.3,71c4.3-3.3,10.1-4,15.3-2c-1.2,1.2-2.4,2.5-3.6,3.7\r\n\t\t\tc-2.2,2.4-3.8,4.4-5,6c-2.1,2.7-3.1,3.8-4.8,4.6c-1.5,0.7-3.3,0.9-5.4,0.6c3-2.8,6.3-5.3,9.8-7.3l-2.5-4.3\r\n\t\t\tc-3.2,1.9-6.3,4.1-9.1,6.5C83.8,76.2,85.3,73.3,88.3,71z M77.9,24.8C83,14.1,94.4,7.6,106.8,7.6c1.1,0,2.2,0.1,3.3,0.2\r\n\t\t\tc-2.3,3.1-4.2,6.4-5.8,9.9c-2.7,6.1-3.3,10.8-3.8,15c-0.5,3.7-0.8,6.5-2.5,9.6c-2.6,4.9-7.8,8.6-15.4,11.2\r\n\t\t\tc3.5-9.2,8.1-18,13.8-26.2l-4.1-2.9C86.7,32.6,82,41.6,78.4,50.9C75.9,45.1,73.1,34.9,77.9,24.8z M50.9,35.1\r\n\t\t\tC57,39.6,59.8,46,61,51.1c-7.4-7-15.5-10.6-21.5-12.4L38,43.5c6.2,1.9,14.9,5.9,22.3,14.1c-8.2,1.7-14.6,0.9-19.2-2.1\r\n\t\t\tc-2.2-1.5-3.6-3.2-5.5-5.5c-1.9-2.4-4.4-5.4-8.5-8.8c-2.9-2.4-5.9-4.6-9.2-6.5C28.5,28.2,41.6,28.2,50.9,35.1z\"\/>\r\n\t<\/g>\r\n<\/g>\r\n<\/svg>",
            },
                {
                    title: "While You Wait",
                    description: "Discover ways to stay healthy while you wait for your CAPS appointment.",
                    link: "/resources/while-you-wait",
                    icon: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 91 91\" style=\"enable-background:new 0 0 91 91;\" xml:space=\"preserve\">\r\n<g>\r\n\t<path d=\"M62.9,35.5c4.8-4.3,7.2-10.2,7.3-18v-6.2h5.2V2.6H15.9v8.7h5.2v6.2c0.1,7.8,2.5,13.7,7.3,18c1.5,1.4,3,2.8,4.6,4.2\r\n\t\tc1.2,1.1,2.3,2.1,3.5,3.2l0,0c0.3,0.2,0.5,0.5,0.7,0.7c0,0,0.1,0,0.1,0.1c0.7,0.8,1,1.6,1,2.3l0,0l0,0c0,0.8-0.4,1.5-1,2.3\r\n\t\tc0,0,0,0-0.1,0.1c-0.2,0.2-0.5,0.5-0.7,0.7l0,0c-1.2,1.1-2.3,2.1-3.5,3.2c-1.5,1.4-3,2.8-4.5,4.1c-4.8,4.3-7.2,10.2-7.3,18v5.3H16\r\n\t\tv8.7h59.6v-8.7h-5.2v-5.3c-0.1-7.8-2.5-13.7-7.3-18c-1.5-1.4-3-2.7-4.5-4.1c-1.2-1.1-2.3-2.1-3.5-3.2l0,0c-0.3-0.2-0.5-0.5-0.7-0.7\r\n\t\tc0,0-0.1,0-0.1-0.1c-0.7-0.8-1-1.6-1-2.3l0,0l0,0c0-0.8,0.4-1.5,1-2.3l0.1-0.1c0.2-0.2,0.4-0.5,0.7-0.7l0,0\r\n\t\tc1.2-1.1,2.3-2.1,3.5-3.2C59.9,38.2,61.4,36.8,62.9,35.5z M19.1,5.8h53.3v2.3H19.1V5.8z M72.3,85.3H19.1V83h53.3L72.3,85.3\r\n\t\tL72.3,85.3z M52.7,40.5c-0.2,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.1,0.1-0.2,0.2c-1.4,1.5-2.1,3-2.2,4.7c0,0.1,0,0.1,0,0.2l0,0l0,0\r\n\t\tc0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.5l0,0c0.2,1.4,0.9,2.8,2.2,4.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.3,0.3,0.4,0.4\r\n\t\tc1.2,1.1,2.4,2.2,3.6,3.3c1.5,1.4,3,2.8,4.5,4.1c4.2,3.8,6.2,8.8,6.3,15.7v5.3H24.3v-5.3c0.1-6.9,2.1-11.9,6.3-15.7\r\n\t\tc1.5-1.4,3-2.8,4.5-4.1c1.2-1.1,2.4-2.2,3.6-3.3c0.1-0.1,0.3-0.3,0.4-0.4c0.1-0.1,0.1-0.1,0.2-0.2c1.3-1.3,2-2.7,2.2-4.1l0,0\r\n\t\tc0-0.2,0-0.4,0-0.5s0-0.1,0-0.2l0,0l0,0c0-0.1,0-0.1,0-0.2c-0.1-1.6-0.8-3.2-2.2-4.7c0-0.1-0.1-0.1-0.2-0.2\r\n\t\tc-0.1-0.1-0.3-0.3-0.4-0.4c-1.2-1.1-2.4-2.2-3.5-3.2c-1.5-1.4-3-2.8-4.6-4.2c-4.2-3.8-6.2-8.8-6.3-15.7v-6.2h42.8v6.1\r\n\t\tc-0.1,7-2.1,12-6.3,15.8c-1.5,1.4-3.1,2.8-4.6,4.2C55.1,38.4,53.9,39.4,52.7,40.5z\"\/>\r\n\t<path d=\"M65.4,23.1l-4.8,2.4c-5.1,2.6-6.8,3.5-14.4,1c-6.5-2.1-11.9-0.6-15.4,1L29,28.4l1.3,1.6c0.5,0.6,1.1,1.2,1.6,1.7\r\n\t\tc1.5,1.4,3.1,2.8,4.6,4.2c1.2,1.1,2.4,2.2,3.5,3.2c0.2,0.2,0.3,0.3,0.5,0.5L41,40c0.3,0.3,0.5,0.6,0.7,0.9l0.1,0.1\r\n\t\tc0.5,0.7,1.1,2.1,1.6,3.7l0.1,0.3l0.2,0.2c0.7,1,1.5,1.3,2.1,1.3c0.1,0,0.1,0,0.2,0c1-0.1,1.7-0.8,2-1.4l0.2-0.5\r\n\t\tc0.2-1.2,0.8-2.4,1.5-3.5l0.1-0.1c0.2-0.3,0.5-0.6,0.7-0.9l0.4-0.4c0.2-0.2,0.3-0.3,0.5-0.5c1.2-1.1,2.4-2.2,3.5-3.2\r\n\t\tc1.5-1.4,3-2.8,4.6-4.2c1.3-1.2,2.3-2.4,3.2-3.9L65.4,23.1z M52.8,33.5c-1.2,1.1-2.3,2.2-3.5,3.2c-0.2,0.2-0.5,0.5-0.7,0.7\r\n\t\tl-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.3,0.4-0.7,0.8-0.9,1.1l-0.1,0.1c-0.6,0.8-1.1,1.7-1.4,2.5c-0.4-0.9-0.8-1.8-1.3-2.5L44.3,39\r\n\t\tc-0.3-0.4-0.6-0.7-0.9-1.1c-0.1-0.1-0.2-0.2-0.3-0.3l-0.3-0.3c-0.2-0.2-0.4-0.4-0.6-0.6c-1.2-1.1-2.4-2.1-3.5-3.2\r\n\t\tc-1.4-1.3-2.9-2.6-4.3-3.9c2.8-0.9,6.6-1.4,10.9,0c4.8,1.5,7.7,1.9,10.4,1.4C54.7,31.8,53.7,32.6,52.8,33.5z\"\/>\r\n\t<path d=\"M45.7,51.9c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.4-0.2,0.5-0.3c0.2-0.2,0.3-0.3,0.3-0.5c0.1-0.2,0.1-0.4,0.1-0.6\r\n\t\tc0-0.4-0.2-0.8-0.5-1.1c-0.1-0.1-0.2-0.1-0.2-0.2C46.4,49,46.3,49,46.2,49s-0.2-0.1-0.3-0.1c-0.5-0.1-1.1,0.1-1.4,0.4\r\n\t\tC44.2,49.6,44,50,44,50.4c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.2,0.4,0.3,0.5C44.9,51.8,45.3,51.9,45.7,51.9z\"\/>\r\n\t<path d=\"M44.6,56.5c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.2,1.1-0.5s0.5-0.7,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1\r\n\t\tc-0.1-0.1-0.2-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.1-1.1,0.1-1.4,0.4c-0.3,0.3-0.5,0.7-0.5,1.1\r\n\t\tC44.1,55.8,44.3,56.2,44.6,56.5z\"\/>\r\n\t<path d=\"M27.9,76.1c0,0.9,0.7,1.6,1.6,1.6h32.4c0.9,0,1.6-0.7,1.6-1.6c0-9.8-8-17.8-17.8-17.8S27.9,66.2,27.9,76.1z M60.3,74.5\r\n\t\tH31.2c0.8-7.3,7-13,14.5-13S59.5,67.1,60.3,74.5z\"\/>\r\n<\/g>\r\n<\/svg>",
                },
                {
                    title: "Personalized Resources",
                    description: "Don't know where to start? Search for CAPS resources fit for your unique needs.",
                    link: "/search",
                    icon: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 64 63.9\" style=\"enable-background:new 0 0 64 63.9;\" xml:space=\"preserve\">\r\n<title>search-tool-symbol-magnifying glass-zoom-magnifier<\/title>\r\n<g>\r\n\t<path d=\"M32,7c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13C45,12.8,39.2,7,32,7z M32,31c-6.1,0-11-4.9-11-11S25.9,9,32,9\r\n\t\ts11,4.9,11,11C43,26.1,38.1,31,32,31z\"\/>\r\n\t<path d=\"M36,40v-2.5c9.7-2.2,15.8-11.9,13.5-21.5C47.3,6.3,37.7,0.2,28,2.4S12.2,14.3,14.5,24C16,30.7,21.3,36,28,37.5V40\r\n\t\tc0,0.7,0.4,1.4,1,1.7V48c-0.5,0-1,0.4-1,0.9l-0.7,8c-0.2,2.6,1.7,4.8,4.3,5.1c2.6,0.2,4.8-1.7,5.1-4.3c0-0.3,0-0.5,0-0.8l-0.7-8\r\n\t\tc0-0.5-0.5-0.9-1-0.9v-6.3C35.6,41.4,36,40.7,36,40z M34,59.1c-0.5,0.6-1.2,0.9-2,0.9l0,0c-1.5,0-2.7-1.2-2.7-2.7\r\n\t\tc0-0.1,0-0.1,0-0.2l0.6-7.1h4.2l0.6,7.1C34.7,57.8,34.5,58.6,34,59.1z M30,40v-2h4v2H30z M33,42v6h-2v-6H33z M32,36\r\n\t\tc-8.8,0-16-7.2-16-16S23.2,4,32,4s16,7.2,16,16C48,28.8,40.8,36,32,36z\"\/>\r\n\t<path d=\"M29,18c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2C28,17.6,28.4,18,29,18z\"\/>\r\n\t<path d=\"M35,18c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2C34,17.6,34.4,18,35,18z\"\/>\r\n\t<path d=\"M39.7,20.3c-0.4-0.4-1-0.4-1.4,0L37,21.6c-2.7,2.7-7.2,2.7-9.9,0l-1.3-1.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4\r\n\t\tl1.3,1.3c3.5,3.5,9.2,3.5,12.7,0l1.3-1.3C40.1,21.3,40.1,20.7,39.7,20.3z\"\/>\r\n\t<path d=\"M16,7c0-0.6-0.4-1-1-1c-1.7,0-3-1.3-3-3c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,1.7-1.3,3-3,3C6.4,6,6,6.4,6,7s0.4,1,1,1\r\n\t\tc1.7,0,3,1.3,3,3c0,0.6,0.4,1,1,1s1-0.4,1-1c0-1.7,1.3-3,3-3C15.6,8,16,7.6,16,7z M11,8c-0.3-0.4-0.6-0.7-1-1c0.4-0.3,0.7-0.6,1-1\r\n\t\tc0.3,0.4,0.6,0.7,1,1C11.6,7.3,11.3,7.6,11,8z\"\/>\r\n\t<rect x=\"50\" y=\"32\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"50\" y=\"36\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"48\" y=\"34\" width=\"2\" height=\"2\"\/>\r\n\t<rect x=\"52\" y=\"34\" width=\"2\" height=\"2\"\/>\r\n<\/g>\r\n<\/svg>"
                },
                {
                    title: "Emergency",
                    description: "Contact information and resources for immediate help.",
                    link: "/resources/emergency",
                    icon: "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 100 99.9\" style=\"enable-background:new 0 0 100 99.9;\" xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M60.8,93.3H39.2c-0.8,0-1.5-0.7-1.5-1.5V71.4L19.9,81.6c-0.3,0.2-0.8,0.3-1.1,0.2c-0.4-0.1-0.7-0.4-0.9-0.7L7,62.3\r\n\t\t\tc-0.2-0.3-0.3-0.8-0.2-1.1c0.1-0.4,0.4-0.7,0.7-0.9L25.3,50L7.6,39.8c-0.7-0.4-1-1.3-0.5-2L17.9,19c0.4-0.7,1.3-1,2-0.5l17.7,10.2\r\n\t\t\tV8.2c0-0.8,0.7-1.5,1.5-1.5h21.7c0.8,0,1.5,0.7,1.5,1.5v20.5L80,18.5c0.7-0.4,1.6-0.2,2,0.5l11,18.7c0.4,0.7,0.2,1.6-0.5,2\r\n\t\t\tL74.7,50l17.7,10.2c0.3,0.2,0.6,0.5,0.7,0.9s0,0.8-0.2,1.1L82.1,81.1c-0.2,0.3-0.5,0.6-0.9,0.7s-0.8,0-1.1-0.2L62.3,71.4v20.5\r\n\t\t\tC62.3,92.7,61.7,93.3,60.8,93.3z M40.7,90.3h18.7V68.8c0-0.5,0.3-1,0.8-1.3s1-0.3,1.5,0l18.7,10.8l9.3-16.2L70.9,51.3\r\n\t\t\tc-0.5-0.3-0.8-0.8-0.8-1.3s0.3-1,0.8-1.3l18.7-10.8l-9.3-16.2L61.6,32.5c-0.5,0.3-1,0.3-1.5,0s-0.8-0.8-0.8-1.3V9.7H40.7v21.6\r\n\t\t\tc0,0.5-0.3,1-0.8,1.3s-1,0.3-1.5,0L19.7,21.7l-9.3,16.2l18.7,10.8c0.5,0.3,0.8,0.8,0.8,1.3s-0.3,1-0.8,1.3L10.4,62.1l9.3,16.2\r\n\t\t\tl18.7-10.8c0.5-0.3,1-0.3,1.5,0s0.8,0.8,0.8,1.3V90.3L40.7,90.3z\"\/>\r\n\t<\/g>\r\n<\/g>\r\n<\/svg>",
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
