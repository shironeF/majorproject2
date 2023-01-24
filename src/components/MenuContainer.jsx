import React, { useState, useEffect } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { category, categories } from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from "./RowContainer"
import { useStateValue } from '../context/StateProvider'

const MenuContainer = () => {

    const [filter, setFilter] = useState("Chickens");
    const [{ foodItems }, dispatch] = useStateValue();

    return (
        < section className='w-full my-6' id='menu' >
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-1 before:bg-orange-400 transition-all ease-in-out mr-auto'>
                    Featured Meals
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                    {categories && categories.map(category => (
                        <motion.div whileTap={{ scale: 0.75 }} key={category.id} className={`group ${filter === category.urlParamName ? 'bg-orange-400' : 'bg-white'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-orange-400`}
                            onClick={() => setFilter(category.urlParamName)}
                        >
                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName
                                ? "bg-white"
                                : "bg-orange-400"
                                } group-hover:bg-white flex items-center justify-center`}>
                                <IoFastFood className={`${filter === category.urlParamname ? 'text-textColor' : 'text-white'}group-hover:text-card text-lg`} />
                            </div>
                            <p className={`text-sm ${filter === category.urlParamname ? 'text-white' : 'text-textColor'} group-hover:text-white`}>{category.name}</p>
                        </motion.div>
                    )
                    )}
                </div>
                <div className='w-full h-screen'>
                    <RowContainer flag={false} data={foodItems?.filter((n) => n.category === filter)} />
                </div>
            </div>
        </section >
    )
}

export default MenuContainer