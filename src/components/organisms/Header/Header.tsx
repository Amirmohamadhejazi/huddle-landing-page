/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { Parallax } from 'react-scroll-parallax'

import { XButton } from '@atoms/XButton'

import { iconCommunities, logo, screenMessages, screenMockups } from '@public/images'

const Header: FC = () => {
    return (
        <div className='container mx-auto '>
            <div className='px-2 md:px-0'>
                {/* header */}
                <div className='flex items-center justify-between mt-8 '>
                    <div className='w-28'>
                        <img src={logo.src} alt='' className='object-cover' />
                    </div>
                    <XButton className='text-xs md:text-md border-2 text-[#ff8fd8] border-[#ff8fd8] hover:bg-[#ff8fd8] hover:text-white hover:shadow-md rounded-full transition-all duration-500'>
                        try it free!
                    </XButton>
                </div>

                <div className='flex flex-col gap-8 text-center mt-28'>
                    <Parallax speed={-2} className='z-20'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-md md:text-4xl font-bold'>Build The Community Your Fanse Will Loves</h1>
                            <div className='flex flex-col text-center text-xs md:text-lg font-light'>
                                <span>Huddle re-imagines the way we build communities. You have a</span>
                                <span>voice, but so does youe audience. Create connections with your</span>
                                <span>users as you engage in genuine discussion.</span>
                            </div>

                            <div>
                                <XButton className=' border-2 px-5 md:px-8 h-10 md:h-12 bg-[#ff52bf] hover:bg-white hover:border-2 hover:border-[#ff52bf] hover:text-[#ff52bf] hover:shadow-md rounded-full transition-all duration-500'>
                                    <span className='text-xs md:text-md'>Get started for free!</span>
                                </XButton>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax speed={3}>
                        <div className='flex items-center justify-center place-content-center'>
                            <img src={screenMockups.src} alt='' className='object-cover' />
                        </div>
                    </Parallax>
                    <div className='flex flex-col sm:flex-row justify-between mx-32 whitespace-nowrap gap-2 md:gap-0'>
                        <div className='flex flex-col items-center sm:items-start gap-1'>
                            <div className='flex  items-start  flex-col'>
                                <div>
                                    <img src={iconCommunities.src} alt='' />
                                </div>
                                <span className='text-2xl md:text-6xl font-semibold'>1.4K+</span>
                            </div>
                            <span className='text-xs md:text-lg font-light'>Communities Formed</span>
                        </div>
                        <div className='flex flex-col items-center sm:items-start gap-1'>
                            <div className='flex items-start flex-col'>
                                <div>
                                    <img src={screenMessages.src} alt='' />
                                </div>

                                <span className='text-2xl md:text-6xl font-semibold'>2.7M+</span>
                            </div>
                            <span className='text-xs md:text-lg font-light'>Messages Sent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
