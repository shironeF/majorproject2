import React from 'react'

const MenuContainer = () => {
    return (
        <section className='w-full my-6' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold text-headingColor uppercase relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-1 before:bg-orange-400 transition-all ease-in-out mr-auto'>
                    Featured stores
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none'>
                    <div className='group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'></div>
                </div>
            </div>
        </section>
    )
}

export default MenuContainer