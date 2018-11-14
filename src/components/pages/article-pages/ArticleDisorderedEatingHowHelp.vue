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
                    <h1>Disordered Eating: How To Help?</h1>
                </div>
                <div>
                    <h4>Let Them Know They're Not Alone</h4>
                    <p>Often, individuals struggling with disordered eating carry a strong sense of shame about their struggle. They, strive to keep their difficulty a secret. Also, there is a strong belief, often accurately so, that others will not understand the struggle they have with eating and food.  Therefore, individuals who struggle with disordered eating often feel terribly alone.  Even if they have friends, the eating issues consume so much of their life that there's a big part of them that few, if any people, even know exists. and this is very, very lonely.  So, the first thing to do as an ally to someone struggling with disordered eating is to assure the friend or loved one that they are not alone.  The best way to convey this is to listen.  Let them know that, if they want or need to just talk out some of their fears, hurt, or even anger, that you will be there so they can have someone to say these things out loud to.   It may not seem like much, but there is a big difference between having all sorts of painful and confusing feelings swimming around inside and having them uttered out loud where someone else hears them.  It is not the response that helps so much as the fact that someone hears.  When someone hears, one of the most painful aspects of struggling with disordered eating is diminished: feeling alone.</p>
                </div>
                <div>
                    <h4>Encourage Them to Seek Help</h4>
                    <p>In helping someone struggling with disordered eating issues, it's often important to first know the ways in which you cannot help.  If you find yourself as the only person that is consistently there to help, you are likely assuming more roles than you have sufficient strength and understanding to really give the person struggling what she (or he) needs.  In sharing your support, it's important to also share your limitations. Emphasize that your support is one important aspect of their healing, but that others are also needed. Because a defining feature of any struggle with disordered eating issues is a reduction of the person into one dimension, it is important the healing occur at the various levels of the person’s life which have been neglected as a result of the disordered eating. Each friend or loved one in a person's life probably meets different needs and highlights different qualities in that person's life.  So, gradually, helping the person struggling to realize that trusting others (at a pace that feels safe) is as important as your support. Usually personal and professional help is needed. A mental health professional, a physician, and a nutritionist are typically involved in a professional team approach, each with expertise to address the forgotten or neglected dimensions of the intricate human being who is struggling.</p>
                </div>
                <div>
                    <h4>Be Yourself</h4>
                    <p>They are just two simple but very important words: Be Yourself.  The first word is critical because often loved ones of someone struggling with disordered eating become frustrated  because they want to DO something to make things better.  However, it's who you are that matters more than what you can actually do.  If you are a friend, a parent, a roommate, a romantic partner, or a teacher, be who you are with them instead of trying to do things for them.  Often, individuals who are struggling with disordered eating become frustrated because loved ones trying to help end up approaching them more like therapists or physicians or nutritionists rather than the close personal connection that they are. It's important to resist the inclination to analyze, interpret, or direct the behaviors of the person who is struggling.  Often those trying to help feel the urge to say things like, "I think you do this because of the way." or "There are serious medical repercussions that you are bringing on to yourself when you." or "You need to eat more of." However well intentioned, such statements are seldom helpful because none of these are within the role that you are most needed for: a loved one who loves and listens., Remember, it's most important to be a source of support and not a source of suggestions.</p>
                    <p>It is okay to acknowledge the full range of your feelings, not just the "positive" ones like loving and caring and patient.   Sometimes you will feel anger, fear or frustration and it is okay to acknowledge these.  It seems scary to think of telling someone who seems so fragile that you are angry or frustrated because you don't want to hurt him (or her).  Of course, there are times that a person is too fragile to hear these things and you need to use the best judgment you have.  Generally speaking, however, you play an important role when you can be genuinely loving and frustrated, genuinely caring and angry.  The reason that this is so important is that most people who struggle with disordered eating have entered a world where most things are EITHER/OR.  They have forgotten that people can be loving and frustrated at the same time.  So, when they see their loved ones able to be complex, to carry some seemingly contradictory feelings, it helps them see that they too can be complex individuals rather than the single dimension-being that disordered eating creates.</p>
                    <p>So, in the end, being helpful to someone struggling with disordered eating is, ultimately,  just being a genuine person in such a way that shows them it's okay for them to be who they genuinely are right now: someone struggling; someone needing to know it's okay to need support and get it from those who care.</p>
                    <br>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ArticleDisorderedEatingHowHelp',
    components: {

    },
    data() {
        return {
            section: 0,
            titles: [
            'Disordered Eating: How To Help?',
            'Let Them Know They’re Not Alone',
            'Encourage Them to Seek Help',
            'Be Yourself',
        }
    }
}
</script>

<style scoped>

</style>
