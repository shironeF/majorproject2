import React, { useState, useEffect } from 'react';
import RowContainer from "./RowContainer";
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {

    const [filter, setFilter] = useState("Chickens");
    const [{ foodItems }, dispatch] = useStateValue();

    return (
        < section className='w-full my-6' id='menu' >
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                </div>
                <div>
                    <RowContainer flag={false} data={foodItems?.filter((n) => n.category === filter)} />
                </div>
            </div>
        </section >
    )
}

export default MenuContainer