import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/yoga.css"
import yg1 from "../asset/yg1.png"
import yg2 from "../asset/yg2.png"
import ReactPlayer from 'react-player'

const Yoga = () => {
  return (
    <div className='y-container'>
      <div className='ycont-1'>
        <h1>Yoga For Different Age Groups</h1>
    <p>Yoga is considered the new age mantra for good health. It’s a trend that everyone around the world is talking about. People have had first hand experiences about its benefits and are now trying out different forms of yoga. The last decade has revolutionised the world’s perspective about yoga. The reason behind this shift is because yoga brings in varied benefits for everyone. Not just adults, yoga today is being taught to young kids and even senior citizens, to help them overcome different issues.

Yoga helps in holistic development and wellbeing. Everything gets covered, right from physical, to mental, to emotional and spiritual health. The recent pandemic has shifted everyone’s focus on health and immunity. Yoga is practiced worldwide to help people cope with this sudden change and come to terms with the new normal. Meditation and breathing are also an important component of yoga that helps the mind think clearly and to look at things with a fresh eye. It helps bring balance into our lives and helps us find joy in the little moments.
<div className='imgyg'>
      <img src={yg1} alt="" />
      <img src={yg2} alt="" />
    </div>
</p>
<p>Here is how yoga helps different age groups cope with their physical and mental problems:</p>

  <p><b>1.Kids:</b> The pandemic has had a huge impact on kids. It has taken away their natural instinct of being care free and impulsive. While being mindful about their actions they are now constantly facing anxiety and fear. Yoga is now used by parents and even schools to help kids channelise pent up energy and help them connect and express their emotions. Since yoga isn't competitive it doesn't pressurise the child, instead in yoga the child learns to listen to his/ her body, that practice is key to do better and also to accept their body's limitations. Encourage your kids to practice yoga as an early start leads to a healthy future. Partner poses are great for parent and child bonding. Learning together, supporting one and another while doing some fun postures helps strengthen the connection of love and trust between them.</p>
  <p><b>2.Pre-Teens and Teens:</b> This age group is facing more complicated issues than the young kids. The negativity and fear in their surrounding while their personalities are been moulded is making them vary about every situation in life. There is so much of uncertainty everywhere which is leading to self-doubt. Yoga helps them connect with their body and breath. They learn about self-acceptance and self-love. They are able to maintain their mental and emotional balance despite the sudden uncontrollable changes happening in their environment.</p>
  <p><b>3.Adults :</b> Life has gone completely out of control for this category. No adult on earth ever imagined their life the way it is currently. Coping with the loss of loved ones, losing jobs, not being able to visit their work space, connecting with the world from their homes, handling daily household chores, as well as looking after their child's education and entertainment, life has thrown everyone's plan for a toss. Yoga helps people accept things which are beyond their control. The breathing exercises in yoga contribute majorly towards helping people face reality with a calm and controlled attitude. Yoga helps in overcoming anxiety, fear and depressions which has been a huge concern in current times.</p>
  <p><b>4.Senior Citizens:</b> This is the most affected age group. Majority lives were lost in the age of 60 years and above. It has been proven with time that yoga can help in immunity and longitivtiy. Old age comes with a lot of physical and emotional issues, and yoga has an answer to most of these issues through its poses and breath work.</p>
  <p>Numerous studies have shown the benefits of Yoga. Practicing Yoga on a daily basis increases mindfulness and has a positive impact on all areas of a person's life. It rejuvenates, restores health, strengthens, empowers and the list just goes on. Yoga can be gentle as well as challenging and is not competitive. Anyone can practice yoga irrespective of age or size. Yoga today can easily be modified for maximum benefit and as per an individual's comfort level, so just find your style and what works best for you. Add yoga to your family's wellness routine to bond with them and to reap its benefits together. Spend quality time with loved ones strengthening relationships and bringing positive energy in to your life and home.</p>
</div>


  <div className='ycont-2'>
      <h1>Some videos that help you for Yoga</h1>
        <div className='ycon2-content'>
          <div className='cnt1'>
            <ReactPlayer controls={true} url='https://youtu.be/149Iac5fmoE?si=kfrmbamFowGXzh-X' height='300px' width='450px' />
          </div>
          <div className='cnt2'>
            <ReactPlayer controls={true} url='https://youtu.be/laIWV6qJWbk?si=DS9NB53UEIEfVaZ7' height='300px' width='450px' />
          </div>
          <div className='cnt3'>
            <ReactPlayer controls={true} url='https://youtu.be/6UnBHVf_HVg?si=esrF0mhiA8nJAi5C' height='300px' width='450px' />
          </div>

          <div className='cnt1'>
        <ReactPlayer controls={true} url='https://youtu.be/T9vQlk2QVU4?si=dAN7rfrL__q2Wq-T' height='300px' width='450px'/>
          </div>
        <div className='cnt2'>
        <ReactPlayer controls={true} url='https://youtu.be/cMfChJLqma4?si=rcGuFwP-YSyJjOyK' height='300px' width='450px'/>   
        </div>
        <div className='cnt3'>
        <ReactPlayer controls={true} url='https://youtu.be/brjAjq4zEIE?si=de_At30pveRBrpSj' height='300px' width='450px'/>   
        </div>
        </div>
      <p>
      "Discover a curated collection of enriching yoga videos designed to guide you on a journey of holistic well-being. From beginner-friendly sequences to advanced practices, these videos cater to all levels of experience. Immerse yourself in the calming and rejuvenating world of yoga, exploring diverse styles, breathing techniques, and mindfulness practices. Each video offers expert guidance, ensuring proper form and alignment while emphasizing the profound physical and mental benefits of yoga. Whether you're seeking relaxation, flexibility, or a mindful workout, these videos are your companion for fostering balance, strength, and tranquility in your yoga practice."
      </p>


      </div>    
      
      
      
      
      </div>
  )
}

export default Yoga