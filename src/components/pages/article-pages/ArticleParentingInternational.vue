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
                    <h1>Parenting International Students</h1>
                </div>
                <div>
                    <h4>Supporting Your Son or Daughter Through Difficult Times</h4>
                    <p>Being the parent of an international college student comes with both rewards and challenges. Among the challenges is trying to support your son or daughter through continued growth into full adulthood but doing this from a distance. This pamphlet is offered by Counseling and Psychological Services (CAPS) to help you better understand what we have to offer and to give you some suggestions on how to navigate these exciting years.</p>
                </div>
                <div>
                    <h4>What is Counseling?</h4>
                    <p>Although counseling is not a common practice in many countries and cultures, in the United States it is increasingly used as a process that is helpful for dealing with personal stress and life difficulties. Simply stated, counseling involves one person helping another person to better understand and solve some problem of difficult experiences. Family and friends provide a type of counseling, as do academic advisors, teachers, religious leaders, and many others. All of these can listen and provide suggestions and support that are helpful to students. However, counselors at CAPS differ from these others who may offer counseling because of our extensive training in the mental, emotional, and relationship dimensions of human experience.</p>
                </div>
                <div>
                    <h4>What Are Counselors?</h4>
                    <p>At CAPS, the staff consists of psychologists, social workers, and psychiatrists, all of whom provide the various counseling services of our center. (Psychiatrists are unique in that they are medical doctors who can also treat the physiological aspects of certain psychological or emotional problems.) As a group, we are described as “mental health” professionals. Here at CAPS, we work to educate ourselves about issues facing college students, and we also maintain awareness of the unique experiences of international students.</p>
                    <p>A counselor (or mental health professional) helps the student assess the situation and review the various options available. Mental Health professionals may also provide information that the student needs in order to resolve his or her problems. Most importantly, the counselor provides an experience that helps your son or daughter grow and heal from the many challenges that face college students.</p>
                </div>
                <div>
                    <h4>Why Would Your Son or Daughter Meet With a Counselor?</h4>
                    <p>To review the many reasons why students seek counseling at Duke, visit the CAPS website to understand the common experiences that your son or daughter may face. As an international student, your son or daughter may experience some challenges that are unique or more intense than students from the United States because they have the added pressure of adjusting to a new culture, language, and different academic environment. Just a few examples your son or daughter may encounter:</p>
                    <ul>
                        <li>Understanding and adjusting to U.S. culture and way of life</li>
                        <li>English Language difficulties</li>
                        <li>High academic pressures in very competitive environment</li>
                        <li>Self-esteem issue</li>
                        <li>Anxiety</li>
                        <li>Loneliness and social isolation</li>
                        <li>Visa and immigration issues</li>
                    </ul>
                    <p>At CAPS, we often see students when they are struggling, and their struggles are located somewhere in a wide range from simply adjusting to college life to facing quite serious developmental or psychological challenges. Sometimes, the problems students face are quite severe and involve medical factors. The staff at CAPS includes psychiatrists, medical doctors specially trained in medicine that addresses these problems.</p>
                    <p>Regardless of how severe these struggles might be, your role as a parent remains important, and you can play a significant part in helping them restore their strength and sense of clarity.</p>
                </div>
                <div>
                    <h4>Consult with CAPS Staff Members</h4>
                    <p>Sometimes, the issues facing your daughter or son may be unclear, but you know the issues are cause for concern. The staff at Counseling and Psychological Services is available for consultation to help you support your student. Whether you need help in providing encouragement to your son or daughter to seek services or need help understanding the issues causing you concern, CAPS reserves times for staff members to provide consultation. If your daughter or son is currently being seen at CAPS for services, we cannot provide any information because maintaining confidentiality of our services is legally required. However, we can offer suggestions about talking with your son or daughter in a manner that respects their privacy but opens possibilities for more collaboration with parents in providing support.</p>
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ArticleParentingInternational',
    components: {

    },
    data() {
        return {
            section: 0,
            titles: [
            'Parenting International Students',
            'Support Through Difficult Times',
            'What is Counseling?',
            'What Are Counselors?',
            'Why Would Your Son or Daughter Meet With a Counselor?',
            'Consult with CAPS Staff Members',
            ]
        }
    }
}
</script>

<style scoped>

</style>
