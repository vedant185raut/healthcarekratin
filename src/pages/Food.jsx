import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/food.css"
import fc2 from "../asset/fc2.png"
import ReactPlayer from 'react-player'
const Food = () => {
  return (
    <div className='f-container'>
      <div className='fcont-1'>
        <div className='cnt1'>
          <div className='cnt11'>
            <h3>Be Healthy,</h3>
            <h3>Be Happy</h3>
            <p>"Eat well, live swell! Nourish for joy, thrive in health. Be healthy, be happy – the recipe for a tasty life!"</p>
            <Link className='session' to="/">Book a Session</Link></div>
        </div>
        <div className='cnt2'>
          <img src={fc2} alt="h-image" />
        </div>
      </div>

      <div className='fcont-2'>
        <h1>Importance of balanced Diet</h1>
        <p>
          A balanced diet is the cornerstone of a healthy lifestyle, providing the essential nutrients necessary for optimal well-being. It involves consuming a diverse range of foods in appropriate proportions to meet the body's nutritional needs. This includes a mix of fruits, vegetables, whole grains, lean proteins, and healthy fats. The importance of a balanced diet lies in its ability to support overall health, boost energy levels, maintain a healthy weight, and reduce the risk of chronic diseases. By nourishing the body with a variety of nutrients, individuals can promote physical and mental well-being, fostering a foundation for a vibrant and fulfilling life.
        </p>
      </div>

      <div className='fcont-3'>
        <h1>About food and your life stages</h1>
        <p>
          Our nutritional needs change with different life stages. To be fit and healthy, it is important to take into account the extra demands placed on your body by these changes.
        </p>
        <p>To meet your body’s regular nutritional needs, you should consume:</p>
        <ul>
          <li>a wide variety of nutritious foods</li>
          <li>water on a daily basis</li>
          <li>enough kilojoules for energy, with carbohydrates as the preferred source</li>
          <li>essential fatty acids from foods such as oily fish, nuts, avocado</li>
          <li>adequate protein for cell maintenance and repair</li>
          <li>fat-soluble and water-soluble vitamins</li>
          <li>essential minerals such as iron, calcium and zinc</li>
          <li>foods containing plant-derived phytochemicals, which may protect against heart disease, diabetes, some cancers, arthritis and osteoporosis.</li>
        </ul>
        <p>A varied diet that concentrates on fruits, vegetables, wholegrains, legumes, dairy foods and lean meats can meet these basic requirements.</p>

        {/* ############### 1 #################*/}
        <h1>Food for young children</h1>
        <p>Once a child is eating solids, offer a wide range of foods to ensure adequate nutrition. Young children are often picky, but should be encouraged to eat a wide variety of foods. Trying again with new foods may be needed for a child to accept that food. As many as 8 to 15 times may be needed.</p>
        <p>During childhood, children tend to vary their food intake (spontaneously) to match their growth patterns. Children’s food needs vary widely, depending on their growth and their level of physical activity. Like energy needs, a child’s needs for protein, vitamins and minerals increase with age.</p>
        <p>Ideally, children should be accumulating stores of nutrients in preparation for the rapid growth spurt experienced during adolescence. Appropriate weight gain and development will indicate whether food intake is appropriate.</p>
        <p>Food-related problems for young children include obesity, tooth decay and food sensitivities.

          Recommendations include:</p>

        <ul>
          <li>If a child is gaining inappropriate weight for growth, limit energy-dense, nutrient-poor snack foods. Increase your child’s physical activity. You could also limit the amount of television watching.</li>
          <li>Tooth decay can be prevented with regular brushing and visits to the dentist. Avoid sugary foods and drinks, especially if sticky or acidic.</li>
          <li>Ensure your child has enough fluids, especially water. Fruit juices should be limited and soft drinks avoided.</li>
          <li>Reduced-fat milks are not recommended for children under the age of 2, due to increased energy requirements and high growth rate at this age.</li>
          <li>Be aware of foods that may cause allergic reactions, including peanuts, shellfish and cow’s milk. Be particularly careful if there is a family history of food allergy.</li>
        </ul>

        {/* ############### 2 #################*/}

        <h1>Food for children entering their teenage years</h1>

        <p>The growth spurt as children move into adolescence needs plenty of kilojoules and nutrients. For girls, this generally occurs around 10 to 11 years of age. For boys, it occurs later, at around 12 to 13 years.

          Recommendations include:</p>
        <ul>
          <li>The extra energy required for growth and physical activity needs to be obtained from foods that also provide nutrients, instead of just ‘empty calories’.</li>
          <li>Takeaway and fast foods need to be balanced with nutrient-dense foods such as wholegrain breads and cereals, fruits, legumes, nuts, vegetables, fish and lean meats.</li>
          <li>Milk, yoghurt and cheese (mostly reduced fat) should be included to boost calcium intake – this is especially important for growing bones. Cheese should preferably be a lower salt variety.</li>
          <li>Adolescent girls should be particularly encouraged to consume milk and milk products.</li>
        </ul>


        {/* ############### 3 #################*/}

        <h1>Food for older teenagers and young adults</h1>
        <p>Moving away from home, starting work or study, and the changing lifestyle that accompanies the late teens and early 20s can cause dietary changes that are not always beneficial for good health.

          Recommendations include:</p>
        <ul>
          <li>Make a deliberate effort to keep physically active.</li>
          <li>Limit alcohol intake.</li>
          <li>Reduce the amount of fats and salt in the daily diet.</li>
          <li>Be careful to include foods rich in iron and calcium.</li>
          <li>Establish healthy eating habits that will be carried on into later life.</li>
        </ul>

        {/* ############### 4 #################*/}

        <h1>Food for older people</h1>
        <p>Many people eat less as they get older – this can make it harder to make sure your diet has enough variety to include all the nutrition you need.

          Recommendations include:</p>
        <ul>
          <li>Be as active as possible to encourage your appetite and maintain muscle mass.</li>
          <li>Remain healthy with well-balanced eating and regular exercise.</li>
          <li>Eat foods that are nutrient dense rather than energy dense, including eggs, lean meats, fish, liver, low-fat dairy foods, nuts and seeds, legumes, fruit and vegetables, wholegrain breads and cereals.</li>
          <li>If possible, try to spend some time outside each day to boost your vitamin D synthesis for healthy bones.</li>
          <li>Limit foods that are high in energy and low in nutrients such as cakes, sweet biscuits and soft drinks.</li>
          <li>Choose foods that are naturally high in fibre to encourage bowel health.</li>
          <li>Limit the use of table salt, especially during cooking.</li>
          <li>Choose from a wide variety of foods and drink adequate fluids.</li>
          <li>Share mealtimes with family and friends.</li>
        </ul>
      </div>

      <div className='fcont-4'>
        <h1>Some videos that help to understand better about Diet</h1>
        <div className='fcon4-content'>
          <div className='cnt1'>
            <ReactPlayer controls={true} url='https://youtu.be/c06dTj0v0sM?si=qi5Fk116R7BAa95x' height='300px' width='450px' />
          </div>
          <div className='cnt2'>
            <ReactPlayer controls={true} url='https://youtu.be/M4UllYxBFqc?si=WameNDHY5XRkoMjC' height='300px' width='450px' />
          </div>
          <div className='cnt3'>
            <ReactPlayer controls={true} url='https://youtu.be/-MP8EQq0DkU?si=8Ib4Ot8LajJlgsa7' height='300px' width='450px' />
          </div>

          <div className='cnt1'>
        <ReactPlayer controls={true} url='https://youtu.be/t_mGvTXTFMU?si=BO4aChmqjX1OLxd0' height='300px' width='450px'/>
          </div>
        <div className='cnt2'>
        <ReactPlayer controls={true} url='https://youtu.be/PmxdBsz9dwE?si=9APbzGh1GNEDTnjK' height='300px' width='450px'/>   
        </div>
        <div className='cnt3'>
        <ReactPlayer controls={true} url='https://youtu.be/1w1HIBWJlfA?si=1r-x9TIxp1IsxAIC' height='300px' width='450px'/>   
        </div>
        </div>
        <p>
"Explore a curated collection of enlightening videos designed to deepen your understanding of the importance of a balanced diet. Delve into informative content covering diverse topics such as the science behind nutrition, practical tips for meal planning, and expert insights on how dietary choices impact overall health. Uncover the secrets to maintaining a well-balanced and nourishing diet that supports your unique lifestyle. These videos aim to empower you with knowledge, offering valuable perspectives on the role of food in achieving optimal health, energy, and longevity. Whether you're a novice or someone looking to refine your dietary habits, these videos serve as a comprehensive guide to making informed and mindful choices, paving the way to a healthier and happier you."</p>
      </div>







    </div>
  )
}

export default Food