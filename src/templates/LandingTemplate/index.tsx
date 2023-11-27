/* eslint-disable @next/next/no-img-element */
'use client'
import Head from 'next/head'
import { type StaticImageData } from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { SlSocialTwitter } from 'react-icons/sl'
import { Parallax } from 'react-scroll-parallax'

import { XButton } from '@atoms/XButton'

import icon from '@public/icons/favicon-32x32.png'
import {
    bgFooterTopDesktop,
    bgSectionBottomDesktop1,
    bgSectionBottomDesktop2,
    bgSectionTopDesktop1,
    bgSectionTopDesktop2,
    iconCommunities,
    iconEmail,
    iconPhone,
    illustrationFlowingConversation,
    illustrationGrowTogether,
    illustrationYourUsers,
    logo,
    screenMessages,
    screenMockups,
} from '@public/images'

type TBoxDetail = {
    title: string
    texts: string[]
    orderClass: string
    img: StaticImageData
    imgT: StaticImageData | null
    imgB: StaticImageData | null
    parallax: number
    id: number
}
const LandingTemplate = () => {
    const boxDetail: TBoxDetail[] = [
        {
            title: 'Grow Together',
            texts: [
                'Generate meaningful discussions with your audience and build',
                'strong, loyal community. Think of the insightful conversations you',
                'miss out on with a feedback from.',
            ],
            img: illustrationGrowTogether,
            orderClass: 'order-last md:order-first',
            imgT: bgSectionTopDesktop1,
            imgB: bgSectionBottomDesktop1,
            parallax: 5,
            id: 0,
        },
        {
            title: 'Flowing Conversations',
            texts: [
                'You wouldnt paginate a conversation in real life, so why do it online?',
                'Our theads have just-in-time loading for a more natural flow.',
            ],
            img: illustrationFlowingConversation,
            orderClass: 'order-last ',
            imgT: null,
            imgB: null,
            parallax: -10,
            id: 1,
        },
        {
            title: 'Your Users',
            texts: [
                'it takes no time at all integrate Huddle with your apps',
                'authentication solution. This means, once signed in to your app, your',
                'users can start chatting immediately.',
            ],
            img: illustrationYourUsers,
            orderClass: 'order-last md:order-first',
            imgT: bgSectionTopDesktop2,
            imgB: bgSectionBottomDesktop2,
            parallax: 5,
            id: 2,
        },
    ]
    return (
        <div className=' flex flex-col gap-5 '>
            <Head>
                <link rel={icon.src} type='image/png' />
            </Head>
            {/* header */}
            <div className='container mx-auto '>
                <div className='px-2 md:px-0'>
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
                                <h1 className='text-md md:text-4xl font-bold'>
                                    Build The Community Your Fanse Will Loves
                                </h1>
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

            <div className='flex flex-col gap-16 '>
                {boxDetail.map((itemsBox) => (
                    <Parallax speed={itemsBox.parallax} key={itemsBox.id}>
                        <div className='flex flex-col'>
                            {itemsBox.imgT && <img src={itemsBox.imgT.src} alt='' />}

                            <div className={`${itemsBox.imgT && itemsBox.imgB && 'bg-[#f5faff]'}  `}>
                                <div className=' container mx-auto p-8 md:p-0 '>
                                    <div className='grid items-center grid-cols-1 md:grid-cols-2  gap-3 md:gap-0'>
                                        <div className={`flex flex-col gap-2 md:gap-4 ${itemsBox.orderClass}`}>
                                            <span className='text-md md:text-3xl font-bold'>{itemsBox.title}</span>
                                            <div className='flex flex-col text-xs md:text-lg font-semibold'>
                                                {itemsBox.texts.map((itemsText, index) => (
                                                    <span key={index}>{itemsText}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className={`flex relative  ${
                                                itemsBox.imgT && itemsBox.imgB ? 'justify-end' : 'justify-center'
                                            }`}
                                        >
                                            <div
                                                className={` flex items-start gap-12 absolute ${
                                                    itemsBox.imgT && itemsBox.imgB ? 'right-0' : 'left-0'
                                                }  top-0`}
                                            >
                                                <Parallax speed={4} easing='easeInQuad'>
                                                    <div className='p-1 rounded-full bg-red-600' />
                                                </Parallax>
                                                <Parallax speed={-2} easing='easeInQuad'>
                                                    <div className='p-1 rounded-full bg-yellow-600' />
                                                </Parallax>
                                                <Parallax speed={5} easing='easeInQuad'>
                                                    <div className='p-1 rounded-full bg-blue-600' />
                                                </Parallax>
                                                <Parallax speed={-3} easing='easeInQuad'>
                                                    <div className='p-1 rounded-full bg-green-600' />
                                                </Parallax>
                                                <Parallax speed={6} easing='easeInQuad'>
                                                    <div className='p-1 rounded-full bg-cyan-600' />
                                                </Parallax>
                                            </div>
                                            <img src={itemsBox.img.src} className=' sm:max-w-lg' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {itemsBox.imgB && <img src={itemsBox.imgB.src} alt='' />}
                        </div>
                    </Parallax>
                ))}

                <Parallax speed={-5}>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='text-md md:text-3xl font-bold'>Ready To Build Your Community?</h1>
                        <XButton className=' border-2 px-5 md:px-8 h-10 md:h-12 bg-[#ff52bf] hover:bg-white hover:border-2 hover:border-[#ff52bf] hover:text-[#ff52bf] hover:shadow-md rounded-full transition-all duration-500'>
                            <span className='text-xs md:text-md'>Get started for free!</span>
                        </XButton>
                    </div>
                </Parallax>

                {/* footer */}
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
            </div>
        </div>
    )
}

export { LandingTemplate }
