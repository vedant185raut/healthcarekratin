import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/exercise.css"
import ex1 from "../asset/ex1.png"
import ex2 from "../asset/ex2.png"
import ReactPlayer from 'react-player'
const Exercise = () => {
  return (
    <div className='e-container'>
      <div className='econt-1'>
        <h1>Sports and Exercise at Every Age</h1>
    <p>We all know that exercise is good for us. But it does more than just improve our physical fitness. It also reduces our risk of getting many diseases, such as cancer, heart disease, or diabetes. It helps reduce stress, helps us sleep better, and it improves our mental health. Because it does so much for us, it is important to exercise no matter what age you are. A lifelong exercise program is the surest way to help you live and thrive into old age</p>
    <div className='imgex1'>
      <img src={ex1} alt="" />
      <img src={ex2} alt="" />
    
    </div>
    <h1>Path to Improved Health</h1>
    <p>Exercise is good for you no matter how old you are. It helps children function better in school. It helps boost brain power as you age. It helps prevent falling when you are older. There is a place for exercise at every stage of a person’s life.</p>
    <p><b>Children –</b> Many kids get most of the exercise they need just by being kids. They run around, climb and play on a playground, play tag, and do many other activities. Make sure your child has plenty of opportunities to run, jump, and play every day. They should be getting at least 1 hour of physical activity each day.</p>
    <p><b>Teens –</b>A lot of teens get interested in playing sports. This could be for their school or through a recreation program. Encourage their participation so they can be active. If they don’t want to play an organized sport, they can ride bikes with friends or play football in the yard. As with younger children, give them opportunities to be active. Teens also need at least 1 hour of physical activity every day.</p>
    <p><b>20s –</b>When you’re in your 20s, your body is strong and resilient. This is the perfect time to build a foundation of fitness. Develop exercise as a habit. Make it a regular part of your life. That will make it easier to keep it up as you get older. Play sports with friends, such as tennis or racquetball. Go hiking or biking. Your options are endless. You should try to exercise at least 30 minutes a day, 5 days a week. Remember also that, as you age, you lose muscle and bone strength. So be sure to include strength training as part of your routine now. That way losing a little muscle mass down the road won’t hurt you. Aim to include muscle-strengthening exercises in your routine 2 to 3 days a week.</p>
    <p><b>30s –</b>In our 30s, our body first starts to lose muscle because of age. That makes weight training especially important during this time. Join a gym and start lifting weights. Or you can get some resistance bands and look up videos on the internet. Our bones start to weaken as we get older, too. This is a good time to start focusing on bone strengthening. Make sure weight-bearing activities are part of your routine. This could include brisk walking, jogging, or doing yoga. This is also a good time to experiment with different kinds of workouts. Doing something new helps you challenge new muscle groups. It also helps keep your workouts from getting boring. If you normally walk for exercise, try taking an aerobics class. Are you an avid biker? Try swimming or dancing instead. Mix it up to keep things interesting and your workouts well-rounded.</p>
    <p><b>40s –</b>This is the time of your life when it is most important to have an exercise routine. Our bodies naturally start to decline in middle age. Our muscles begin to lose mass and elasticity. This slows our metabolism and makes it easier to gain weight. During this time, both men and women start experiencing dropping hormone levels. This also makes it easier to gain weight, especially around the abdomen. This kind of weight increases your risk of developing health problems. These could include high blood pressure, diabetes, and heart disease. Exercise is the best way to fight all these changes. Keep up with your cardio workouts, 3 to 5 times a week. If you have pain in your joints, switch to low-impact activities. These could include biking or swimming. But keep in mind that weight-bearing activities, such as walking or jumping, are important during this time. They can help you maintain strong bones and fight age-related bone loss. Be sure to keep up your muscle-strengthening routines, as well.</p>
    <p><b>50s –</b>In your 50s, you may start to experience more aches and pains on a daily basis. Don’t let this stop you from exercising. Just adapt your exercise program. Low-impact activities such as walking, biking, or swimming generally go easy on your joints. You may also be even sorer after vigorous workouts. Try reducing the intensity and exercise more often instead. During this time, you’ll also have to fight your body’s natural tendency to curve forward. Strengthen your core by focusing on the muscles in your abdomen and your back. This will help your body stand up straighter and fight the curve.</p>
    <p><b>60s – </b>This is the time when you can start focusing on preventing falls. Continue your aerobic exercise regimen. Try to get 30 minutes of activity 5 times a week. Lift weights or use resistance training 2 to 3 times a week to keep muscles and bones strong. And start working on balance. The National Institutes of Health recommends daily exercises to help you improve and maintain your balance. These include standing on one foot, leg raises, and walking heel to toe. Practice these things now to fight balance problems later on.</p>
    <p><b>70s+ – </b>In your 70s and beyond, you need to maintain your strength and flexibility. This will give you more years of being able to function and be independent. Continue getting aerobic exercise every week, whether it be water aerobics, walking, or dancing. Use resistance bands to keep muscles strong. Continue doing balance exercises to keep from falling. Devote extra time to warming up and cooling down so you don’t hurt your muscles. And remember to stretch every day to maintain your flexibility.</p>


    <h1>How much exercise do I need?</h1>
    <p>The U.S. Department of Health and Human Services establishes Physical Activity Guidelines for Americans. The most recent guidelines are as follows:</p>
    <b>Children and teens</b>
    <p>Children ages 6 to 17 should be getting at least 1 hour (60 minutes) of physical activity every day. That may sound like a lot, but they are probably already getting most of that in their everyday activities. This could include recess, gym class, or running around with friends after school. The 3 types of exercise children should have in their activities include:</p>
    <ul>
      <li>Aerobic activity. These are activities that get their hearts pumping. They could include running, riding bikes, or fast walking. These should make up the majority of their hour of exercise.</li>
      <li>Muscle-strengthening. These activities build their muscles. They could include climbing trees, gymnastics, or playing on a jungle gym. Older teens may also lift weights to build muscle.</li>
      <li>Bone-strengthening. These activities make their bones stronger. They could include running, fast walking, or jumping rope.</li>
    </ul>
    <b>Adults</b>
    <p>Adults should be getting both aerobic and muscle-strengthening exercise on a regular basis. Each week, adults need either:
    </p>
<p>2 hours and 30 minutes (150 minutes) of moderate-intensity exercise plus muscle strengthening.</p>
<b>OR</b>
<p>1 hour and 15 minutes (75 minutes) of vigorous exercise plus muscle strengthening.
Moderate-intensity exercise allows you to talk while exercising, but not be able to sing a song. Activities include:</p>
<ul>
  <li>Brisk walking.</li>
  <li>Water aerobics.</li>
  <li>Playing doubles tennis.</li>
  <li>Riding a bicycle on level ground.</li>
</ul>
<p>Vigorous exercise elevates your heart rate and makes you breathe fast. You can’t talk without pausing for breath. Activities include:</p>
<ul>
  <li>Swimming laps.</li>
  <li>Jogging or running.</li>
  <li>Playing singles tennis.</li>
  <li>Riding a bicycle on hills or at a fast pace.</li>
</ul>
<p>Muscle-strengthening exercises should target all muscle groups. This includes the shoulders, arms, chest, abdomen, back, hips, and legs. Activities include:</p>
<ul>
  <li>Weightlifting.</li>
  <li>Push-ups.</li>
  <li>Sit-ups.</li>
  <li>Using resistance bands.</li>
  <li>Yoga.
</li>
</ul>
<p>For even better health, adults can aim for 5 hours (300 minutes) of moderate exercise or 2 hours and 30 minutes (150 minutes) of vigorous exercise each week.</p>
 </div>
      
      
      <div className='econt-2'>
      <h1>Some videos that help to Exercise</h1>
        <div className='econ2-content'>
          <div className='cnt1'>
            <ReactPlayer controls={true} url='https://youtu.be/bO6NNfX_1ns?si=4eYHNCdppC2VGbma' height='300px' width='450px' />
          </div>
          <div className='cnt2'>
            <ReactPlayer controls={true} url='https://youtu.be/5_xnJL5CYOQ?si=4909QvX184xNwG0Q' height='300px' width='450px' />
          </div>
          <div className='cnt3'>
            <ReactPlayer controls={true} url='https://youtu.be/YvrKIQ_Tbsk?si=w8IJ5ZBkD43uMBbb' height='300px' width='450px' />
          </div>

          <div className='cnt1'>
        <ReactPlayer controls={true} url='https://youtu.be/8AtmuAmE0vQ?si=FjbM7KGDpGbNQAi0' height='300px' width='450px'/>
          </div>
        <div className='cnt2'>
        <ReactPlayer controls={true} url='https://youtu.be/6NQhGbsALxA?si=21b7hjGyxMYlOZdC' height='300px' width='450px'/>   
        </div>
        <div className='cnt3'>
        <ReactPlayer controls={true} url='https://youtu.be/TQyaUtFTAc8?si=j4-SMF5CzE5vtuvH' height='300px' width='450px'/>   
        </div>
        </div>
      <p>
      "Dive into a collection of inspiring exercise videos, ranging from targeted workouts to expert advice on form and technique. Whether you're a beginner or fitness enthusiast, these videos offer diverse routines—cardio, strength, yoga—to cater to your preferences. Uncover the science behind effective exercise, gain insights into holistic well-being, and find motivation for staying active. With routines for every fitness level, these videos are your go-to resource to make exercise an enjoyable and integral part of your lifestyle. Empower yourself with knowledge and motivation for a stronger, more resilient, and happier you."

      </p>


      </div>
      
    </div>
  )
}

export default Exercise