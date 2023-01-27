import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='md:flex md:justify-between sm:px-12 px-4 bg-gray-200'></div>

      <div>
        <div className='flex flex-col items-center justify-center bg-gradient-to-tl from-orange-300 to-red-400'>
          <p className='font-semibold uppercase mt-10'>foodpad philippines inc.</p>
          <span className=' mt-5'> &copy;{new Date().getFullYear()} All Rights Reserved </span>


          <div className='grid grid-col sm:grid-cols-3 lg:grid-col-3 gap-10 text-center pt-2 text-sm pb-8 mt-5 md:text-sm sm:text-lg text-black'>
            <div>
              <p><a href="">About</a></p>
              <p className='mt-3'><a href="">Help Center </a></p>
              <p className='mt-3'><a href="">Contacts</a></p>
              <p className='mt-3'><a href="">Terms And Conditions</a></p>
              <p className='mt-3'><a href="">Privacy Policy</a></p>
              <p className='mt-3'><a href="">Foodpad Pay Terms & Conditions and update</a></p>
            </div>

            <div>
              <p className='mt-3'><a href="">Cashback Terms</a></p>
              <p className='mt-3'><a href="">Security</a></p>
              <p className='mt-3'><a href="">Partner with Us</a></p>
              <p className='mt-3'><a href="">Download foodpad App</a></p>
              <p className='mt-3'><a href="">Career</a></p>
              <p className='mt-3'><a href="">Certified Partner</a></p>
            </div>

            <div>
              <p className='mt-3'><a href="">Foodpad Deals</a></p>
              <p className='mt-3'><a href="">Foodpad Magazine</a></p>
              <p className='mt-3'><a href="">Foodpad Grocery Delivery</a></p>
              <p className='mt-3'><a href="">All cities</a></p>
              <p className='mt-3'><a href="">All cuisines</a></p>
              <p className='mt-3'><a href="">Become an affiliate</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
