import React from 'react'
import '../style/pages/Home.scss'

import Pizza from "../assets/pizzaLeft.jpg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{backgroundImage: `url(${Pizza})`}} className='Home' >
   
     <h2>Pizza Shop</h2>
     <h3>Order Whatever you want</h3>
     <button><Link to="/Info">Order</Link></button>
    </section>
  )
}
export default Home