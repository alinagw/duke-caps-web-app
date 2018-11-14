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
               <h1>Living Your Life-Values</h1>
            </div>
            <div>
               <h4>Your Map for Living</h4>
               <p>What guides you? What are your personal priorities that influence the decisions you make in your day-to-day life?</p>
               <p>Your personal priorities doesn't refer to your task list. It doesn't refer to the things you have to do, necessarily, such as study for an exam, work on a paper, or complete that task for the extra-curricular organization you lead. Your personal priorities are the larger truths that help you define any task as important to begin with.</p>
               <p>In other words, what are the things in life that you value enough that you want these values to guide your living?</p>
               <p>What we tend to see is that if you have a clearer sense of what your values area your personal priorities that clarity helps you live with a higher level of self-esteem, with a greater sense of fulfillment, and for the times that life becomes more challenging, a greater source of resilience.</p>
               <p>There are a number of ways to organize your personal values system and an almost infinite number of ways to define the different values. Regardless of how you might do that, it's important to consider three general steps in using values or personal priorities to guide your life:</p>
               <p>First, it is important to identify what matters to you and what are the terms or categories of this so you can have some language to explore your values. In other words, what would go on the list of your values, and how would you prioritize them?</p>
               <p>Second, it is important to explore the way you're actually living your life; how the decisions you make and the patterns of your investments reflect what is most meaningful to you. This is important because a flourishing life is one beyond mere awareness of one's values; a congruent expression of those things that are most important to you plays a big role in how satisfied you are with your life, how resilient you are in facing challenges, and how meaningful your life experiences are.</p>
               <p>Finally, it becomes important to assess what changes you may want to make in how you devote your time, energy, and creativity so that your day-to-day living is more in line with what you recognize as your</p>
               <p>personal priorities. Sometimes, this leads you to realize that your priorities have changed without you noticing, and that's okay. It simply cycles you back to the first step as you move through your life, continually discovering what matters most to you and how to make that your map for living.</p>
               <p><a href="https://www.lifevaluesinventory.org/" target="_blank">The Life Values Inventory</a> is one tool that has helped many people go through this process.</p>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleLivingLifeValues',
    components: {

    },
    data() {
            return {
                section: 0,
                titles: [
                    'Living Your Life Values',
                    'Your Map For Living',
                ]
            }
    }
}
</script>

<style scoped>

</style>
