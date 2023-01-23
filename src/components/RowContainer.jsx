import React from 'react'
import f3 from '../img/f3.jpg'
import { MdShoppingBasket } from 'react-icons/md'

const RowContainer = ({ flag }) => {
    return (
        <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
            <div className='w-300 md:w-225 h-auto my-12 bg-cardOverlay shadow-md backdrop-blur-lg'>
                <div className='w-full flex items-center justify-between'>
                    <img src={f3} alt="" className='w-40 -mt-8' />
                    <div className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center'>
                        <MdShoppingBasket className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowContainer