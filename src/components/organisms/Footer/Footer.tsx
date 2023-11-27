/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { SlSocialTwitter } from 'react-icons/sl'
import { Parallax } from 'react-scroll-parallax'

import { bgFooterTopDesktop, iconEmail, iconPhone, screenMessages } from '@public/images'

const Footer: FC = () => {
    return (
        <Parallax speed={10}>
            <div className='flex flex-col'>
                <img src={bgFooterTopDesktop.src} alt='' />
                <div className='text-white text-2xl bg-[#00252e] pb-8'>
                    <div className='container grid grid-cols-1 sm:grid-cols-2 mx-auto gap-12 sm:gap-2'>
                        <div className='flex items-center sm:items-start flex-col  text-xs gap-2  '>
                            <div className='flex items-center gap-2 filter grayscale'>
                                <img src={screenMessages.src} alt='' />
                                <span className='text-4xl font-semibold '>Huddle</span>
                            </div>
                            <div className='flex flex-col font-semibold'>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                                <span>adipiscing elit. Mauris nulla quam, hendreuit</span>
                                <span>lacinia vestibulum a, ultrices quis sem.</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={iconPhone.src} className='max-w-[15px]' alt='' />
                                <span>Phone: +1-543-123-4567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={iconEmail.src} className='max-w-[15px]' alt='' />
                                <span>example@huddle.com</span>
                            </div>

                            <div className='flex gap-2 text-white text-2xl'>
                                <FaInstagram className='hover:bg-white rounded-md cursor-pointer hover:text-gray-800 transition-all duration-700' />
                                <RiFacebookBoxFill className='hover:bg-white rounded-md cursor-pointer hover:text-gray-800 transition-all duration-700' />
                                <SlSocialTwitter className='hover:bg-white rounded-md cursor-pointer hover:text-gray-800 transition-all duration-700' />
                            </div>
                        </div>
                        <div className='flex  items-center sm:items-start flex-col  text-xs gap-2  '>
                            <span className='  text-2xl font-bold'>NEWSLETTER</span>

                            <div className='flex flex-col text-xs font-semibold'>
                                <span>TO recive tips how to grow your community.</span>
                                <span>sign up to our weekly newSletter. well never send </span>
                                <span>you spam or pass on your email address</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Footer
