<template>
<b-row no-gutters>
    <b-col cols="3" class="scroll-spy-col">
        <b-list-group v-scroll-spy-active v-scroll-spy-link tag="ul" class="article-scroll-menu">
            <b-list-group-item v-for="(title, index) in titles" :key="index" tag="li" class="article-scroll-menu-item">
                <a>{{ title }}</a>
            </b-list-group-item>
        </b-list-group>
    </b-col>
    <b-col cols="9">
        <div v-scroll-spy="{data: 'section', offset: 80}" class="article-scroll-content">
            <div>
                <h1>Being Emotional</h1>
                <p>It seems silly, perhaps, to think of trying to find your emotional sides. In fact, it’s probably not lost but only hidden. But because, often, there is such a tendency to avoid or suppress anything that might bring about some emotional vulnerability, we think it's important to inform students about how that might impact your lives and your campus.</p>
            </div>
            <div>
                <h4>EMOTIONAL?</h4>
                <p>When everyone seems to be so focused on being successful and confident, it’s hard not to follow that current. But then...where do you tend to put your emotions?</p>
                <p>and what happens when they are pushed so far below the surface that even you don't know where they are anymore?</p>
            </div>
            <div>
                <h4>Has the word "emotional" come to mean something negative for students? Do you try to make sure that you don’t "get emotional"?</h4>
                <p>If so, you may want to consider the implications of this. Emotions don't go away simply because they are not expressed. Quite often, problems with depression, anxiety, and substance abuse often have their origin in unexpressed emotions.</p>
                <ul>
                    <li>Identify somebody you trust and be yourself.</li>
                    <li>Emotions don't define who you are; they allow you to connect with others you care about.</li>
                </ul>
                <p>Keep in mind that sadness, confusion, fear, and anger are as legitimate as excitement, joy, confidence, and satisfaction.</p>
                <p>There are certainly times when it may be wise to not let your struggles show openly. Are there times that it is just as wise to reach out and share what you're going through?</p>
                <ul>
                    <li>Give yourself the support that you may need.</li>
                    <li>Give your friends the opportunity to be kind and show they care.</li>
                </ul>
                <br>
                <p><i>© 2007.  Gary D. Glass, PhD.  <br>LifeShops Outreach Tools. (Used by Permission)</i></p>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleBeingEmotional',
    components: {

    },
    data() {
        return {
            section: 0,
                titles: [
                    'Being Emotional',
                    'Emotional?',
                    'Has the word "emotional" come to mean something negative for students? Do you try to make sure that you don’t "get emotional"?',
                ]

        }
    }
}
</script>

<style scoped>

</style>
