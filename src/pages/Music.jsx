import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/music.css"
import mus1 from "../asset/music/mus1.png"
import mus2 from "../asset/music/mus2.png"
import mus3 from "../asset/music/mus3.png"
import mus4 from "../asset/music/mus4.png"
import mus5 from "../asset/music/mus5.png"
import mus6 from "../asset/music/mus6.png"
import mus7 from "../asset/music/mus7.png"
import mus8 from "../asset/music/mus8.png"
import mus9 from "../asset/music/mus9.png"
import mus10 from "../asset/music/mus10.png"
import mus11 from "../asset/music/mus11.png"
import mus12 from "../asset/music/mus12.png"

import ReactPlayer from 'react-player'

const Music = () => {
  return (
    <div className='m-container'>
      <div className='mcont-1'>
        <h1> Music and health</h1>
        <p>Music is a fundamental attribute of the human species. Virtually all cultures, from the most primitive to the most advanced, make music. It's been true through history, and it's true throughout an individual's lifespan. In tune or not, we humans sing and hum; in time or not, we clap and sway; in step or not, we dance and bounce.

          The human brain and nervous system are hard-wired to distinguish music from noise and to respond to rhythm and repetition, tones, and tunes. Is this a biologic accident, or does it serve a purpose? It's not possible to say. Still, a varied group of studies suggests that music may enhance human health and performance.</p>

        <div className='imgem'>
          <img src={mus1} alt="" />
          <img src={mus2} alt="" />

        </div>
        <h1>Music and the brain</h1>
        <p>Like any sound, music arrives at the ear in the form of sound waves. The external ear collects sound waves, and the ear canal funnels them to the eardrum. As the waves strike the eardrum, they cause it to vibrate. The vibrations are relayed along the chain of tiny bones in the middle ear until they reach the third bone, the stapes, which connects to the cochlea.
          The cochlea is a busy little world of its own. It is filled with fluid that surrounds some 10,000 to 15,000 tiny hair cells, or cilia. Vibrations of the stapes send fluid waves through the spiral-shaped cochlea. The fluid waves produce swaying movements of the hair cells. In turn, these cells release chemical neurotransmitters that activate the auditory nerve, sending miniature electric currents to the auditory cortex in the temporal lobe of the brain.</p>
        <p> From there, things get even more complicated. Studies using MRI and positron emission tomography (PET) scans suggest that nerve networks in different parts of the brain bear primary responsibility for decoding and interpreting various properties of music. For example, a small area in the right temporal lobe is essential to perceive pitch, which forms the basis of melody (patterns of pitch over time), chords (several pitches that sound at the same time), and harmony (two or more melodies at the same time). Another nearby center is responsible for decoding timbre, the quality that allows the brain to distinguish between different instruments that are playing the same note. A different part of the brain, the cerebellum, processes rhythm, and the frontal lobes interpret the emotional content of music. And music that's powerful enough to be "spine-tingling" can light up the brain's "reward center," much like pleasurable stimuli ranging from alcohol to chocolate.
          Although every healthy human brain can perform all the complex tasks needed to perceive music, musicians' brains are, so to speak, more finely attuned to these tasks. At the other end of the spectrum, patients with brain damage may display remarkable defects in musicality; the noted neurologist and writer Dr. Oliver Sacks discusses many fascinating varieties of amusia in his book Musicophilia.

          The neurobiology of music is a highly specialized field. But music also has major effects on many aspects of health, ranging from memory and mood to cardiovascular function and athletic performance.</p>

        <h1>Music and the mind</h1>
        <p>The most highly publicized mental influence of music is the "Mozart effect." Struck by the observation that many musicians have unusual mathematical ability, researchers at the University of California, Irvine, investigated how listening to music affects cognitive function in general, and spatial-temporal reasoning in particular. In their first study, they administered standard IQ test questions to three groups of college students, comparing those who had spent 10 minutes listening to a Mozart piano sonata with a group that had been listening to a relaxation tape and one that had been waiting in silence. Mozart was the winner, consistently boosting test scores. Next, the investigators checked to see if the effect was specific to classical music or if any form of music would enhance mental performance. They compared Mozart's music with repetitive music by Philip Glass; again, Mozart seemed to help, improving spatial reasoning as measured by complex paper cutting and folding tasks and short-term memory as measured by a 16-item test.</p>
        <p>How might music enhance cognitive performance? It's not clear, but the researchers speculated that listening to music helps organize the firing of nerve cells in the right half of the cerebral cortex, the part of the brain responsible for higher functions. According to this construct, music — or at least some forms of music — acts as an "exercise" that warms up selected brain cells, allowing them to process information more efficiently. It's an interesting theory, but before you rush out to stock up on recordings of Mozart's music, you should know that even in the original research, the "Mozart effect" was modest (8 to 9 IQ points) and temporary (15 minutes). And in reviewing 16 studies of Mozart's music and human cognitive function, a Harvard psychologist concluded that the effect was even smaller, amounting to no more than 2.1 IQ points. It's a sour note, but it's hardly a requiem for the theory that music may boost cognitive function. In fact, the divergent results should serve as a prelude to additional research. And even if listening to music turns out to have little long-term effect on cognition, a 2010 review reported that learning to play an instrument may enhance the brain's ability to master tasks involving language skills, memory, and attention.</p>

        <h1>Music and stress</h1>
        <p>In every era of human history and in every society around the globe, music has allowed people to express their feelings and communicate with others. More than simply expressing emotions, music can alter them; as British dramatist William Congreve put it in 1697, "Music has charms to soothe a savage breast."

          Few things are more stressful than illness and surgery. Can music reduce stress in these difficult circumstances? Several trials show it can.
          A study from New York examined how music affects surgical patients. Forty cataract patients with an average age of 74 volunteered for the trial. Half were randomly assigned to receive ordinary care; the others got the same care but also listened to music of their choice through headphones before, during, and immediately after the operations. Before surgery, the patients in both groups had similar blood pressures; a week before the operations, the average was 129/82 millimeters of mercury (mm Hg). The average blood pressure in both groups rose to 159/92 just before surgery, and in both groups, the average heart rate jumped by 17 beats per minute. But the patients surrounded by silence remained hypertensive throughout the operation, while the pressures of those who listened to music came down rapidly and stayed down into the recovery room, where the average reduction was an impressive 35 mm Hg systolic (the top number) and 24 mm Hg diastolic (the bottom number). The listeners also reported that they felt calmer and better during the operation. The ophthalmologic surgeons had no problems communicating with their patients over the sound of the music, but the researchers didn't ask the doctors if their patients' improved blood pressure readings made them more relaxed as they did their work. Earlier research, though, found that surgeons showed fewer signs of stress and demonstrated improved performance while listening to self-selected music.
          A study of 80 patients undergoing urologic surgery under spinal anesthesia found that music can decrease the need for supplementary intravenous sedation. In this trial, patients were able to control the amount of sedative they received during their operation. Patients who were randomly assigned to listen to music needed less calming medication than those assigned to listen to white noise or to the chatter and clatter of the operating room itself.</p>
        <p>In the cataract and urologic surgery studies, the patients were awake during their operations. But a study of 10 critically ill postoperative patients reported that music can reduce the stress response even when patients are not conscious. All the patients were receiving the powerful intravenous sedative propofol, so they could be maintained on breathing machines in the intensive care unit (ICU). Half the patients were randomly assigned to wear headphones that played slow movements from Mozart piano sonatas, while the other half wore headphones that did not play music. Nurses who didn't know which patients were hearing music reported that those who heard music required significantly less propofol to maintain deep sedation than those patients wearing silent headphones. The music recipients also had lower blood pressures and heart rates as well as lower blood levels of the stress hormone adrenaline and the inflammation-promoting cytokine interleukin-6.
          Neither of the operating room studies specified the type of music used, while the ICU trial used slow classical music. An Italian study of 24 healthy volunteers, half of whom were proficient musicians, found that tempo is important. Slow or meditative music produced a relaxing effect; faster tempos produced arousal, but immediately after the upbeat music stopped, the subjects' heart rates and blood pressures came down to below their usual levels, indicating relaxation.</p>

        <h1>Music and mood</h1>
        <p>Soothing jangled nerves is one thing; raising sagging spirits, another. Bright, cheerful music can make people of all ages feel happy, energetic, and alert, and music may even has a role in lifting the mood of people with depressive illnesses. Bach may never replace Prozac, but when it comes to depression, even a little help strikes a welcome chord.</p>

        <h1>Music and movement</h1>
        <p>Falling is a serious medical problem, particularly for people over 65; in fact, one of every three senior citizens suffers at least one fall during the course of a year. Can music help? An older study says it can. The subjects were 134 men and women 65 and older who were at risk of falling but who were free of major neurologic and orthopedic problems that would limit walking. Half the volunteers were randomly assigned to a program that trained them to walk and perform various movements in time to music, while the other people continued their usual activities. At the end of six months, the "dancers" exhibited better gait and balance than their peers — and they also experienced 54% fewer falls. Similar programs of movement to music appear to improve the mobility of patients with Parkinson's disease.</p>
      </div>
      <div className='mcont-1'>
        <h1>
          How Listening to Music Can Have Psychological Benefits
        </h1>
        <p>Listening to music can be entertaining, and some research suggests that it might even make you healthier. Music can be a source of pleasure and contentment, but there are many other psychological benefits as well. Music can relax the mind, energize the body, and even help people better manage pain.
          The notion that music can influence your thoughts, feelings, and behaviors probably does not come as much of a surprise. If you've ever felt pumped up while listening to your favorite fast-paced rock anthem or been moved to tears by a tender live performance, then you easily understand the power of music to impact moods and even inspire action.
          The psychological effects of music can be powerful and wide-ranging. Music therapy is an intervention sometimes used to promote emotional health, help patients cope with stress, and boost psychological well-being. Some research even suggests that your taste in music can provide insight into different aspects of your personality.</p>

        <h1>1.Music Can Improve Cognitive Performance</h1>
        <img src={mus3} alt="" />
        <p>
          Research suggests that background music, or music that is played while the listener is primarily focused on another activity, can improve performance on cognitive tasks in older adults. One study found that playing more upbeat music led to improvements in processing speed, while both upbeat and downbeat music led to benefits in memory.1

          So the next time you are working on a task, consider turning on a little music in the background if you are looking for a boost in your mental performance. Consider choosing instrumental tracks rather than those with complex lyrics, which might end up being more distracting.</p>

        <h1>2.Music Can Reduce Stress</h1>
        <img src={mus4} alt="" />
        <p>It has long been suggested that music can help reduce or manage stress. Consider the trend centered on meditative music created to soothe the mind and inducing relaxation.In one 2013 study, participants took part in one of three conditions before being exposed to a stressor and then taking a psychosocial stress test. Some participants listened to relaxing music, others listened to the sound of rippling water, and the rest received no auditory stimulation.

          The results suggested that listening to music had an impact on the human stress response, particularly the autonomic nervous system. Those who had listened to music tended to recover more quickly following a stressor.</p>

        <h1>3.Music Can Help You Eat Less</h1>
        <img src={mus5} alt="" />
        <p>One of the most surprising psychological benefits of music is that it might be a helpful weight-loss tool. If you are trying to lose weight, listening to mellow music and dimming the lights might help you achieve your goals.
          The researchers suggest that music and lighting help create a more relaxed setting. Since the participants were more relaxed and comfortable, they may have consumed their food more slowly and have been more aware of when they began to feel full.

          You might try putting this into practice by playing soft music at home while you eat dinner. By creating a relaxing setting, you may be more likely to eat slowly and, therefore, feel fuller sooner.</p>
        <h1>4.Music Can Improve Your Memory</h1>
        <img src={mus6} alt="" />
        <p>Lots of students enjoy listening to music while they study, but is that such a great idea? Some feel like listening to their favorite music as they study improves memory, while others contend that it simply serves as a pleasant distraction.

          Research suggests that it may help. But it depends upon a variety of factors, including the type of music, the listener's enjoyment of that music, and even how musically well-trained the listener may be.
          In one study, musically naive students learned better when listening to positive music, possibly because these songs elicited more positive emotions without interfering with memory formation.

          However, musically trained students tended to perform better on learning tests when they listened to neutral music, possibly because this type of music was less distracting and easier to ignore. If you tend to find yourself distracted by music, you may be better off learning in silence or with neutral tracks playing in the background.
        </p>

        <h1>5.Music Can Help Manage Pain</h1>
        <img src={mus7} alt="" />
        <p>Research has shown that music can be very helpful in the management of pain. One study of fibromyalgia patients found that those who listened to music for just one hour a day experienced a significant reduction in pain compared to those in a control group.At the end of the four-week study period, participants who had listened to music each day experienced significant reductions in feelings of pain and depression. Such results suggest that music therapy could be an important tool in the treatment of chronic pain.While listening to music at any point in time was effective, the researchers noted that listening to music pre-surgery resulted in better outcomes. The review looked at data from more than 7,000 patients and found that music listeners also required less medication to manage their pain.
          There was also a slightly greater, though not statistically significant, improvement in pain management results when patients were allowed to select their own music.</p>

        <h1>6.Music May Help You Sleep Better</h1>
        <img src={mus8} alt="" />
        <p>Insomnia is a serious problem that affects people of all age groups. While there are many approaches to treating this problem, research has demonstrated that listening to relaxing classical music can be a safe, effective, and affordable remedy.

          In a study looking at college students, participants listened to classical music, an audiobook, or nothing at all at bedtime for three weeks. Researchers assessed sleep quality both before and after the intervention.</p>

        <h1>7.Music Can Improve Motivation</h1>
        <img src={mus9} alt="" />
        <p>There is a good reason why you find it easier to exercise while you listen to music. Researchers have found that listening to fast-paced music motivates people to work out harder.

          One experiment designed to investigate this effect tasked 12 healthy male students with cycling on a stationary bike at self-paced speeds. On three different trials, the participants biked for 25 minutes at a time while listening to a playlist of six different popular songs of various tempos.Unknown to the listeners, the researchers made subtle differences to the music and then measured performance. The music was left at a normal speed, increased by 10%, or decreased by 10%.

          Speeding up the tracks resulted in increased performance in terms of distance covered, the speed of pedaling, and power exerted. Conversely, slowing down the music's tempo led to decreases in all of these variables.</p>

        <h1>8.Music Can Improve Mood</h1>
        <img src={mus10} alt="" />
        <p>Another of the science-backed benefits of music is that it just might make you happier.

          In one examination of the reasons why people listen to music, researchers discovered that music played an important role in relating arousal and mood. Participants rated music's ability to help them achieve a better mood and become more self-aware as two of the most important functions of music.Another study found that intentionally trying to boost moods by listening to positive music could have an impact within two weeks. Participants were instructed to purposefully attempt to improve their mood by listening to positive music each day for two weeks.

          Other participants listened to music but were not directed to become happier intentionally. When participants were later asked to describe their own levels of happiness, those who had intentionally tried to improve their moods reported feeling happier after just two weeks.</p>

        <h1>9.Music May Reduce Symptoms of Depression</h1>
        <img src={mus11} alt="" />
        <p>Researchers have also found that music therapy can be a safe and effective treatment for a variety of disorders, including depression.

          One study found that music therapy was a safe, low-risk way to reduce depression and anxiety in patients suffering from neurological conditions such as dementia, stroke, and Parkinson's disease.

          While music can certainly have an impact on mood, the type of music is also important. Classical and meditation music offer the greatest mood-boosting benefits, while heavy metal and techno music are ineffective and even detrimental.</p>

        <h1>10.Music Can Improve Endurance and Performance</h1>
        <img src={mus12} alt="" />
        <p>Another important psychological benefit of music lies in its ability to boost performance. While people have a preferred step frequency when walking and running, scientists have discovered that the addition of a strong, rhythmic beat, such as fast-paced musical track, could inspire people to pick up the pace.11

          Runners are not only able to run faster while listening to music; they also feel more motivated to stick with it and display greater endurance. The ideal tempo for workout music is somewhere between 125 and 140 beats per minute.So why does music boost workout performance? Listening to music while working out lowers a person's perception of exertion. You're working harder, but it doesn't seem like you're putting forth more effort.

          Because your attention is diverted by the music, you are less likely to notice the obvious signs of exertion such as increased respiration, sweating, and muscle soreness.</p>

        <h1>A Word From Healthcare</h1>
        <p>Music can inspire and entertain, but it also has powerful psychological effects that can improve your health and well-being.

          Instead of thinking of music as pure entertainment, consider some of the major mental benefits of incorporating music into your everyday life. You might find that you feel more motivated, happy, and relaxed as a result.</p>
      </div>

      <div className='mcont-2'>
        <h1>Some Music videos which can help to change your mood</h1>
        <div className='mcon2-content'>
          <div className='cnt1'>
            <ReactPlayer controls={true} url='https://youtu.be/IPjePMvBXE0?si=z9PIZGaKDBYDVsiY' height='300px' width='450px' />
          </div>
          <div className='cnt2'>
            <ReactPlayer controls={true} url='https://youtu.be/Wvzw24sZfqc?si=F8qav6jEnSHdz9_E' height='300px' width='450px' />
          </div>
          <div className='cnt3'>
            <ReactPlayer controls={true} url='https://youtu.be/U0ZHqU4uT48?si=5b7QBkR16i3eHCae' height='300px' width='450px' />
          </div>
        </div>

        <p>
          "Discover a curated collection of enriching yoga videos designed to guide you on a journey of holistic well-being. From beginner-friendly sequences to advanced practices, these videos cater to all levels of experience. Immerse yourself in the calming and rejuvenating world of yoga, exploring diverse styles, breathing techniques, and mindfulness practices. Each video offers expert guidance, ensuring proper form and alignment while emphasizing the profound physical and mental benefits of yoga. Whether you're seeking relaxation, flexibility, or a mindful workout, these videos are your companion for fostering balance, strength, and tranquility in your yoga practice."
        </p>
      </div>

    </div>
  )
}

export default Music