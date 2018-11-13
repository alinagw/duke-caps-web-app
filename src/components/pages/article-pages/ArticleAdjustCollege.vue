<template>
<b-row no-gutters>
    <b-col cols="3">
        <b-list-group v-scroll-spy-active v-scroll-spy-link tag="ul" class="article-scroll-menu">
            <b-list-group-item v-for="(title, index) in titles" :key="index" tag="li" class="article-scroll-menu-item">
                <a>{{ title }}</a>
            </b-list-group-item>
        </b-list-group>
    </b-col>
    <b-col cols="9">
        <div v-scroll-spy="{data: 'section', offset: 80}" class="article-scroll-content">
            <div>
                <h1>Adjusting to College</h1>
                <p>College is an exciting time of life, one filled with many profound transitions in preparation for an exciting and fulfilling future. One thing is likely true for all first year students: beginning college provides countless opportunities for growth, newly emerging challenges, and an accumulation of rich interpersonal experiences. Homesickness, academic challenges, difficulty fitting in, managing expectations, and many other issues can take their toll. Sometimes, the challenges of adjusting to college can be stressful and require new life strategies.</p>
            </div>
            <div>
                <h4>Changes you might notice:</h4>
                <p>Often, having a sense of what you’re going through is helps reduce the negative impact it can have on your life. Try to be mindful of the changes that will likely greet you, and develop some ideas about how to respond as you move through the first several weeks of life here at Duke. </p>
                <ul>
                    <li>Increased personal freedom and responsibility</li>
                    <li>Different kinds of academic strategies needed for success</li>
                    <li>Greater levels of difficulty of academic demands</li>
                    <li>Greater complexity of time-management responsibilities</li>
                    <li>New friendships at college that differ from high school friendships</li>
                    <li>Much more (or much less) racial and cultural diversity than what you experienced in your home community, or similar diversity but less socializing among people of different races</li>
                    <li>A greater range of values and morals in college than in your home community</li>
                    <li>Being surrounded by many peers who are also high achieving</li>
                    <li>Changing relationships with family members and friends from home</li>
                    <li>Maintaining a long-distance romantic relationship while beginning a new life that may not involve your partner from home</li>
                </ul>
                <p><strong>Keep this in mind:</strong> Struggling is not a sign of weakness or failure. In fact, struggling is usually the first phase of developing a new strength or strategy for success and wisdom.</p>
            </div>
            <div>
                <h4>Helpful hints for adjusting to college:</h4>
                <p>Below are some helpful hints in moving through the adjustment to college life:</p>
                <ol>
                    <li>Reach out to others. Start conversations and trust the process of forming new friendships.</li>
                    <li>Stay healthy and educated about how to maximize all aspects of your health.</li>
                    <li>Become aware of the many activities and organizations that you can join.</li>
                    <li>Adjust your expectations if things are not working out as you planned. Perhaps, what you planned wasn’t going to offer as much as what is actually happening!</li>
                    <li>Make use of the services and resources to keep you on track academically. Avoid the common mistake of avoiding help just to prove you don’t need help. At this phase in your life, not using available resources is likely to prove a much more costly than simply needing assistance from time to time.</li>
                    <li>Connect with the team of support in your residence halls.</li>
                    <li>Get support from a counselor with expertise in college student development. That’s where we, here at CAPS, come in. Whether your struggle is something you’ve been facing since before you came to Duke or something that has emerged as you’ve been adjusting to college life, meeting with a counselor is an effective way of getting through the challenging time and continuing toward a successful and fulfilling career at Duke and after you graduate.</li>
                </ol>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleAdjustCollege',
    components: {

    },
    data() {
        return {
            section: 0,
            titles: [
                'Adjusting to College',
                'Changes to Notice',
                'Helpful Hints for the Transition'
            ]
        }
    }
}
</script>

<style scoped>

</style>