import React from 'react'
import HomeContainer from './HomeContainer'
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MainContainer = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <HomeContainer />

            <section className='w-full flex items-center justify-between'>
                <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-36 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to orange-600  transition-all ease-in-out'>
                    Our Fresh & healthy foods
                </p>
                <div className='hidden md:flex gap-3 items-center'>
                    <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 flex items-center justify-center cursor-pointer ease-in-out shadow-lg'> <MdChevronLeft className='text-base text-white' /> </motion.div>
                    <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 flex items-center justify-center cursor-pointer ease-in-out shadow-lg'> <MdChevronRight className='text-base text-white' /> </motion.div>
                </div>
            </section>
        </div>
    )
}

export default MainContainer