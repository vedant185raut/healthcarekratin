import React from 'react'
// import {Link} from 'react-router-dom'
import "../Css/footer.css"
import logo from "../asset/logo2.png"

const footer = () => {
  return (
    <footer className='footer'> 
    <div className='fcont'>
    <div className='cont1'>
    <img src={logo} alt='logo'/>
    <form>
    <h1>Feedback</h1>
    <label htmlFor="">Name:
        <input type="text" placeholder='Enter your name'/>
        </label><br />
        <label htmlFor="">Message:
        <input type='text' placeholder='Leave us a message...'/>
        </label> <br />
        <input type='submit' />
    </form>

    </div>
     <div className='cont2'>

<div>
  <h2>Phone</h2>
  <p>12345-12345</p>
</div>
<div className="icon-container">
  <h2>Follow</h2>
  <ion-icon name="logo-linkedin"></ion-icon>
  <ion-icon name="logo-instagram"></ion-icon>
  <ion-icon name="logo-facebook"></ion-icon>
</div>
<div className='add'>
  <h2>Address</h2>
  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, dolorum.</p>
</div>

     </div>
 </div>
     <p>© 2023 HealthCare. All rights reserved.</p>
    </footer>
  )
}

export default footer