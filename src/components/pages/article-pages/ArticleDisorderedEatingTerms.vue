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
                <h1>Disordered Eating - Terms And Diagnosis</h1>
                <p>A lot of terms are used among people who address eating related concerns. Those who are less familiar with the issues related to disordered eating may not immediately understand many of these terms.  This brief introduction to those terms will help you navigate information that you collect on eating disorders through those various resources you may have identified.</p>
            </div>
            <div>
                <h4>Binge Eating</h4>
                <p>A binge is defined as eating an amount of food that is definitely larger than most individuals would eat under similar circumstances.  Although a binge is defined as occurring within a specific period of time, it can occur in different places but still be part of the same binge episode.   For example, an individual may begin a binge in a grocery store or restaurant, and then still be on the binge upon returning home.  Another defining feature of a binge is that the eating is experienced as out of the person's control. While this usually means that an impulsive act takes place with no planning, there are times when the binge is planned because the urge originates and accumulates over a period of time when there is no access to food.  Once the eating begins, however, and during the anticipation of the episode, the inevitable and uncontrollable sensation still occurs.   If, for some reason the planned binge cannot occur (somebody stops by, for example), the urge becomes complicated by a lot of nervousness.   Immediately following the binge, there is a period of relief or even of feeling intensely satisfied.  However, this is typically followed by strong shame and feeling disgusted with one's self.   Because of this shame reaction, there is a wish and full intention to never behave in this manner again.  However, much of the binging is a reaction to a troubled self-image, so this reaction may actually play a role in the next binge occurring.  For many individuals, especially those who have been struggling for a long time with binging, depression eventually develops as the person realizes she/he has become trapped within a cruel binge-cycle.</p>
            </div>
            <div>
                <h4>Purging</h4>
                <p>A purge is defined as self-induced actions on the body with the intentional goal of avoiding the weight gain that is feared from having just eaten.   The most common form of purging is self-induced vomiting. The purge is usually experienced as an uncontrollable urge that comes from the fear of weight gain.   However, individuals who have been struggling with disordered eating for longer periods may have grown so accustomed to having the urge that they don't feel the urgency; rather the act of purging becomes a necessary or  matter-of-fact task that is decided upon almost automatically.   Phrases such as "taking care of it" or "dealing with it" or "getting rid of it" are often used to describe purging.</p>
                <p>Because disordered eating has become more widespread and most people immediately associate purging with disordered eating, there is often a great deal of shame associated with purging.   Persons struggling often report intense shame the first time they ever made themselves vomit and yet they still find themselves unable to refrain from doing it again when the emotional turmoil returns.</p>
            </div>
            <div>
                <h4>Diagnosis</h4>
                <p>A diagnosis is a name or term used by professionals in order to communicate with each other and organize the different problems experienced by all those they serve.  When certain patterns of problems begin to emerge in individuals, mental health professionals can recognize them when they occur in enough different people that it appears to be the same problem.  Sometimes, it feels helpful for the person with the problem to have a name for what they struggle with, as well.  However, having a diagnosis of an Eating Disorder does not mean you cannot overcome it.  It may make sense to view it as an illness because it helps to emphasize how important it is to get help to overcome it.  However, simply knowing what the name of a person's problem is does not solve it.  Therefore, it might be more helpful to focus less on the diagnosis or on whether a person "really has" an eating disorder.  In fact, it may be even more helpful to think less in terms of "an eating disorder" and more in terms of "disordered eating."   The reason for this shift is that people often become passive when they think of "having a disorder" and they come to view themselves as "defective"; if they think in terms of "disordered eating" they are dealing with a behavior, a set of actions and reactions to life's challenges.  From there it is easier to shift toward learning a new set of actions and reactions without the identity of a defective person.</p>
                <p>Nevertheless, it is unavoidable that most people struggling with disordered eating (either themselves or through someone they love who is struggling) will eventually come across diagnostic terms.  Therefore, we'd like to include some information so you know what these somewhat familiar terms actually refer to.</p>
            </div>
            <div>
                <h4>Anorexia (or Anorexia Nervosa)</h4>
                <p>The term Anorexia Nervosa is a diagnosis applied to an individual who meets very specific criteria. The defining feature of anorexia is that the individual refuses to maintain a minimally normal body weight. (Specifically, to be assigned a diagnosis of anorexia, an individual must be at 85% of their normal body weight or lower).  The person with anorexia or similar difficulties is extremely focused on a pursuit of thinness.   She (or he) is intensely afraid of gaining weight.  Much of the fear is linked to another defining feature of anorexia: a distorted view of how one's body actually is, perceiving fat where there is clear emaciation or viewing the less "thin" parts of their body as indicative that they are entirely fat. This perception keeps the need to lose weight or prevent weight gain in control of the individual’s priorities.  A final feature that defines anorexia as a diagnosis is (for women who have already begun having their menstrual period) an absence of at least 3 consecutive menses.</p>
                <p>There are many misconceptions around Anorexia, among the more common is that if a person does not employ self-induced vomiting, then they're "not anorexic."   In fact, these misconceptions are based on confusion between bulimia nervosa and anorexia nervosa.  Anorexia can be diagnosed if the individual uses purging methods to prevent weight gain (and these individuals often struggle with binge episodes which make the purging behaviors feel absolutely mandatory).  This is regarded as the Binge Eating/Purging Type of Anorexia.  Anorexia Nervosa can also be diagnosed even if the person never engages in purge behaviors, relying on a strict low calorie diet.  This is regarded as Anorexia Nervosa, Restricting Type.</p>
                <p>Another unfortunate misconception is that those suffering from Anorexia simply have a desirable level of self-discipline to not eat.  Sometimes, individuals with severe body image concerns will profess a wish that they could be anorexic.  The mechanism that maintains the behaviors associated with anorexia is not discipline.  It’s fear.  What those with such misconception-based envy don't realize is that they are also wishing for the extreme fear and painful confusion that comes from struggling with a completely kidnapped way of life that those with anorexia experience.</p>
            </div>
            <div>
                <h4>Bulimia Nervosa</h4>
                <p>There are two fundamental indicators needed for a formal diagnosis of Bulimia Nervosa:</p>
                <ol>
                    <li>Binge eating (defined as eating amounts of food that are clearly larger than what most folks would eat) with a "beyond control" quality to the eating episodes, and</li>
                    <li>A Behavior that aims to compensate for the expected weight gain that, naturally, would result from eating more than is usual.</li>
                </ol>
                <p>A problem in making the diagnosis of bulimia nervosa is that many people eat “more than usual” from time to time, yet they do not meet the criteria for a diagnosis of bulimia nervosa. For example, many people "binge" eat at holiday dinners. Even closer to "bulimic" behavior, many of us find ourselves eating more when we are feeling very down. Yet, we don't meet the criteria for a bulimia diagnosis. The difference between those of us with such common excessive-eating episodes and someone who has bulimia nervosa is that the latter binge-eat frequently (more than twice a week) and have lost control over their eating behaviors. For them, what we experience on occasion is more of an ongoing struggle.  Their lives typically begin to revolve around concerns about food. Often, they divide their days into ‘good' days when they have no desire to binge and ‘bad' days when the compulsion to binge becomes irresistible.  Before a person will be diagnosed with bulimia, she/he will have had at least an average of two binge-eating episodes a week for at least three months, and she/he will have experienced these eating episodes as uncontrollable (unable to stop even though she/he knows it's excessive eating). Additionally, a person struggling with bulimia regularly engages in either strict dieting (or simply not eating), excessive exercising between these binges episodes, self-induced vomiting, and/or use of  laxatives and diuretics to lose weight. All of these behaviors operate under a persistent concern with body shape and weight. Because of the awareness that these binge episodes are not normal, there is typically a great deal of shame that leads to keeping the difficulty a secret.</p>
            </div>
            <div>
                <h4>Disordered Eating Which Does Not Meet Diagnostic Criteria</h4>
                <p>Perhaps the single most important thing to keep in mind about the diagnoses of disordered eating is that anyone who is struggling to a degree that does not meet the criteria for a specific eating disorder is in a struggle that is as legitimate as any diagnosis could ever be.  Diagnostic criteria are constantly changing as mental health professionals learn more and more about the struggles we all face, and they are still learning about disordered eating.  Therefore, diagnostic criteria and terminology may also change. For example, there is a condition referred to as Binge Eating Disorder still undergoing research before being included as a formal diagnosis.  Binge Eating Disorder involves uncontrollable eating episodes but does not consistently involve a behavior to compensate.  This struggle impacts a great many people, a significant number of whom struggle with obesity.  These individuals often seek help  toward weight loss and the underlying issues leading to the frequent binges are not attended to because they’re not thought of has having disordered eating.</p>
                <p>Many individuals suffer from some level or type of eating behavior that is disrupting their lives.  They are struggling with a confusing problem that feels both absurd and easy to fix but carries an intensity and a depth that makes it hard to place aside.  For some, disordered eating is about a different kind of hunger… and for others, it’s about a painful sense of being too full of some of life’s vulnerabilities.  For others, it’s both.  Either way, the difficulty is real and the availability of help is there.</p>
                <br>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleDisorderedEating',
    components: {

    },
    data() {
        return {
            section: 0,
            titles: [
            'Disordered Eating - Terms And Diagnosis',
            'Binge Eating',
            'Purging',
            'Diagnosis',
            'Anorexia (or Anorexia Nervosa)',
            'Bulimia Nervosa',
            'Disordered Eating Which Does Not Meet Diagnostic Criteria',
            ]
        }
    }
}
</script>

<style scoped>

</style>
