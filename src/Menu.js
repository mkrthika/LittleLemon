import React from 'react'
import bruchetta from './icons_assets/bruchetta.svg'
import greeksalad from './icons_assets/greek salad.jpg'
import caeasersalad from './icons_assets/caesarsalad.jpg'
import falafel from './icons_assets/falafel.jpg'
import mandi from './icons_assets/mandi.jpeg'
import chicken from './icons_assets/chicken.jpeg'
import kunafah from './icons_assets/kunafah.jpeg'
import lemondessert from './icons_assets/lemon dessert.jpg'
import falooda from './icons_assets/falooda.jpg'
import Starter from './Starter'

const Menu = () => {
  return (
    <>
    <div className="menu_component">
      <h1>Starters and Salads</h1>
      <div className="menu_list">
        <Starter img = {greeksalad} name="Greek Salad" price = "12 AED" desc = "Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil"/>
        <Starter img = {caeasersalad} name="Ceaser Salad" price = "14 AED" desc = "A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, eggs or egg yolks, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper."/>
        <Starter img = {falafel} name="Falafel" price = "15 AED" desc = "Falafel is a deep-fried ball or patty-shaped fritter of Egyptian origin, featuring in Middle Eastern cuisine, particularly Levantine cuisines, and is made from broad beans, ground chickpeas, or both"/>
      </div>
      <h1>Main Course</h1>
      <div className="menu_list">
        <Starter img = {bruchetta} name="Bruchetta" price = "20 AED" desc = "Bruschetta is an Italian antipasto consisting of grilled bread often topped with olive oil and salt. Most commonly it is served with toppings of tomato, vegetables, beans, cured meat, and/or cheese. In Italy, bruschetta is often prepared using a brustolina grill."/>
        <Starter img = {mandi} name="Chicken Mandi" price = "25 AED" desc = "This is a traditional Yemeni dish that serves up spiced succulent chicken with perfectly seasoned yellow rice."/>
        <Starter img = {chicken} name="Khan Plov" price = "40 AED" desc = "Like many rice pilafs from the region, this one is spattered with saffron-infused water to create patches of fragrant yellow rice. The whole pilaf is wrapped in butter-saturated lavash to create a crispy, golden-brown casing that's cracker thin."/>
      </div>
      <h1>Desserts</h1>
      <div className="menu_list">
        <Starter img = {lemondessert} name="Lemon Dessert" price = "20 AED" desc = "This layered lemon dessert is the perfect combination of sweet and tart, with a cookie-like crust, tangy cream cheese, lemon pudding, lemon curd, and whipped topping. "/>
        <Starter img = {kunafah} name="Kunafeh" price = "15 AED" desc = "Kunafeh is a traditional Arabic dessert, made with spun pastry called kataifi, soaked in a sweet, sugar-based syrup called attar, and typically layered with cheese, or with other ingredients such as clotted cream, pistachio or nuts, depending on the region"/>
        <Starter img = {falooda} name="Falooda" price = "20 AED" desc = "A falooda is a Mughalai cold dessert made with vermicelli. It has origins in the Persian dish faloodeh, variants of which are found across West, Central, South and Southeast Asia."/>
      </div>
    </div>
    </>
  )
}

export default Menu