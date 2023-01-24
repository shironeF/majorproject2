import React, { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { category, categories } from '../utils/data'

const MenuContainer = () => {

    const [filter, setFilter] = useState('chickens');

    return (
        < section className='w-full my-6' id='menu' >
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-1 before:bg-orange-400 transition-all ease-in-out mr-auto'>
                    Featured stores
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                    {categories && categories.map(category => (
                        <div key={category.id} className={`group ${filter === category.urlParamName ? 'bg-orange-400' : 'bg-white'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-orange-400`}>
                            <div className={`w-10 h-10 rounded-full ${filter === category.urlParamname ? 'bg-white' : 'bg-orange-400'} group-hover:bg-white flex items-center justify-center`}>
                                <IoFastFood className="text-textColor group-hover:text-card text-lg" />
                            </div>
                            <p className={`text-sm ${filter === category.urlParamname ? 'text-white' : 'text-textColor'} group-hover:text-white`}>{category.name}</p>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section >
    )
}

export default MenuContainer