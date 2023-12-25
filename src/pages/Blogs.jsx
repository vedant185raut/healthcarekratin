import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/blogs.css"
const Blogs = () => {
  const posts = [
      {
        id: 1,
        title: "Food for older people",
        desc: "Many people eat less as they get older – this can make it harder to make sure your diet has enough variety to include all the nutrition you need. Recommendations include:Be as active as possible to encourage your appetite and maintain muscle mass.Remain healthy with well-balanced eating and regular exercise.Eat foods that are nutrient dense rather than energy dense, including eggs, lean meats, fish, liver, low-fat dairy foods, nuts and seeds, legumes, fruit and vegetables, wholegrain breads and cereals.",
        img: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
        rout:"/Food",
      },
      {
        id: 2,
        title: "Sports and Exercise at Every Age: Path to Improved Health",
        desc: "60s – This is the time when you can start focusing on preventing falls. Continue your aerobic exercise regimen. Try to get 30 minutes of activity 5 times a week. Lift weights or use resistance training 2 to 3 times a week to keep muscles and bones strong. And start working on balance. The National Institutes of Health recommends daily exercises to help you improve and maintain your balance. These include standing on one foot, leg raises, and walking heel to toe. Practice these things now to fight balance problems later on.",
        img: "https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg",
        rout:"/Exercise",
      },
      {
        id: 3,
        title: "Music and health: Music Can Improve Mood",
        desc: "Another of the science-backed benefits of music is that it just might make you happier. In one examination of the reasons why people listen to music, researchers discovered that music played an important role in relating arousal and mood. Participants rated music's ability to help them achieve a better mood and become more self-aware as two of the most important functions of music.Another study found that intentionally trying to boost moods by listening to positive music could have an impact within two weeks. Participants were instructed to purposefully attempt to improve their mood by listening to positive music each day for two weeks. ",
        img: "https://www.verywellmind.com/thmb/Li_nY0ioC1X_RQQVf3vLtNo8PM4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/woman-with-smartphone-and-headphones-505451571-58a1efa73df78c4758685e32.jpg",
        rout:"/Music",
      },
      {
        id: 4,
        title: "Yoga For Different Age Groups: Kids,Pre-Teens and Teens,Adults and Senior Citizens",
        desc: "Yoga is considered the new age mantra for good health. It’s a trend that everyone around the world is talking about. People have had first hand experiences about its benefits and are now trying out different forms of yoga. The last decade has revolutionised the world’s perspective about yoga. The reason behind this shift is because yoga brings in varied benefits for everyone. Not just adults, yoga today is being taught to young kids and even senior citizens, to help them overcome different issues. Yoga helps in holistic development and wellbeing. ",
        img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
        rout:"/Yoga",
      },
    ];

  return (
    <div className="b-container">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
                <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <Link className='Link' to={post.rout} >Read More</Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Blogs