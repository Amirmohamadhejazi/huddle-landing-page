/* eslint-disable @next/next/no-img-element */
'use client'
import { Parallax } from 'react-scroll-parallax'

import { XButton } from '@atoms/XButton'

import {
    bgFooterTopDesktop,
    bgSectionBottomDesktop1,
    bgSectionBottomDesktop2,
    bgSectionTopDesktop1,
    bgSectionTopDesktop2,
    iconCommunities,
    illustrationFlowingConversation,
    illustrationGrowTogether,
    illustrationYourUsers,
    logo,
    screenMessages,
    screenMockups,
} from '@public/images'
// import { Parallax } from 'react-scroll-parallax'
const LandingTemplate = () => {
    return (
        <div className=' flex flex-col gap-5'>
            {/* header */}
            <div className='container mx-auto '>
                <div className='flex items-center justify-between mt-8'>
                    <div className='w-28'>
                        <img src={logo.src} alt='' className='object-cover' />
                    </div>
                    <XButton className=' border-2 text-[#ff8fd8] border-[#ff8fd8] hover:shadow-md rounded-full'>
                        try it free!
                    </XButton>
                </div>

                <div className='flex flex-col gap-8 text-center mt-28'>
                    <Parallax speed={-2} className='z-20'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-4xl font-bold'>Build The Community Your Fanse Will Loves</h1>
                            <div className='flex flex-col text-center text-lg font-light'>
                                <span>Huddle re-imagines the way we build communities. You have a</span>
                                <span>voice, but so does youe audience. Create connections with your</span>
                                <span>users as you engage in genuine discussion.</span>
                            </div>

                            <div>
                                <XButton className=' border-2 px-8 h-12 bg-[#ff52bf] hover:shadow-md rounded-full'>
                                    <span>Get started for free!</span>
                                </XButton>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax speed={3}>
                        <div className='flex items-center justify-center place-content-center'>
                            <img src={screenMockups.src} alt='' className='object-cover ' />
                        </div>
                    </Parallax>
                    <div className='flex justify-between mx-32'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex  items-start  flex-col'>
                                <div>
                                    <img src={iconCommunities.src} alt='' />
                                </div>
                                <span className='text-6xl font-semibold'>1.4K+</span>
                            </div>
                            <span className='text-lg font-light'>Communities Formed</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-start flex-col'>
                                <div>
                                    <img src={screenMessages.src} alt='' />
                                </div>

                                <span className='text-6xl font-semibold'>2.7M+</span>
                            </div>
                            <span className='text-lg font-light'>Messages Sent</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-16 '>
                <Parallax speed={5}>
                    <div className='flex flex-col'>
                        <img src={bgSectionTopDesktop1.src} alt='' />
                        <div className='bg-[#f5faff]'>
                            <div className=' container mx-auto'>
                                <div className='grid grid-cols-2 items-center'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-3xl font-bold'>Grow Together</span>
                                        <div className='flex flex-col font-semibold'>
                                            <span>Generate meaningful discussions with your audience and build</span>
                                            <span>
                                                strong, loyal community. Think of the insightful conversations you
                                            </span>
                                            <span>miss out on with a feedback from.</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={illustrationGrowTogether.src} className='max-w-lg' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={bgSectionBottomDesktop1.src} alt='' />
                    </div>
                </Parallax>

                <Parallax speed={-3}>
                    <div className=' container mx-auto'>
                        <div className='grid grid-cols-2 items-center'>
                            <div className='flex justify-center'>
                                <img src={illustrationFlowingConversation.src} className='max-w-lg' alt='' />
                            </div>
                            <div className='flex items-start justify-center'>
                                <div className='flex flex-col gap-4'>
                                    <span className='text-3xl font-bold'>Flowing Conversations</span>
                                    <div className='flex flex-col font-semibold'>
                                        <span>
                                            You wouldnt paginate a conversation in real life, so why do it online?
                                        </span>
                                        <span>Our theads have just-in-time loading for a more natural flow.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>

                <Parallax speed={5}>
                    <div className='flex flex-col '>
                        <img src={bgSectionTopDesktop2.src} alt='' />
                        <div className='bg-[#f5faff]'>
                            <div className=' container mx-auto'>
                                <div className='grid grid-cols-2 items-center'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-3xl font-bold'>Your Users</span>
                                        <div className='flex flex-col font-semibold'>
                                            <span>it takes no time at all integrate Huddle with your apps</span>
                                            <span>
                                                authentication solution. This means, once signed in to your app, your
                                            </span>
                                            <span>users can start chatting immediately.</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src={illustrationYourUsers.src} className='max-w-xl' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={bgSectionBottomDesktop2.src} alt='' />
                    </div>
                </Parallax>

                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-3xl font-bold'>Ready To Build Your Community?</h1>
                    <XButton className=' border-2 px-8 h-12 bg-[#ff52bf] hover:shadow-md rounded-full'>
                        <span>Get started for free!</span>
                    </XButton>
                </div>

                {/* footer */}
                <div className='flex flex-col '>
                    <img src={bgFooterTopDesktop.src} alt='' />
                    <div className='p-20 text-center text-white text-2xl bg-[#00252e]'></div>
                </div>
            </div>
        </div>
    )
}

export { LandingTemplate }
