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
                <h1>Commited Relationships & Grad School</h1>
                <p>Maintaining a committed relationship while attending graduate or professional school can be complex and challenging. The reality is, your relationship is simultaneously a source of support and a source of demanding responsibilities. The tension between these two dimensions can pose some significant threats to a thriving relationship. To minimize these threats and actually grow closer during demanding times, it’s important to keep some main goals in mind.</p>
                <p>There is a challenging complexity to being in a committed relationship while attending Graduate School or a Professional School. At the most basic level, the challenge emerges from the reality that your relationship is, simultaneously a Source of Support and a Source of Demanding Responsibilities.</p>
                <p>The tension between these two dimensions can pose some significant threats to the thriving and surviving of your relationship. To minimize these threats and actually grow closer during the demanding time that graduate and professionals schools are part of your lives, it’s important to keep some main goals in mind.</p>
            </div>
            <div>
                <h4>Engage in Open and Honest Communication and Planning</h4>
                <p>To minimize problems and to enhance your relationship, communicate before and during challenging times. Communication, however, is not simply a matter of exchanging information (although that is an important part of a respectful relationship). Communication about one's feelings is also important. Letting your partner know the emotions you have about a situation, even one you may have agreed to accept, can be just as important as letting each other know what time you'll be home. In addition, communicating your sensitivity to your partner's thoughts and feelings, is also important. Otherwise, invisible resentment can start to accumulate and not get expressed until the situation does not seem to match the emotions at the time.</p>
                <p>Sometimes, simply communicating verbally isn't enough, especially given the busy life of being in graduate or professional school. Keeping a calendar or some other tool to help plan together, as much as possible, can help alleviate the strain that results when you made need to change some plans. This also helps acknowledge the disappointment, not to mention keep track of how often disappointments are happening.</p>
            </div>
            <div>
                <h4>Set Boundaries</h4>
                <p>Learn to recognize the appropriate times to set boundaries between your self and your program of study. Without such boundaries, any program can present enough demands to usurp all of your time, doing so in a way that appears absolutely necessary. Also, it is important to recognize the boundaries needed between yourself and your partner. As with any relationship, having each of you involved in other dimensions of your lives (including friends, hobbies, work or school) keeps the relationship from becoming too enmeshed, putting so much pressure on the relationship to maintain each person’s sense of worth and competence.</p>
            </div>
            <div>
                <h4>Remember to Negotiate</h4>
                <p>Acknowledge and plan for the unique demands of being in graduate level training. Because your partner will often need to compromise times he/she expected you to invest in your relationship, it is best to be aware of the situations that may require negotiation.</p>
                <ul>
                    <li>Irregular hours of school</li>
                    <li>Abrupt and/or intense academic demands and sudden changes in priorities</li>
                    <li>Un-anticipated work activities for professors</li>
                    <li>Unscheduled social activity with school peers needing to maintain a cohesive bond to support each other.</li>
                </ul>
                <p>This is a lot to expect from a partner or spouse without offering something to balance things out. When asking for your partner to make a sacrifice, offer when, specifically, you will be able to give something to the partner and your relationship to balance out the scales of compromise.</p>
            </div>
            <div>
                <h4>Know When To Re-Negotiate and Re-Assess</h4>
                <p>When unable to keep promises made in recent compromises, it becomes critical to collaboratively re-assess the boundaries that had been put in place. It also becomes critical to review the needs of the partner and the needs of the relationship when you feel you must re-negotiate something you had already agreed to do.</p>
            </div>
            <div>
                <h4>Attention and Support</h4>
                <p>Your partner may be having a hard time dealing with the many compromises made for the sake of your program demands. Acknowledge this out loud. Show an intentional and genuine interest in the emotions and activities of your partner’s life. Set time aside, with no material related to your program in sight, and ask about your partner’s day.</p>
            </div>
            <div>
                <h4>Affection</h4>
                <p>Affection in the context of a rushed pace or a momentary endearment can often feel like a token rather than a genuine investment back into a relationship that is running low on emotional fuel. If you have not enjoyed affection with your partner, “plan” some spontaneous affection. Almost by its very essence, affection requires some degree of spontaneity. However, the demands of graduate or professional study can leave you waiting much longer than you realize for "a good time" and it may require some planning on your part to be emotionally available, with enough energy, to express how you feel through affection. </p>
            </div>
            <div>
                <h4>Help with Domestic Needs and Personal Projects</h4>
                <p>There is often an imbalance in chores and household duties because the graduate student has such irregular demands. Rather than maintain the imbalance indefinitely, plan specific times when you can offer to assume the duties you often have to rely on your partner to assume.</p>
            </div>
            <div>
                <h4>Recognize and Talk Through Fear and Insecurity</h4>
                <p>Question automatic assumptions that you do not have enough time to fulfill your relationship needs. Sometimes, fear and insecurity about being in a competitive program is disguised as an overly conscientious work ethic. Question any perceived or assumed prohibition of vulnerabilities. Fears can emerge that having a relationship with its own needs may threaten your success. There may be a prevailing attitude in your program to re-enforce these fears. Work together with your partner to face the fears. The very person that may sometimes seem to threaten your success will likely provide you with the reassurance that you need to succeed.</p>
                <p>Graduate school and professional schools are challenging and rewarding experiences, contributing to your professional and your personal development. The same is true of your committed relationships. If you need support and want to attend to your relationships needs with professional guidance, feel free to call us at (919) 660-1000. CAPS offers assessment, individual or couples counseling, and relationship enhancement workshops. We want you to succeed, in all the domains of your life.</p>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleRelationshipsGradSchool',
    components: {

    },
    data() {
        return {
            section: 0,
                titles: [
                    'Commited Relationships & Grad School',
                    'Engage in Open and Honest Communication and Planning',
                    'Set Boundaries',
                    'Remember to Negotiate',
                    'Know When To Re-Negotiate and Re-Assess',
                    'Attention and Support',
                    'Affection',
                    'Help with Domestic Needs and Personal Projects',
                    'Recognize and Talk Through Fear and Insecurity',
                ]
        }
    }
}
</script>

<style scoped>

</style>
