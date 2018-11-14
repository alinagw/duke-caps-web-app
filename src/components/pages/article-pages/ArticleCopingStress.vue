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
                <h1>Coping With Critical Incident Stress</h1>
            </div>
            <div>
                <h3>Signs And Symptoms</h3>
                <p>You may have experienced a traumatic event or a critical incident. The reactions you have to these abnormal events or incidents are normal and can overwhelm your natural ability to cope. Even though the event may be over, you may now be experiencing, or may experience later, some strong physical, cognitive, emotional, or behavioral reactions. It is very common, in fact quite normal, for people to experience emotional aftershocks when they have passed through a horrible event.</p>
                <p>Sometimes the emotional aftershocks (or stress reactions) appear immediately after the traumatic event. Sometimes they may appear a few hours or a few days later. And, in some cases, weeks or months may pass before the stress reactions appear.</p>
                <p>The signs and symptoms of a stress reaction may last a few days, a few weeks, or a few months and occasionally longer depending on the severity of the traumatic event. Critical incidents can also be exacerbated by lived experiences in which you have been the target of bias or discrimination. With understanding and the support of loved ones, the stress reactions can pass more quickly. Occasionally, the traumatic event is so painful that professional assistance from a counselor may be necessary. Needing assistance does not imply craziness or weakness. It simply indicates that the particular event was just too powerful for you to manage alone.</p>
            </div>
            <div>
                <h4>Physical</h4>
                <ul>
                    <li>Chills</li>
                    <li>Nausea</li>
                    <li>Thirst</li>
                    <li>Fatigue</li>
                    <li>Fainting</li>
                    <li>Lightheadedness</li>
                    <li>Twitches</li>
                    <li>Vomiting</li>
                    <li>Dizziness</li>
                    <li>Weakness</li>
                    <li>Chest Pain</li>
                    <li>Headaches</li>
                    <li>Elevated Blood Pressure</li>
                    <li>Rapid Heart Rate</li>
                    <li>Muscle Tremors</li>
                    <li>Teeth Grinding</li>
                    <li>Visual Difficulties</li>
                    <li>Profuse Sweating</li>
                    <li>Difficulty Breathing</li>
                    <li>Exhaustion</li>
                    <li>Digestive Problems</li>
                    <li>Reduced Coordination</li>
                    <li>Muscle Aches</li>
                </ul>
            </div>
            <div>
                <h4>Cognitive</h4>
                <ul>
                    <li>Confusion</li>
                    <li>Nightmares</li>
                    <li>Uncertainty</li>
                    <li>Hypervigilance</li>
                    <li>Suspiciousness</li>
                    <li>Intrusive Images</li>
                    <li>Blaming Others</li>
                    <li>Poor Problem Solving</li>
                    <li>Poor Abstract Thinking</li>
                    <li>Poor Attention</li>
                    <li>Poor Decision Making</li>
                    <li>Poor Concentration</li>
                    <li>Poor Memory</li>
                    <li>Disorientation of Time, Place, Person, or Situation</li>
                    <li>Difficulty Identifying Objects or People</li>
                    <li>Heightened or Lowered Alertness</li>
                    <li>Increased or Decreased Awareness of Surroundings</li>
                    <li>Homicidal or Suicidal Thoughts</li>
                    <li>Flashbacks</li>
                    <li>Amnesia for Incident</li>
                    <li>Self-Blame</li>
                    <li>Slowed Learning Speed</li>
                    <li>Decreased Self-Awareness</li>
                    <li>Distorted Thinking</li>
                </ul>
            </div>
            <div>
                <h4>Emotional</h4>
                <ul>
                    <li>Fear</li>
                    <li>Guilt</li>
                    <li>Greif</li>
                    <li>Panic</li>
                    <li>Denial</li>
                    <li>Anxiety</li>
                    <li>Agitation</li>
                    <li>Irritability</li>
                    <li>Depression</li>
                    <li>Intense Anger</li>
                    <li>Apprehension</li>
                    <li>Shock</li>
                    <li>Feeling Overwhelmed</li>
                    <li>Loss of Emotional Control</li>
                    <li>Heightened Emotional Responses</li>
                    <li>Numbing</li>
                    <li>Helplessness</li>
                    <li>Hopelessness</li>
                </ul>
            </div>
            <div>
                <h4>Behavioral</h4>
                <ul>
                    <li>Withdrawal</li>
                    <li>Antisocial Acts</li>
                    <li>Inability to Rest</li>
                    <li>Intensified Pacing</li>
                    <li>Erratic Movements</li>
                    <li>Alcohol Consumption</li>
                    <li>Drug Use</li>
                    <li>Change in Social Contact</li>
                    <li>Change in Speech Patterns</li>
                    <li>Change in Activity</li>
                    <li>Hyperalert to Environment</li>
                    <li>Change in Communications</li>
                    <li>Emotional Outbursts</li>
                    <li>Loss or Increase of Appetite</li>
                    <li>Changes in Sexual Desire or Functioning</li>
                    <li>Insomnia and then Hypersomnia</li>
                    <li>Strong Startle Responses</li>
                    <li>Avoidance</li>
                    <li>Aggressiveness</li>
                    <li>Increased Smoking</li>
                    <li>Unusual Behaviors</li>
                    <li>Self-Injury</li>
                </ul>
                <br>
            </div>
            <div>
                <h3>Coping With Critical Incident Stress</h3>
                <ul>
                    <li>Be gentle and patient with yourself.</li>
                    <li>Give yourself permission to feel rotten.</li>
                    <li>Do things that feel good to you.</li>
                    <li>Focus on the incident as a moment in time, not something that defines who you are. Keep your life as normal as possible.</li>
                    <li>Structure your time – keep busy.</li>
                    <li>Make as many small, daily decisions as possible, which will give you a feeling of control over your life (e.g., if someone asks you what you want to eat – answer them even if you’re not sure).</li>
                    <li>Do not make any big life changes. Spend time with others.</li>
                    <li>Seek out spiritual or cultural support.</li>
                    <li>Talk to people – talking is the most healing medicine.</li>
                    <li>Realize those around you are under stress.</li>
                    <li>Help others as much as possible by sharing feelings and checking out how they're doing.</li>
                    <li>Be aware of numbing the pain with overuse of drugs or alcohol; you don’t need to complicate this with a substance abuse problem. Avoid hazardous activities.</li>
                    <li>Avoid sugar and caffeine.</li>
                    <li>Drink plenty of water or other non-caffeinated, low-sugar liquids.</li>
                    <li>Supplement your diet with vitamin C, vitamin B2, vitamin B6, calcium, and magnesium. Eat healthy foods (e.g., fruits, vegetables, beans, high fiber, and high protein).</li>
                    <li>Avoid media coverage of the event, as it may exacerbate existing symptoms.</li>
                    <li>Within the first 24-48 hours, periods of strenuous physical exercise alternated with relaxation will alleviate some of the physical reactions.</li>
                    <li>Keep a journal.</li>
                    <li>Listen to soothing music.</li>
                    <li>Surround yourself with pleasant smells such as chamomile, lavender, and eucalyptus. Use relaxation strategies such as meditation or deep breathing.</li>
                    <li>Get a massage.</li>
                </ul>
            </div>
        </div>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'ArticleCopingStress',
    components: {

    },
    data() {
        return {
            section: 0,
                titles: [
                    'Coping With Critical Incident Stress',
                    'Signs And Symptoms',
                    'Physical',
                    'Cognitive',
                    'Emotional',
                    'Behavioral',
                    'Coping With Critical Incident Stress',
                ]
        }
    }
}
</script>

<style scoped>

</style>
