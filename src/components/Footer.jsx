import React from 'react'
import "../css/footer.css"
import { Link } from 'react-router-dom';
import logo from "../assets/images/pp logo.png"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons'
import FirstPurchase from './FirstPurchase';
const Footer = () => (
   <div> 
    <FirstPurchase/>
    <div className="footer">
   <div className="fcontent fcontent1"><img src={logo} alt="" />
   <p>Subscribe to our <br />
   newsletter to get <br />
   updates on our new <br />
   grand offers
   </p>
   </div>
   <div className="fcontent fcontent2">
       <h3><b>Quick Links</b></h3><br />
       <ul>
           <Link id='links'to='/'><li>Home</li></Link>
           <Link id='links' to='/shop'><li>Shop</li></Link>
           <Link id='links' to='/contact'><li>Contact</li></Link>
           <Link id='links' to='/about'><li>About</li></Link>
       </ul>
   </div>
   <div className="fcontent fcontent3">
       <h3><b>Help Center</b></h3><br />
       <p id='f3'>
           FAQ's <br />
           Payment <br />
           Checkout <br />
           Track Delivery <br />
       </p>
   </div>
   <div className="fcontent fcontent3">
       <h3><b>Our Newsletters</b></h3><br />
       <p>Subscribe to our <br />
   newsletter to get <br />
   updates on our new <br />
   grand offers
   </p>
   </div>
</div></div>

);

export default Footer;
