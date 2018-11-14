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
                    <h1>Parenting From A Distance</h1>
                </div>
                <div>
                    <h4>A Guide for Parents of College Students</h4>
                    <p>The years that your child attends college away from home are often as much a growing experience for parents as they are for the college student. For some parents, it's a somewhat familiar process because their child has already gained experience being away from home. For others, it's a very different experience of learning to let go while still finding ways to stay connected. Regardless of your experience up to this point, parenting college students from a distance comes with both rewards of seeing your teenagers continue their development into full adulthood and challenges of trying to support them from a distance through their difficult times. This page is offered to help you better understand some of the steps along the way and to give you some suggestions on how to navigate these exciting years.</p>
                    <p>At CAPS, we often see students when they are struggling and their struggles are located somewhere in a wide continuum from simply trying to adjust to college life on one end to facing quite serious developmental or psychological challenges on the other end.  Regardless of how severe their struggles might be, your role as a parent remains important, and you can play a significant role in helping them navigate through the various dimensions related to restoring their strength and sense of clarity.</p>
                </div>
                <div>
                    <h4>Remember Who You Are</h4>
                    <p>As absurd as this suggestion might sound, it's actually a rather complex issue. On the most obvious level, you continue to be a primary source of support for your child. Reminding the student that you care, unconditionally, and that you are available when they are struggling is important. However, there are often issues that emerge that make it difficult for the student to see you in that light.</p>
                </div>
                <div>
                    <h4>They Are Afraid to Disappoint You</h4>
                    <p>Students are often hesitant to reach out to their parents or even let them know when they may be struggling out of a fear that they will disappoint you.  Sometimes, they view one or both parents as having higher standards than they can maintain, themselves. Other times, they feel that family members or even community members are so excited about the success they've experienced so far, they simply don't want to let loved ones down.  In either case, many of today's college students are reluctant to inform their parents when they are going through a psychologically difficult time.  Encouragement from mom and/or dad to not be afraid of disappointing can help keep important lines of communication open.  Help them remember who you are: A parent, whose love is greater than your expectations.</p>
                </div>
                <div>
                    <h4>They Want to Protect You</h4>
                    <p>Often, students may refrain from letting parents know about a troubling time or an episode with a psychological problem because they wish to protect you from the hurt, confusion, and worry that they assume you'll feel. They are usually correct in their assumption that you'll feel these things.  What they usually fail to consider is your resilience and willingness to endure these feelings for the sake of being able to support them. Clarifications from parents on this issue can be very helpful: Yes, it would be upsetting, but I can handle that and I want to if that means being there for you! Help them remember who you are: A parent, whose caring concern is a source of both hurt and strength.</p>
                </div>
                <div>
                    <h4>Remember What You’ve Done</h4>
                    <p>In simplest terms, you have done a good job in raising the student that has earned admission to Duke University. You have taught them values, including a strong work ethic.  You have shown them decision making. You have encouraged an exploration of career planning, and you have introduced notions of success that you hope they incorporate in their college careers. All of the successful work you have done as a parent up to this point grants you the opportunity to trust your child to navigate the challenges of college life.  With that trust, you can allow yourself to limit the degree to which you continue to hold the reins in the college student’s life.  When they are struggling, however, your reflex may be to take over. While sometimes, a strong decision on your part may still be necessary, most of the time you can parent from a distance by keeping a few suggestions in mind.</p>
                </div>
                <div>
                    <h4>What You Can Do</h4>
                    <p>Rather than giving solutions to your child, help them think through their dilemmas and improve their problem solving skills.</p>
                    <p>Replace <i>"You should've..."</i> with <i>"What would help you to.."</i><br> Replace <i>"Why don't you just..."</i> with <i>"What is keeping you from..."</i></p>
                    <p>Remember that "just listening" is often the best thing you can do when your child is distraught about something. Often, the fundamental problem is that they feel alone in their struggle; having someone just be willing to listen to that struggle helps more than you would expect (and more than you can see when you hang up the phone). Often, students feel great after an emotional phone call, and the parents are the only ones still worried!</p>
                    <p>Encourage them to utilize the resources available on campus. Whether your child is dealing with health issues, psychological concerns, cross-cultural challenges, academic difficulties, or career indecision, there are offices on campus that can be important sources of support and information.  A helpful information pool which lists such resources is DukeReach.</p>
                    <p>Find ways of getting support yourself with the uneasiness parents feel when their child is far from home - from your spouse, a family member, or a friend, particularly people whose children have attended college in the US.</p>
                </div>
                <div>
                    <h4>Consult with CAPS Staff Members</h4>
                    <p>We are available for consultation to help you support your student. Whether you need help in encouraging your child to seek services or need help understanding the issues causing you concern, CAPS reserves times for staff members to provide consultation.</p>
                    <p>If your child is currently being seen at CAPS for services, we cannot provide any information regarding their status without his or her permission because maintaining confidentiality of our services is legally required. However, we can offer suggestions about talking with your child in a manner that respects their privacy but opens possibilities for more collaboration with parents in providing support. Please call (919) 660-1000, and ask to speak to one of our staff members for consultation.</p> 
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ArticleParentingDistance',
    components: {

    },
    data() {
        return {
            section: 0,
            titles: [
            'Parenting From A Distance',
            'A Guide for Parents of College Students',
            'Remember Who You Are',
            'They Are Afraid to Disappoint You',
            'They Want to Protect You',
            'Remember What You’ve Done',
            'What You Can Do',
            'Consult with CAPS Staff Members',
            ]
        }
    }
}
</script>

<style scoped>

</style>
