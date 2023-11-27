import React, { type FC } from 'react'
import { Parallax } from 'react-scroll-parallax'

import { XButton } from '@atoms/XButton'

const GetStartFree: FC = () => {
    return (
        <Parallax speed={-5}>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-md md:text-3xl font-bold'>Ready To Build Your Community?</h1>
                <XButton className=' border-2 px-5 md:px-8 h-10 md:h-12 bg-[#ff52bf] hover:bg-white hover:border-2 hover:border-[#ff52bf] hover:text-[#ff52bf] hover:shadow-md rounded-full transition-all duration-500'>
                    <span className='text-xs md:text-md'>Get started for free!</span>
                </XButton>
            </div>
        </Parallax>
    )
}

export default GetStartFree
