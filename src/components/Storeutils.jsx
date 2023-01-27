import React, { useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { restaurants } from '../utils/data';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import RowContainer from './RowContainer';

const Storeutils = () => {

    const [filter, setFilter] = useState("Jollibee");
    const [{ foodItems }, dispatch] = useStateValue();

    return (
        < section className='w-full my-6' id='menu' >
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-1 before:bg-orange-400 transition-all ease-in-out mr-auto'>
                    Check out our Restaurants
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                    {restaurants && restaurants.map(restaurant => (
                        <motion.div whileTap={{ scale: 0.75 }} key={restaurant.id} className={`group ${filter === restaurant.urlParamName ? 'bg-orange-400' : 'bg-gray-100'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center font-semibold justify-center duration-150 transition-all ease-in-out hover:bg-orange-400`}
                            onClick={() => setFilter(restaurant.urlParamName)}
                        >
                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === restaurant.urlParamName
                                ? "bg-white"
                                : "bg-orange-400"
                                } group-hover:bg-white flex items-center justify-center`}>
                                <IoFastFood className={`${filter === restaurant.urlParamname ? 'text-textColor' : 'text-white'}group-hover:text-card text-lg`} />
                            </div>
                            <p className={`text-sm ${filter === restaurant.urlParamname ? 'text-white' : 'text-textColor'} group-hover:text-white`}>{restaurant.name}</p>
                        </motion.div>
                    )
                    )}
                </div>
                <div>
                    <RowContainer flag={false} data={foodItems?.filter((n) => n.category === filter)} />
                </div>
            </div>
        </section >
    )
}

export default Storeutils