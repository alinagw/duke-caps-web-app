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
                    <h1>Grief And Loss</h1>
                    <p>At some point in our lives we all experience loss, and with it a time of grief and mourning. Whether through the death of a loved one, divorce or relationship breakup, loss of physical mobility due to illness, loss of a sense of home due to geographic relocation, losses are a part of life. Understanding these emotions is important to moving on.</p>
                    <p>At some point in our lives most of us will experience a loss.  Loss may occur through the death of a loved one, a divorce or relationship break, a loss of physical mobility due to illness, or a loss of a sense of “home” due to geographic relocation.  Losses are a part of life.  It is hard to go through life without loss and many of us might say that our lives have deepened because of the experience of loss.  But whether we experience a deepening or not, most of us will experience a time of grief or mourning.</p>
                </div>
                <div>
                    <h4>What might occur during a time of grief?</h4>
                    <p>All of us grow up and live in the context of a community.  Our communities, families, and cultures often play a great part in how we learn to express grief.  Grief is often experienced as a host of many different emotions; sadness, anger, or happiness surrounding remembered times.  In addition, there may be complicated feelings of guilt or remorse surrounding times of conflict. Sleep and appetite may also be disrupted during times of grief or mourning.  Many people may experience a numb feeling in the initial days and weeks of loss, with strong feelings emerging weeks or months following the loss. What is important to know and remember is that there is no right or wrong way to grieve. While there are common elements in the grief process, we all experience grief differently. In addition to these reactions previously listed, below are some additional reactions that may occur during a time of grief.</p>
                </div>
                <div>
                    <h4>Emotional Reactions</h4>
                    <ul>
                        <li>Depressed mood</li>
                        <li>Panic and anxiety</li>
                        <li>Fear of death</li>
                        <li>Loneliness</li>
                        <li>Tearfulness, crying</li>
                        <li>Relief</li>
                    </ul>
                </div>
                <div>
                    <h4>Physical Reactions</h4>
                    <ul>
                        <li>Exaggerated startle response</li>
                        <li>Increased physical illness</li>
                        <li>Fatigue</li>
                    </ul>
                </div>
                <div>
                    <h4>Behavioral Reactions</h4>
                    <ul>
                        <li>Withdrawal from others</li>
                        <li>Increased irritation with others</li>
                        <li>Difficulty with focus or concentration</li>
                        <li>Increased attachment to friends and/or family</li>
                        <li>Increased use of alcohol or other substances</li>
                        <li>Loss of pleasure in once pleasurable activities</li>
                    </ul>
                    <p>What is important to know and remember is that there is no right or wrong way to grieve. While there are common elements in the grief process, we all experience grief differently. Some people describe grief like waves that wash over them at unexpected times; others have noted that it feels like they are going around in circles, re-experiencing emotions that they thought they were finished with. What may be helpful to keep in mind is that the waves will come and then they will subside. And while it might feel like you are walking in circles, you are actually going somewhere. Perhaps the picture of a spiral staircase will be helpful in this process.</p>
                </div>
                <div>
                    <h4>Self-Care Suggestions</h4>
                    <p>Many communities or cultures create rituals to facilitate the grief process when someone dies. These often involve the honoring of the deceased while also providing a source of support for those who are grieving the loss of the loved family/community member. Rituals can be a very important part of a healing process. Some losses, such as loss of one’s home through geographic location, may not have culturally established ways of honoring the importance of this loss through supportive rituals. It may be helpful to consider the creation of new rituals to mark the importance of the yearned for place. It is important to keep in mind that mourning is a process and takes time; time is something we often feel we do not have enough of as we move through our demanding days. Thus, you may find that you will need to be especially vigilant about checking in with yourself around how you are feeling. You may find the following self-care activities helpful as you go through a difficult time of loss.</p>
                    <ul>
                        <li>Stay in touch with close friends and family. Let them know how you are doing in your day-to-day life. Let them know it is ok to talk about the loss with you.</li>
                        <li>Be mindful of the fact that you may not be at 100% for a while. Be patient with yourself. You may not be able to perform at the level you are used to, but know that this is not permanent, and you will recapture this in time. Get plenty of rest and be mindful of the need to eat, even if your appetite is minimal.</li>
                        <li>Some people find it helpful to read about the grief process; some keep a journal of their thoughts and feelings. Some people find artwork helpful. If you find it difficult to talk to others about your experience, it may be helpful to turn to these avenues of expression.</li>
                        <li>Consider the possible benefits of a spiritual practice. Some people find prayer helpful; others may find a time in the day to meditate or visit a local garden. Some people find it helpful to seek spiritual guidance through a member of the clergy or a spiritual advisor.</li>
                        <li>Consider the creation of healing rituals at times that may be especially difficult. Some people find the first anniversary of their loss as an especially difficult time. As this anniversary approaches you may find it helpful to speak to someone about the loss. As you consider the supportive resources available to you with family and friends, you might also consider the following community resources:</li>
                        <ul>
                            <li>Counseling and Psychological Resources (CAPS), 660-1000. CAPS’ staff are available to meet with students to provide support and education around the grief process.</li>
                            <li>Duke Chapel’s Religious Life Staff, 684-2572. Protestant, Catholic, Non-Denominational, Jewish, and Muslim faiths are represented among religious life staff.</li>
                            <li>Duke University Hospital Bereavement Services, 668-0923. Offering a variety of grief support groups.</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <h4>Additional Reading on Grief and Loss</h4>
                    <p><i>&emsp;&emsp;*&emsp;Colgrove, M., Bloomfield, H. & McWilliams, P. How to survive the loss of a love. New York: Bantam. 1976<br>
                        &emsp;&emsp;*&emsp;Kushner, H.S. When bad things happen to good people. Schocken Books, 1981.<br>
                        &emsp;&emsp;*&emsp;Tatelbaum, J.   The courage to grieve:  Creative living, recovery and growth through grief. Harper Books, 1980.<br>
                        &emsp;&emsp;*&emsp;Viorst, Judith.  Necessary Losses.  New York:  Fawcett Gold Medal.  1986<br>
                        &emsp;&emsp;*&emsp;Woslfert, Alan.  The Journey through grief.  Ft. Collins, CO:  Companion Press.  1997</i></p>
                    <br>
                    <p><i>By Libby Webb, M.S.W., LCSW</i></p>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ArticleGriefLoss',
    components: {

    },
    data() {
        return {
            section: 0,
                titles: [
                'Grief And Loss',
                'What might occur during a time of grief?',
                'Emotional Reactions',
                'Physical Reactions',
                'Behavioral Reactions',
                'Self-Care Suggestions',
                'Additional Reading on Grief and Loss',
                ]
        }
    }
}
</script>

<style scoped>

</style>
