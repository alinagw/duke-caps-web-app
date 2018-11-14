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
                    <h1>Antidepressant Medications Q & A</h1>
                    <p>Medicines most commonly prescribed to deal with emotional pain are called antidepressants, though they are used to treat many kinds of anxiety problems as well as depression. The idea of taking a medicine to help restore emotional balance is one that typically raises many questions for students. A few questions in particular come up frequently, so we've put together these answers as a starting point.</p>
                    <h3>Questions About Medications</h3>
                    <p><i>Antidepressants: Biological Treatment for Psychological Symptoms</i></p>
                </div>
                <div>
                    <h4>Introduction</h4>
                    <p>If you're suffering from psychological distress like anxiety or depression, it's possible that a medication might help you feel and function better. At CAPS, the medicines most commonly prescribed to deal with emotional pain are called antidepressants, even though they are used to treat many kinds of anxiety problems as well as depression. The idea of taking a medicine to help restore emotional balance is one that typically raises many questions for students. A few questions in particular come up frequently, so we've put together these answers as a starting point. To further explore this topic, we encourage you to talk to one of the counselors or doctors at CAPS.</p>
                </div>
                <div>
                    <h4>1. Why would taking a pill help the way I feel?</h4>
                    <p>Anxiety, sadness, and even depression are normal feelings that all of us have experienced for brief periods at one time or another. Usually we have an idea of what led to these feelings and what we can do to feel better. However, prolonged, more intensely down or anxious feelings are different from everyday sadness or anxiety, and medication can help with these symptoms. Often caused by changes in chemicals in the brain, these more tenacious problems sometimes make no "sense" to you. Even when you can identify a starting cause, the depression may get in the way of clear thinking and interfere with your ability to figure out coping strategies.</p>
                    <p>It may feel like nothing you try to do helps, or you may notice changes in yourself that you can't understand, such as problems with sleep or appetite, low energy, or frightening thoughts. It's also not normal for bad days to outnumber good ones for weeks or months on end.</p>
                    <p>Because depression and anxiety disorders are sometimes caused by biological changes in our body, a biological treatment, such as a pill, can be helpful. In some cases a biological treatment is absolutely necessary. Antidepressant medicines correct the chemical changes that lead some people to feel depressed or anxious.</p>
                </div>
                <div>
                    <h4>2. Why can’t I do it on my own?</h4>
                    <p>If you could just "snap out of it," you probably would have by now. Often students try hard to "get over" their unpleasant feelings before coming to CAPS. Medication is not the only treatment option: some kinds of depression and anxiety get better with counseling. Sometimes, however, the level of pain is high enough, or interferes enough with your ability to function in your daily life, that medications are especially needed. Just as people with high blood pressure can't simply "will" their blood pressure to go down to normal and have to take a pill to help it, people with certain kinds of emotional suffering need a pill to get back to normal.</p>
                    <p>That's not to say there aren't things you can do to make a big difference. Just as people with high blood pressure can make lifestyle and diet changes that help bring their blood pressure into normal range, so can people with depression or anxiety. A pill won't solve all of your problems, but it will help diminish the symptoms which interfere with your ability to work on them.</p>
                </div>
                <div>
                    <h4>3. How do these medicines work?</h4>
                    <p>The answer to this question is not entirely clear. The brain is a very complex organ and we are just beginning to understand how it malfunctions in anxiety states and depression. Having said that, it is clear that these medicines do work, and work very well.</p>
                    <p>Antidepressants adjust the brain's balance of neurotransmitters such as serotonin and norepinephrine. When these and other neurotransmitters get out of balance your brain doesn't function normally; the neurons become less responsive and less adaptive. This translates into symptoms such as changes in sleep, changes in your ability to concentrate on schoolwork, excessive worrying, panic attacks, changes in eating patterns, loss of interest and motivation, loss of pleasure in one's usual activities, feelings of hopelessness, thoughts about death, and even loss of interest in sex.</p>
                    <p>Once the medicines have corrected the imbalance of neurotransmitters, gradually over days to weeks the brain resumes its normal functioning. The neurons start responding normally and the depressive symptoms resolve. After a period of time on the medicines, usually six to twelve months, the brain regains its ability to maintain its healthy balance without the help of medication.</p>
                </div>
                <div>
                    <h4>4. What are the side effects?</h4>
                    <p>All medicines have the potential to cause side effects, but, fortunately, modern antidepressants don't cause major side effects in most people. Some people feel a little queasy the first couple days as they get used to the medicine. Some people feel the medicine wakes them up like a cup of coffee and can interfere with sleep if they take it late in the day while others feel it makes them a little sleepy so they take it at bedtime. Other possible but not too common side effects include vivid dreams, headaches, and increased sweating. Most of the newer antidepressants don't cause any significant change in weight.</p>
                    <p>Occasionally, an antidepressant can make a person feel restless, agitated or anxious. Very rarely, these feelings might trigger thoughts about harming oneself. It is very important that you call your doctor immediately if you experience these side-effects.</p>
                    <p>The most common side effect of some anti-depressants is a sexual side effect. It usually manifests as delayed orgasm in both men and women. Some women develop anorgasmia, the inability to have an orgasm, which can be very frustrating. In contrast, some male students find that mildly delayed orgasm improves their sexual function. Your doctor can suggest solutions for this particular problem, or discuss changing or stopping the medicine if you are troubled by sexual side effects.</p>
                    <p>All of the side-effects that can occur with antidepressants go away once you stop the medicine. There are no known long-term problems caused by these medicines.</p>
                </div>
                <div>
                    <h4>5. Are these medicines addictive?</h4>
                    <p>No. Because these medicines don't make you feel high and because their onset of action is over many days, they don't produce any psychological craving to take the drug. They also don't produce any physiological dependency. You can stop taking the drugs at any time. It's important to understand, though, that your risk of lapsing back into depression or anxiety is much greater if you don't stay on the medicines for several months.</p>
                    <p>Some students have physical discomfort if they stop some of these medicines too suddenly. You might feel dizzy, have minor visual changes, nausea, or fIu-like symptoms. These symptoms can usually be avoided by tapering the medicine slowly. If they do develop they are usually mild and fairly short-lived. If you have trouble with these symptoms talk with your doctor about a remedy.</p>
                </div>
                <div>
                    <h4>6. If I start one of these medicines do I have to take if for the rest of my life?</h4>
                    <p>No, but taking the medicine for several months will reduce your risk of relapsing back into a depressed or anxious state. Antidepressants take several weeks to start working, and once they've returned your brain chemistry to normal, it takes several months before your brain is able to maintain the restored balance on its own. The research shows that the longer a person stays on the medicine the less likely he or she is to redevelop depression. Current recommendations are to continue the medicine for six to twelve months after your symptoms are gone. Most people feel that if the medicine has been helpful and there are no troubling side-effects, then it's not a problem to continue taking it for this length of time. Obviously, if the medicine is not particularly helpful or you have side effects you don't like, the medicine can be stopped at any time.</p>
                    <p>The bottom line is that if an antidepressant works for you, you'll increase your chance of staying well if you stick with the medicine for six months or more.</p>
                </div>
                <div>
                    <h4>7. How do I know if it's working? What will I notice?</h4>
                    <p>Most antidepressant medications take two to four weeks to begin having their effects, although some people notice improved energy sooner. You can expect to feel less moody, and less tearful. Your concentration and memory should return to normal. You may also notice you're "back to your old self," enjoying the things you used to enjoy, and less preoccupied with negative thoughts. That does not mean you will feel happy all the time. These are not "happy pills" - they simply seek to return you to normal functioning, where you can feel the full range of human emotions rather than mainly sadness or anxiety.</p>
                    <p>Once you've started a medication, it's very important to meet regularly with your doctor to monitor your progress. As you start to feel better it may be hard to remember just how badly you felt, and an outside opinion may be especially helpful.</p>
                </div>
                <div>
                    <h4>8. Can I drink alcohol with it?</h4>
                    <p>Alcohol can interact with medicines in unpredictable ways, and different people react differently. If you drink alcohol while on antidepressants, you might get drunk much faster than without the medicine or the alcohol might interfere with the medicine's ability to help your symptoms. Driving after drinking is especially dangerous. Because these medicines need to be taken consistently-every day-to work, you can't stop the medicine for a day in anticipation of going out and having a drink.</p>
                    <p>Certain medicines may have more dangerous interactions with alcohol, so be sure to ask your doctor about the specific medicine you may be taking.</p>
                    <p>Keep in mind that alcohol is also a depressant, meaning it can make you feel worse whether or not you're taking a medication.</p>
                </div>
                <div>
                    <h4>9. Will it change my personality?</h4>
                    <p>If you are having trouble with depression or anxiety and you take an antidepressant, after a period of time you will feel "normal" again. Students often report feeling like their old selves again. If you have been depressed for a very long time, then perhaps this change could make you feel like your personality changed. Most students find they think more clearly and are better able to get their work done once their anxiety and depressive symptoms are successfully treated.</p>
                </div>
                <div>
                    <h4>10. How much does it cost? Is it covered by insurance?</h4>
                    <p>Most of these medicines are fairly expensive, costing from $70 to $100 per month. They are virtually always covered by insurance. The Duke Blue Cross plan pays 80% of medication costs, reducing the out of pocket expense to $14 to $20 per month. Other insurance plans may have insurance cards that allow you to get your medicine with just a small co-payment.</p>
                </div>
                <div>
                    <h4>Conclusion</h4>
                    <p>Depression and anxiety cause miserable symptoms, as uncomfortable as any physical pain. Although medicine is not always the answer to this kind of psychic pain,often it can be extraordinarily helpful. If you are struggling with anxiety or depression, you owe it to your self to talk to a professional about the option of medication. If it's appropriate for you and works for you, you will be amazed at the relief treatment can bring to your life.
                        <br><br>
                        <i>@ 2000, by Holly Rogers, M.D. and Doris Iarovici, M.D.</i></p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </template>

    <script>
    export default {
        name: 'ArticleAntiDepressants',
        components: {

        },
        data() {
            return {
                section: 0,
                titles: [
                'Antidepressant Medications Q & A',
                'Introduction',
                '1. Why would taking a pill help the way I feel?',
                '2. Why can’t I do it on my own?',
                '3. How do these medicines work?',
                '4. What are the side effects?',
                '5. Are these medicines addictive?',
                '6. If I start one of these medicines do I have to take if for the rest of my life?',
                '7. How do I know if it’s working? What will I notice?',
                '8. Can I drink alcohol with it?',
                '9. Will it change my personality?',
                '10. How much does it cost? Is it covered by insurance?',
                'Conclusion',
                ]
            }
        }
    }
    </script>

    <style scoped>

    </style>
