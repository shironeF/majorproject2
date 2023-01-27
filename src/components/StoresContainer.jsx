import React, { useEffect, useRef, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import Storesutils from './Storeutils';
import CartContainer from './CartContainer';



const StoreContainer = () => {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => { }, [scrollValue]);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>

            <Storesutils />
            {cartShow && (
                <CartContainer />
            )}

        </div>
    )
}

export default StoreContainer