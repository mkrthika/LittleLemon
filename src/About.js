import React from 'react'
import Restaurant1 from './icons_assets/restaurant.jpg'
import Restaurant2 from './icons_assets/restaurant chef B.jpg'
import Restaurant3 from './icons_assets/restauranfood.jpg'

const About = () => {
  return (
    <>
    <div className="about">
      <h1>Little Lemon Restaurant</h1>
      <h3>Welcome to <b>Little Lemon Restaurant</b> </h3>
      <img src={Restaurant1} alt="rest_img1" />
      <h3>Our Beginnings</h3>

      <p>In the heart of Chicago, a culinary adventure began in 2022 with the birth of Little Lemon Restraurant. Founded by a group of passionate food enthusiasts, our journey is a testament to the belief that every meal should be a celebration, a moment to savor and remember.
        The Essence of Flavor<br />
       At Little Lemon Restaurant, we don’t just serve meals; we craft experiences. Headed by Executive Chef Muthukrthika S, our kitchen is a laboratory of creativity where flavors are explored, combined, and transformed into culinary masterpieces. 
        Each dish on our menu is a reflection of our commitment to pushing the boundaries of taste.</p>
      <h3>Our Guiding Principles</h3>
      <img src={Restaurant2} alt="rest_img2" />
      <h4>Genuine Hospitality</h4>
      <p>Step through our doors, and you’re not just a customer; you’re an honored guest. Our team is dedicated to providing genuine hospitality that goes beyond the ordinary. Your comfort and enjoyment are our top priorities.</p>
      <h4>Local Partnerships</h4>
      <p>We take pride in our roots. Little Lemon Restaurant is committed to supporting local farmers, producers, and businesses. By sourcing fresh, seasonal ingredients locally, we ensure the quality of our dishes and contribute to our community’s growth.</p>
      <img src={Restaurant3} alt="rest_img3" />
      <h4>The Aura of Little Lemon Restaurant</h4>
      <p>Enter Little Lemon Restaurant, and you’ll discover a harmonious blend of aesthetics and comfort. Our space is designed to be an extension of the culinary journey, where each corner tells a story. Whether you’re here for an intimate dinner or a lively celebration, we’ve created an ambiance that complements every occasion.</p>
      <h4>Embracing Community</h4>
      <p>We understand the strength of community bonds. Little Lemon Restaurant actively engages in local events, charities, and initiatives, aiming to be a positive force in the lives of those who make up our vibrant community.</p>
      <h4>Your Feedback, Our Inspiration</h4>
      <p>Your experiences matter. We invite you to share your thoughts, your stories, and your suggestions. Your feedback is not only valued but serves as the driving force behind our continuous quest for excellence.</p>
      <p>Thank you for being a part of the Little Lemon Restaurant story. We look forward to sharing meals, creating memories, and making each visit a remarkable experience.</p>
      <b><p>Warm Regards,<br />
        Muthukrthika <br />
        Founder & Culinary Visionary, Little Lemon Restaurant</p></b>

    </div>
    </>
  )
}

export default About