import React from 'react'
import {Link} from 'react-router-dom'
import "../Css/Home.css"
import Sunita from "../asset/sunita.jpg"
import ReactPlayer from 'react-player'
const Home = () => {
  return (
    <div className='h-container'>
      <div className='h-cont1'>
        <div className='s-img'>
          <img src={Sunita} alt="" />
        </div>
        <div className='s-content'>
          <h1>Hi, Sunita Sharma</h1>
          <p>A heartfelt welcome to our wellness haven! We're delighted you've joined us on this journey toward a healthier, happier you. At 65, this space is tailored just for you—offering insights on staying active, relishing nourishing meals, and fostering a positive mindset. Think of us as your digital wellness companion, ready to share advice, encouragement, and a dose of inspiration. So, settle in, sip on your favorite beverage, and let's explore the possibilities together. Your well-being is our priority, and we're here to support you at every turn. Here's to a journey filled with joy, vitality, and well-deserved self-care!</p>
        </div>
      </div>
      <div className='h-cont2'>
        <h1>
          Improve Your Health,<br />
          Improve Your Life
        </h1>
        {/* <p>Elevate your overall well-being and witness a profound transformation in your life by taking proactive steps to enhance your health. Embrace a journey of self-improvement, where prioritizing your physical, mental, and emotional health becomes the key to unlocking a more fulfilling and vibrant life. Through mindful choices, positive habits, and a commitment to self-care, you pave the way for lasting improvements that extend beyond the realm of health, influencing every aspect of your existence. Seize the opportunity to cultivate a life that radiates vitality, resilience, and joy, as you embark on a path of continuous betterment and personal growth.</p> */}
        <p>"Boost your life by boosting your health! Take small steps towards a healthier you, and watch positive changes unfold in every aspect of your life. Prioritize self-care, embrace positive habits, and enjoy a more vibrant and fulfilling journey. Your well-being is the key to unlocking a happier and healthier life!"</p>
         <Link className='readm' to="/Blogs">Read more</Link> 
      </div>
      <div className='h-cont3'>
      <h1>
      Nourish Your Body & Soul
      </h1>
      <p>"Fuel your well-being with wholesome choices that delight both body and soul. Each bite is a celebration of health and joy, bringing harmony to mind and body. Explore nutrient-rich meals for a journey of nourishment and vitality, one delicious bite at a time!"</p>
    <div className='hcon3-content'>
        <div className='cnt1'>
            <h4>How to Change Your Eating Habits</h4>
        </div>
        <div className='cnt2'>
        <h4>Don’t Be Afraid of the Scale!</h4>
        </div>
        <div className='cnt3'>
        <h4>The 3 Best Podcasts for Intuitive Eating</h4>
        </div>
    </div>
      <Link className='readm1' to="/Food">Read more</Link> 
      </div>
 <div className='h-cont4'>
    <h1>
      Exercises and Yoga
    </h1>
    <p>"Stay active and centered with a blend of exercises and yoga. Enhance your physical strength and flexibility through targeted workouts, while finding inner balance and tranquility with the ancient practice of yoga. This dynamic duo supports your overall well-being, offering a holistic approach to a healthier, more harmonious lifestyle."</p>
    <div className='hcon4-content'>
        <div className='cnt1'>
            <h4>Daily Exercises</h4>
        </div>
        <div className='cnt2'>
        <h4>Gym</h4>
        </div>
        <div className='cnt3'>
        <h4>Morning Yoga</h4>
        </div>
        <div className='cnt4'>
        <h4>Meditation</h4>
        </div>
        </div>
        <Link className='readm2' to="/Exercise">Read more</Link> 
 </div>

 <div className='h-cont5'>
    <h1>
      Music
    </h1>
    <p>"Improve your health through the power of music. Explore melodies that lift your spirits, reduce stress, and enhance overall well-being. Whether it's soothing tunes for relaxation or upbeat rhythms for exercise, let music be a therapeutic companion on your journey to a healthier and happier you."</p>
    <div className='hcon5-content'>
        <div className='cnt1'>
        <ReactPlayer controls={true} url='https://youtu.be/U0ZHqU4uT48?si=5b7QBkR16i3eHCae' height='300px' width='450px'/>
          </div>
        <div className='cnt2'>
        <ReactPlayer controls={true} url='https://youtu.be/IPjePMvBXE0?si=z9PIZGaKDBYDVsiY' height='300px' width='450px'/>
            
        </div>
        <div className='cnt3'>
        <ReactPlayer controls={true} url='https://youtu.be/Wvzw24sZfqc?si=F8qav6jEnSHdz9_E' height='300px' width='450px'/>   
        </div>
    </div>
    <Link className='readm5' to="/Music">Read more</Link> 
 </div>

  
 <div className='h-cont6'>
    <p>Embarking on the journey to a healthier and more fulfilling life requires a comprehensive and holistic approach that addresses various facets of well-being. Begin by incorporating a regimen of exercises and yoga into your routine, fostering physical strength, flexibility, and inner harmony. Simultaneously, prioritize the nourishment of your body and soul through mindful food choices, embracing a rich palette of nutrient-dense delights that promote vitality and joy.

Augmenting this holistic lifestyle is the transformative influence of music, a powerful tool for reducing stress and enhancing overall health. Whether it's the soothing melodies for relaxation or the energizing beats for invigorating workouts, music becomes a therapeutic companion in your quest for well-being.

By weaving together these elements—exercise, yoga, nourishing food, and the harmonious notes of music—you construct a vibrant tapestry of health that transcends the physical and extends into the realms of mental and emotional wellness. This integrated and balanced approach not only improves your health but becomes a catalyst for a profound transformation, shaping a life that is not just healthy but also deeply fulfilling and joyous.</p>
   </div>
      
































    </div>
  )
}

export default Home