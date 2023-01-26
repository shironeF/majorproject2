import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-tl from-orange-300 to-red-400' >
			  <h5 class="uppercase font-semibold mt-2">&copy;{new Date().getFullYear()} FOODPAD Philippines Inc.</h5>
        <p> All rights reserved </p>
        <p>For customer support Email us at: <span className='font-semibold'> support@foodpad.ph </span></p>

      <div className='col'>
       <ul className='list-unstyled'>
        <li>About</li>
        <li>Help center</li>
        <li>Contacts</li>
        <li>Terms And Conditions</li>
        <li>Privacy Policy</li>
        <li>Foodpad Pay Terms & Conditions and update</li>
        </ul>
      </div>
      
      <div class="col">
      <ul className='list-unstyled'>
        <li>Cashback Terms</li>
        <li>Security</li>
        <li>Partner with Us</li>
        <li>Download foodpad App</li>
        <li>Career</li>
        <li>Certified Partner</li>
        </ul>
      </div>
      
      <div class="">
      <ul className='list-unstyled'>
        <li>Foodpad Deals</li>
        <li>Foodpad Magazine</li>
        <li>Foodpad Grocery Delivery</li>
        <li>All cities</li>
        <li>All cuisines</li>
        <li>Become an affiliate</li>
        </ul>
		</div>
    
    </div>
  )
}
