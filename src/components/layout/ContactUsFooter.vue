<template>
<b-container fluid class="footer px-5">
    <b-row class="d-flex align-items-start pt-5 text-center text-md-left">
        <b-col class="col-12 col-md-3 mx-auto pb-4 pb-md-0">
            <div class="duke-svg mb-4" v-html="dukeSVG"></div>
            <p class="brand mb-4">Counseling &amp; Psychological Services (CAPS)</p>
            <p><b-link class="social-icon" href="https://www.facebook.com/DukeWellness" target="_blank"><facebook-box></facebook-box></b-link>
            <b-link class="social-icon" href="https://www.instagram.com/dukewellness/" target="_blank"><instagram></instagram></b-link>
            <b-link class="social-icon" href="https://twitter.com/dukewellness?lang=en" target="_blank"><twitter></twitter></b-link></p>
        </b-col>
        <b-col class="col-12 col-md-3 col-lg-4 mx-auto pb-4 pb-md-0">
            <h6>Helpful Links</h6>
            <p><b-link to="/resources/emergency">Emergency Resources</b-link></p>
            <p><b-link to="/get-started">Get Started with CAPS</b-link></p>
            <p><b-link to="/resources/while-you-wait">Resources While You Wait</b-link></p>
            <p><b-link to="/search">Search Personalized Resources</b-link></p>
            <p><a href="https://duke.qualtrics.com/jfe/form/SV_ctKNl5AI5ekvbeZ" target="_blank">Provide Feedback for CAPS</a></p>
        </b-col>
        <b-col class="col-12 col-md-6 col-lg-5 mx-auto">
            <h6>Contact</h6>
            <b-container class="px-0">
                <b-row>
                    <b-col class="col-1 offset-4 offset-md-0 contact-icon">
                        <phone></phone>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1"><strong>Phone</strong></p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p>(919) 660-1000</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1 offset-4 offset-md-0 contact-icon">
                        <printer></printer>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1"><strong>Fax</strong></p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p>(919) 660-1024</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1 offset-4 offset-md-0 contact-icon">
                        <home></home>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1"><strong>Address</strong></p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p class="mb-0">
                            Duke Student Wellness Center
                        </p>
                        <p class="mb-0">
                            CAPS | 3rd Floor
                        </p>
                        <p class="mb-0">
                            305 Towerview Road
                        </p>
                        <p>
                            Durham, NC 27708
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="col-1 offset-4 offset-md-0 contact-icon">
                        <clock></clock>
                    </b-col>
                    <b-col class="col-2">
                        <p class="mb-1"><strong>Hours</strong></p>
                    </b-col>
                    <b-col class="col-12 col-md-9">
                        <p class="mb-0">
                            Mon, Wed, Thurs, Fri: 8:00am - 5:00pm
                        </p>
                        <p>
                            Tues: 8:00am - 7:00pm
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
    <b-row class="copyright">
        <b-col class="col-12 col-md-6 text-center text-md-right">
            <p>&copy; 2018 Alina Walling, Kris Elbert, &amp; Andres Hernandez</p>
        </b-col>
        <b-col class="col-12 col-md-6 text-center text-md-left">
            <p>This website is NOT affiliated with Duke University.</p>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
import Phone from "vue-material-design-icons/Phone.vue"
import Printer from "vue-material-design-icons/Printer.vue"
import Home from "vue-material-design-icons/Home.vue"
import Clock from "vue-material-design-icons/Clock.vue"
import FacebookBox from "vue-material-design-icons/FacebookBox.vue"
import Instagram from "vue-material-design-icons/Instagram.vue"
import Twitter from "vue-material-design-icons/Twitter.vue"

export default {
    name: 'ContactUsFooter',
    components: {
        Phone,
        Printer,
        Home,
        Clock,
        FacebookBox,
        Instagram,
        Twitter
    },
    data() {
        return {
            dukeSVG: "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 222.61 96\" width=\"120\" height=\"52\"><title>Duke University</title><defs><style scoped>.cls-2{fill:#112C5A;}</style></defs><title>dukewordmark_vert_white</title><path class=\"cls-2\" d=\"M207.81,187.9c-3,0-4.58-2-4.58-5.31v-7.07h1.83v7c0,2.3.95,3.53,2.78,3.53s2.82-1.18,2.82-3.41v-7.14h1.83v7.11c0,3.41-1.65,5.27-4.68,5.27\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M235.29,187.71l-4.86-7.65c-.29-.45-.71-1.18-.9-1.49,0,.45,0,2.14,0,2.82v6.32h-1.77V175.52h1.86l4.63,7.44c.32.5.84,1.41,1,1.72,0-.45,0-2.19,0-2.87v-6.29H237v12.19h-1.74\" transform=\"translate(-195.34 -91.9)\"\/><rect class=\"cls-2\" x=\"57.15\" y=\"83.62\" width=\"1.83\" height=\"12.19\"\/><path class=\"cls-2\" d=\"M275.16,187.71h-1.93L269,175.52h2l2.54,7.77c.23.71.58,1.79.68,2.23.11-.44.46-1.54.68-2.25l2.51-7.75h1.95l-4.18,12.19\" transform=\"translate(-195.34 -91.9)\"\/><polyline class=\"cls-2\" points=\"98.6 95.81 98.6 83.62 106.45 83.62 106.45 85.39 100.43 85.39 100.43 88.41 103.93 88.41 103.93 90.19 100.43 90.19 100.43 94.03 106.72 94.03 106.72 95.81 98.6 95.81\"\/><path class=\"cls-2\" d=\"M323.42,182.73l2.5,5h-2.11l-2.42-4.82h-2.75v4.82h-1.8V175.52h5.35c2.12,0,3.92,1.13,3.92,3.64a3.38,3.38,0,0,1-2.69,3.57m-1.23-5.49h-3.55v3.92h3.55a1.83,1.83,0,0,0,2.07-1.95A1.87,1.87,0,0,0,322.19,177.24Z\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M344.78,187.9a5.62,5.62,0,0,1-4.34-2l1.31-1.27a4.46,4.46,0,0,0,3.17,1.45c1.71,0,2.52-.59,2.52-1.78,0-.94-.71-1.41-2.75-2-2.58-.77-3.81-1.41-3.81-3.59s1.78-3.39,4-3.39a5.49,5.49,0,0,1,4,1.65l-1.29,1.31a3.72,3.72,0,0,0-2.84-1.17c-1.43,0-2,.7-2,1.52s.56,1.27,2.67,1.9c2.4.73,3.9,1.5,3.9,3.67s-1.39,3.69-4.51,3.69\" transform=\"translate(-195.34 -91.9)\"\/><rect class=\"cls-2\" x=\"168.97\" y=\"83.62\" width=\"1.83\" height=\"12.19\"\/><polyline class=\"cls-2\" points=\"190.86 85.41 190.86 95.81 189.03 95.81 189.03 85.41 185.48 85.41 185.48 83.62 194.41 83.62 194.41 85.41 190.86 85.41\"\/><path class=\"cls-2\" d=\"M409.68,182.89v4.82h-1.83v-4.82l-4.37-7.37h2.14l1.9,3.36c.42.75,1,2,1.25,2.42.21-.45.82-1.62,1.25-2.4l1.92-3.38h2.11l-4.37,7.37\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M209.23,166.54c-1.65,0-3.4.07-5.27.21s-3.47.22-4.82.22a10.29,10.29,0,0,1-1.23-.11.85.85,0,0,1-.78-1,1.82,1.82,0,0,1,.78-1.34,7.61,7.61,0,0,1,3.36-1.12,10.57,10.57,0,0,0,1.8-.4,3.9,3.9,0,0,0,1.62-1,5.1,5.1,0,0,0,1.17-2.07,12.59,12.59,0,0,0,.45-3.81V103.45a1.25,1.25,0,0,0-.78-1.18,6.51,6.51,0,0,0-2-.56c-.78-.11-1.61-.19-2.47-.23s-1.66-.09-2.4-.17a24,24,0,0,1-2.64-.39c-.48-.11-.72-.46-.72-1.06a1.28,1.28,0,0,1,.5-1.07,3.31,3.31,0,0,1,1.18-.56,8.77,8.77,0,0,1,1.39-.22c.49,0,.92-.06,1.3-.06H209.9c2.77,0,5.55-.11,8.36-.32s6-.33,9.59-.33a59.2,59.2,0,0,1,16.6,2.25A37.59,37.59,0,0,1,258,106.49a33,33,0,0,1,9.15,12A41.56,41.56,0,0,1,270.47,136a26.62,26.62,0,0,1-2.75,11.87,31.24,31.24,0,0,1-7.46,9.75,35.74,35.74,0,0,1-11,6.55,37.65,37.65,0,0,1-13.52,2.41H209.23m6.7-14a9.85,9.85,0,0,0,1.23,5,10.8,10.8,0,0,0,3.26,3.53,14.35,14.35,0,0,0,4.61,2.08,20.9,20.9,0,0,0,5.29.67,24.77,24.77,0,0,0,5.28-.67,35,35,0,0,0,6.29-2.08,33.76,33.76,0,0,0,6.52-3.75,28.47,28.47,0,0,0,5.85-5.66,27.32,27.32,0,0,0,4.16-7.73A30.16,30.16,0,0,0,260,133.81a32.74,32.74,0,0,0-1.57-10.42,30.29,30.29,0,0,0-10.51-14.78,40.37,40.37,0,0,0-7.36-4.48,36.47,36.47,0,0,0-15.18-3.48,32.4,32.4,0,0,0-5.4.34,9.18,9.18,0,0,0-2.81.84,2,2,0,0,0-1.07,1.17,5.21,5.21,0,0,0-.16,1.24Z\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M293.26,168.59a16.7,16.7,0,0,1-6.55-1.12,9.54,9.54,0,0,1-4.15-3.25,13.34,13.34,0,0,1-2.13-5,31.67,31.67,0,0,1-.61-6.51c0-1.71,0-3.62.05-5.71s.06-4.18.06-6.28,0-4.27.05-6.33,0-3.9,0-5.55a1.48,1.48,0,0,0-1.12-1.57c-.74-.22-1.45-.41-2.13-.56a25.41,25.41,0,0,1-2.68-.84.9.9,0,0,1-.68-.84.83.83,0,0,1,.79-.9,15.54,15.54,0,0,1,2-.11c.82,0,1.62,0,2.4.11s1.59.11,2.42.11,1.65,0,2.48-.11,1.65-.11,2.48-.11,1.22.15,1.41.45a3.44,3.44,0,0,1,.28,1.68q0,7.52-.1,15t-.11,15a6.37,6.37,0,0,0,2.34,5.32,10.27,10.27,0,0,0,6.49,1.85,23.47,23.47,0,0,0,7.32-.9,9.72,9.72,0,0,0,4-2.29,6.65,6.65,0,0,0,1.73-3.19,16.42,16.42,0,0,0,.39-3.48q0-6,.11-12t.11-12a1.87,1.87,0,0,0-.16-.78A1.37,1.37,0,0,0,309,128c-.41-.14-1-.31-1.74-.5s-1.79-.46-3.13-.84l-2-.67c-.86-.3-1.29-.67-1.29-1.12s.26-.62.78-.73a8.27,8.27,0,0,1,1.69-.17c1,0,1.92,0,2.85.11s1.89.11,2.86.11,2.23,0,3.31-.11,2.19-.11,3.32-.11a3.78,3.78,0,0,1,1.46.4q.9.39.9,2,0,8.52-.21,17t-.22,17c0,1.19.36,1.94,1.07,2.24a4.78,4.78,0,0,0,1.84.44c2.17,0,3.68,0,4.54.12s1.29.4,1.29,1a.86.86,0,0,1-.51.88,8.32,8.32,0,0,1-1.73.45c-4,.59-7.07,1.1-9.33,1.55a33,33,0,0,1-4.19.66c-.43,0-.68-.17-.76-.51a6.34,6.34,0,0,1-.11-1.28v-2.58q0-1.35-.78-1.35a3.56,3.56,0,0,0-1.9,1,39.16,39.16,0,0,1-3.2,2.29,24.56,24.56,0,0,1-4.59,2.33,16.09,16.09,0,0,1-6,1.05\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M335.66,102.77a4.11,4.11,0,0,0-2.75-4.54c-.71-.26-1.34-.47-1.91-.62a1,1,0,0,1-.83-1,.89.89,0,0,1,.56-.84,17.73,17.73,0,0,1,1.79-.73l7.65-2.91a2.13,2.13,0,0,1,.9-.22h1a1.21,1.21,0,0,1,.85.4,2.37,2.37,0,0,1,.4,1.62V140c0,1.2.33,1.79,1,1.79a8.77,8.77,0,0,0,1.74-.72c1-.49,2.18-1.12,3.53-1.91s2.78-1.66,4.31-2.63,2.93-1.91,4.2-2.81,2.33-1.7,3.19-2.4,1.29-1.26,1.29-1.63a2.27,2.27,0,0,0-.67-1.74,6.25,6.25,0,0,0-1.46-1c-.52-.26-1-.52-1.46-.78a1.21,1.21,0,0,1-.67-1.07.94.94,0,0,1,.51-.78,1.83,1.83,0,0,1,1.06-.34c1.2,0,2.56,0,4.09.11s3,.11,4.53.11,2.9,0,4.43-.11,2.86-.11,4-.11a4.54,4.54,0,0,1,1.45.23,1,1,0,0,1,.67,1.12,1.07,1.07,0,0,1-.61.84,8.2,8.2,0,0,1-1.51.72c-.6.23-1.22.43-1.85.62a14.73,14.73,0,0,0-1.51.5q-1.23.57-4.76,2.52c-2.36,1.31-4.78,2.71-7.29,4.2s-4.72,2.89-6.66,4.2S352,141,352,141.33a1.39,1.39,0,0,0,.34,1,7.48,7.48,0,0,0,.56.61l19.37,17.58a13.69,13.69,0,0,0,3.3,2.35c1.09.52,2,.95,2.86,1.29s1.48.61,2,.84.73.52.73.89c0,.75-1,1.12-2.91,1.12a37.34,37.34,0,0,1-3.92-.22q-2.13-.21-4.71-.21a41,41,0,0,0-4.25.21,36.41,36.41,0,0,1-4,.22,13.91,13.91,0,0,1-2.58-.17.88.88,0,0,1-.78-1,1.07,1.07,0,0,1,.89-1.06,17.89,17.89,0,0,1,2.35-.5,3.19,3.19,0,0,0,1.52-.56,1.25,1.25,0,0,0,.61-1c0-.38-.41-1-1.23-1.79l-16.91-16c-.45-.45-.79-.67-1-.67-.53,0-.78.19-.78.56v15.86a3.35,3.35,0,0,0,.83,2.63,4.42,4.42,0,0,0,1.63.95,15.92,15.92,0,0,0,2.29.61c.64.11,1,.43,1,.95s-.29.75-.84.9a7.21,7.21,0,0,1-1.74.22,30.82,30.82,0,0,1-3.82-.22,32,32,0,0,0-3.71-.21c-1.36,0-2.8.07-4.34.21s-2.78.22-3.75.22a11.78,11.78,0,0,1-1.63-.17c-.71-.11-1.06-.43-1.06-1a1.08,1.08,0,0,1,.56-1.07,7.66,7.66,0,0,1,1.46-.5c.74-.22,1.45-.41,2.12-.56a6.52,6.52,0,0,0,1.8-.67,2.78,2.78,0,0,0,1.17-1.35,7,7,0,0,0,.4-2.69V102.77\" transform=\"translate(-195.34 -91.9)\"\/><path class=\"cls-2\" d=\"M388.46,140.51a4.37,4.37,0,0,0-.22,1.57v2.36a38.67,38.67,0,0,0,.62,7,15.45,15.45,0,0,0,2.35,5.95,12.74,12.74,0,0,0,4.93,4.21,18.31,18.31,0,0,0,8.34,1.63,14.82,14.82,0,0,0,5-.67,9.66,9.66,0,0,0,2.8-1.51,10,10,0,0,0,1.57-1.57,1.56,1.56,0,0,1,1.23-.73c.67,0,1,.3,1,.89a5.49,5.49,0,0,1-.89,1.74,13.45,13.45,0,0,1-2.92,3,20.79,20.79,0,0,1-5.09,2.93,19.3,19.3,0,0,1-7.45,1.29q-9.3,0-14.36-6.11t-5.06-16.66a29,29,0,0,1,1.23-8.14,24.39,24.39,0,0,1,3.74-7.62,20.93,20.93,0,0,1,6.33-5.67,17.45,17.45,0,0,1,9.06-2.24,16.77,16.77,0,0,1,8.11,1.79,17,17,0,0,1,8.22,9.52,14.64,14.64,0,0,1,.9,4.47,3.66,3.66,0,0,1-.4,2.07c-.26.34-.87.51-1.84.51H388.46m10.71-3.35a49.26,49.26,0,0,0,5.94-.28,10,10,0,0,0,3.47-.95,3.38,3.38,0,0,0,1.63-1.68,7.22,7.22,0,0,0,.39-2.58,6.09,6.09,0,0,0-2.35-4.86,9,9,0,0,0-5.94-2,11.4,11.4,0,0,0-5.43,1.28,15,15,0,0,0-6.55,6.78,7.89,7.89,0,0,0-.9,3.24.7.7,0,0,0,.17.51,2.55,2.55,0,0,0,1.12.28c.63.07,1.6.13,2.91.16S396.78,137.16,399.17,137.16Z\" transform=\"translate(-195.34 -91.9)\"\/><\/svg>"

        }
    }
}
</script>

<style scoped>
.footer {
    background-color: #f1f1f5;
    font-family: "Montserrat", "sans-serif";
    font-size: 12px;
}

.footer h6 {
    font-size: 15px;
    margin-bottom: 20px;
    color: #1D222C;
}

.footer p {
    font-weight: 300;
    color: #353A50;
}

.footer a {
    color: #112C5A;
    font-weight: 400;
    transition: 0.3s;
}

.social-icon {
    font-size: 24px;
    margin-left: 5%;
    margin-right: 5%;
}

.footer a:hover {
    text-decoration: none;
    color: #37A5EB;
}

.footer .brand {
    font-weight: 500;
    text-transform: uppercase;
    color: #798399;
    letter-spacing: 0.5px;
    font-size: 14px;
}

.contact-icon {
    font-size: 18px;
    color: #353A50;
}

.contact-icon .material-design-icon svg {
    bottom: 1 !important;
}

.copyright {
    padding: 2%;
}

.copyright p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500 !important;
    margin-bottom: 0;
    color: #7A859C;
}

</style>
