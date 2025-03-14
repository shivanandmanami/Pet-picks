import React from "react";
import '../css/contact.css'
import Img from '../assets/images/contact-image.svg'

const Contact = _=> (
    <div className="contact-div">
        <div className="first-part">
            <div className="info">
            <h1 className="heading">Contact Information</h1>
            <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p><br />
            </div>
            <div className="part1">
            <div className="box1">
                <h1 className="heading">Office</h1>
                <p id="offi">730 local Ave 65802, <br />
                        vijayapur, Karnataka <br />
                        +91 9731288683 <br />
                        +91 9380619975 <br />
                        Petpicks@website.com</p>
            </div>
            <div className="box2" >
                <h1 className="heading">Managemnet</h1>
                <p id="manag">730 local Ave 65802,<br />
                        vijayapur, Karnataka <br />
                        +91 9731288683 <br />
                        +91 9380619975 <br />
                        Petpicks@website.com</p>
            </div>
            </div>
            <div className="img">
                <img src={Img} alt="" id="img1" />
            </div>
        </div>
        <div className="second-part">
            <div className="get-in">
            <h1 className="heading">Get in Touch</h1>
            <p>Use the form below to get in touch with us.</p>
            </div>
            <div className="form">
                <div className="small-input">
                <input type="text" placeholder="  Enter Your Name Here" />
                <input type="text" placeholder="  Enter Your Email Here"  />
                </div>
                <input type="text" placeholder="  Enter Your Phone Number" className="mid-input" />
                <input type="text" placeholder="  Write Your Subject Here" className="mid-input"/>
                <input type="text" placeholder="  Write Your Message here" className="big-input"/>
                <center><button className="submit" /* onClick={} */ ><p id="submit">Submit</p></button></center>
            </div>
        </div>
        

    </div>
);

export default Contact;