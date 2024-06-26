import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import Header from './Header'
import bruchetta from './icons_assets/bruchetta.svg'
import greeksalad from './icons_assets/greek salad.jpg'
import lemondessert from './icons_assets/lemon dessert.jpg'
import Testimonials from './Testimonials'
const HomePage = () => {
  return (
    <>
    <Header />
    <div className="homepage_component">
      <h1>This week's Specials</h1>
      <Link to="order-online">Order Online</Link>
    </div>
    <div className="cards">
    <Card img={bruchetta} name="Bruchetta" price="12 AED" desc = "Bruschetta is an Italian antipasto consisting of grilled bread often topped with olive oil and salt. Most commonly it is served with toppings of tomato, vegetables, beans, cured meat, and/or cheese. In Italy, bruschetta is often prepared using a brustolina grill."/>
    <Card img={greeksalad} name="Greek Salad" price="14 AED" desc = "Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil. "/>
    <Card img={lemondessert} name="Lemon Dessert" price="20 AED" desc = "This layered lemon dessert is the perfect combination of sweet and tart, with a cookie-like crust, tangy cream cheese, lemon pudding, lemon curd, and whipped topping.  "/>
    </div>
   
    <br/>
    <div className="testimonials">
    <h1>Hear from our Customers</h1>
    <div className="cards">
    <Testimonials title= "Food" desc = "The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the Lemon Dessert and Chicken Wrap." rating="4.5 stars"/>
    <Testimonials  title="Service"desc = "The service here is excellent. Our server was attentive without being intrusive. The entire staff worked seamlessly together to create a seamless dining experience. We never had to ask anything twice!" rating="4.3 stars"/>
    <Testimonials title="Ambience" desc = "The ambiance is just so Instagram-worthy. Each picture you take here would look stunning on social media, from the food images to the overall setting. Overall, great job, and the place is a must-visit." rating="4 stars"/>
    </div>
   
    </div>
    
    </>
  )
}

export default HomePage