import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
let items = [];

const CartItem = ({ item, setFlag, flag }) => {
    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(item.qty);


    const cartDistpatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
    }

    const updateQty = (action, id) => {
        if (action == "add") {
            setQty(qty + 1);
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty += 1
                    setFlag(flag + 1)
                }
            });
            cartDistpatch();
        } else {
            if (qty == 1) {
                items = cartItems.filter((item) => item.id !== id);
                setFlag(flag + 1);
                cartDistpatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1)
                    }
                });
                cartDistpatch();
            }
        }
    };

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

    return (
        <div className='bg-gray-100 w-full p-1 px-2 rounded-lg flex items-center gap-2'>
            <img src={item?.imageURL} className='w-50 h-50 max-w-[125px]' alt="" />

            <div className='flex flex-col gap-2'>
                <p className='text-base text-black'>{item?.titel}</p>
                <p className='text-sm block text-black font-semibold'>₱ {parseFloat(item?.price) * qty}</p>
            </div>

            <div className='group flex items-center gap-2 ml-auto cursor pointer'>
                <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("remove", item?.id)}>
                    <BiMinus className='text-black' />
                </motion.div>
                <p className='w-5 h-5 rounded-sm bg-gray-100 text-black flex items-center justify-center'>{qty}</p>
                <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("add", item?.id)}>
                    <BiPlus className='text-black' />
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem