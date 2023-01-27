import React, { useEffect, useRef, useState } from "react";
import RowContainer from "./RowContainer.jsx";
import { useStateValue } from "../context/StateProvider";
import CartContainer from './CartContainer';
import Storeutils from "./Storeutils.jsx";


const MainContainer = () => {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => { }, [scrollValue]);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>


            <section className='w-full my-6 '>
                <div className="w-full flex items-center justify-between">
                    <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-36 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to orange-600  transition-all ease-in-out'>
                        CHECK-OUT ALL OF OUR SULIT DEALS!
                    </p>
                </div>
                <Storeutils
                    flag={true} data={foodItems?.filter(n => n.category === 'Promo code')} />
            </section>
            {cartShow && (
                <CartContainer />
            )}

        </div>
    )
}

export default MainContainer