import React from 'react'
import Delivery from '../img/3697355.jpg'
import HeroBg from '../img/heroBg2.png'
import I1 from '../img/f2.jpg'



const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]" id='home'>
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Quick Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery"
                        />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>
                    The #1 Food Delivery Service in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Your City </span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    It's been a long day, and all you want is a good meal delivered to your doorstep. You deserve the best food in the world, and that's what you'll get when you order food with Foodpad. We offer more than 30,000 restaurants, so there's something for everyone. Order your favorite dishes for delivery, and enjoy the most delicious food in city.
                </p>
                <button
                    type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1 w-full flex items-center justify-center relative">
                <img src={HeroBg} className=" ml-auto h:420 w-full lg:w-auto lg:h-650"
                    alt="hero-Bg" />

                <div className='w-full h-full absolute top-0 left-5 flex items-center justify-center px-32 py-4'>
                    <div className='w-190 p-4 bg-cardOverlay blackdrop-blur-md d rounded-2xl flex flex-col items-center justify-center'>
                        <img src={I1} className="w-50 -mt-20" alt="I1" />
                        <p className='text-base font-semibold text-textColor'>Rice Meals</p>
                        <p className='text-sm text-textColor'>Shawarma Rice</p>
                        <p className='text-sm font-semibold text-headingColor'> <span className='text-xs text-red-500'>₱</span> 49.99</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContainer