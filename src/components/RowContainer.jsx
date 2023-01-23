import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({ flag, data }) => {
    console.log(data);
    return (
        <div className={`w-full flex items-center my-12 bg-gradient-to-tl from-red-500 to red-800 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>


            {data && data.map(item => (< div key={item.id} className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto my-12 bg-orange-400 rounded-lg p-2 shadow-md backdrop-blur-lg hover:drop-shadow-lg' >
                <div while className='w-full flex items-center justify-between'>
                    <motion.img whileHover={{ scale: 1.2 }} src="https://firebasestorage.googleapis.com/v0/b/majorproject2-752ea.appspot.com/o/Images%2F1674483125285-pr1.png?alt=media&token=065ae47e-8ba6-4bef-a011-462818bb0676" alt="" className='w-48 -mt-8' />
                    <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white' />
                    </motion.div>
                </div>
                <div className='w-full mt-4 flex flex-col items-end justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>Cheesy Beef Burger</p>
                    <p className='mt-1 text-sm text-gray-500'>45 Calories</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500'>₱</span> 49.99
                        </p>
                    </div>
                </div>
            </div>))}
        </div >
    )
}

export default RowContainer