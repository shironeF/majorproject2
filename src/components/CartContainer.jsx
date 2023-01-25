import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from 'framer-motion'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus } from 'react-icons/bi'
import { icons } from 'react-icons/lib'
import { BiPlus } from 'react-icons/bi'
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartContainer = () => {

    const [{ user, cartShow }, dispatch] = useStateValue();

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]'>
            <div className='w-full flex items-center justify-between p-4'>
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}><MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>

                <motion.p whileTap={{ scale: 0.75 }} className='text-textColor text-lg font-semibold'>Cart</motion.p>

                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>
                    Clear <RiRefreshFill />{""}</motion.p>
            </div>

            {/*bottom section*/}
            <div className='w-full h-full bg-gradient-to-br from-orange-300 to-red-400 rounded-t-[2rem] flex flex-col'>

                {/*cart item section*/}
                <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>

                    {/*cart item*/}
                    <div className='w-full p-1 px-2 rounded-lg flex items-center gap-2'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/majorproject2-752ea.appspot.com/o/Images%2F1674587599586-pexels-antony-trivet-12842262.jpg?alt=media&token=8bd64dec-8a32-476f-87a4-d0b18ebfaa88" className='w-50 h-50 max-w-[125px]' alt="" />

                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-black'>Chicken Afritada w/Rice</p>
                            <p className='text-sm block text-black font-semibold'>₱125</p>
                        </div>

                        <div className='group flex items-center gap-2 ml-auto cursor pointer'>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className='text-black' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-gray-100 text-black flex items-center justify-center'>1</p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className='text-black' />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/*cart total section*/}
                <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-black text-lg">Sub Total</p>
                        <p className="text-black text-lg">₱ { }</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-black text-lg">Delivery</p>
                        <p className="text-black text-lg">₱ 2.5</p>
                    </div>

                    <div className="w-full border-b border-gray-600 my-2"></div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-black text-xl font-semibold">Total</p>
                        <p className="text-black text-xl font-semibold">
                            ₱{ }
                        </p>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.75 }}
                        type="button"
                        className='w-full p-2 rounded-full bg-gradient-to-tr from-red-500 to-red-700 text-white text-lg my-2 hover:shadow-lg'>
                        Check Out
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default CartContainer