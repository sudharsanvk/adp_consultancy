import React from 'react'
import './Footer.css'

import zippy_logo from '../../images/zippy logo.png'
import fb from '../../images/fb.png'
import linked from '../../images/linkedIn.png'
import insta from '../../images/insta.png'
import gmail from '../../images/gmail.png'



export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="social-media">
            <div className="zippy-footer-logo">
                <img src={zippy_logo} alt="" />
            </div>
            <div className="social-media-links">
                <div className="logo-sm">
                    <img src={fb} alt="" />
                </div>
                <div className="logo-sm">
                    <img src={linked} alt="" />
                </div>
                <div className="logo-sm">
                    <img src={insta} alt="" />
                </div>
                <div className="logo-sm">
                    <img src={gmail} alt="" />
                </div>
            </div>
        </div>

        <div className="about-contact">
            <a href=""><h5>
                About</h5></a>

            <a href="">
                <h5>Contact Us</h5>
            </a>
        </div>

        <div className="">
    
        </div>
        </div>

        <hr className='hr-line' />

        <div className="footer-bottom">
            <h6>Copyrights@2023 ADPPROCESSEDFOOD</h6>
            <h6>All Rights Reserved</h6>
        </div>
    </div>
  )
}
