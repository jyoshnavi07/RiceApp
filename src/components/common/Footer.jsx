import React from 'react'
import { BRAND_NAME } from '../../utils/constants'

const Footer = () => {
  return (
    <div className='footer px-5 pt-5'>
      <div className="row footer-row my-3">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h4>About Quality Rice</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptatibus earum, vero iure labore quisquam qui fugit sequi quas? Odio ut quis facilis optio dolore eum ea rerum nobis atque!</p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <h4>Quick Links</h4>
          <ul className='llist'>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
          <h4>Terms & Privacy</h4>
          <ul className='llist'>
            <li><a href="">Privacy & Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h4>Info</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur a deserunt veritatis atque delectus nobis incidunt corporis.</p>
          <p>Follow Us</p>
          <div>
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-twitter mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-whatsapp mx-2"></i>
          </div>
        </div>  
      </div>
        <p className='copyright'> &copy; 2025 {BRAND_NAME} All Rights Reserved</p>
    </div>
  )
}

export default Footer