/* eslint-disable @next/next/no-img-element */
'use client'
import Detail from '@organisms/Detail'
import Footer from '@organisms/Footer'
import GetStartFree from '@organisms/GetStartFree'
import Header from '@organisms/Header'

const LandingTemplate = () => {
    return (
        <div className=' flex flex-col gap-5 '>
            {/* header Content */}
            <Header />
            <div className='flex flex-col gap-16 '>
                {/* Detail */}
                <Detail />
                {/* GetStartFree */}
                <GetStartFree />
                {/* footer */}
                <Footer />
            </div>
        </div>
    )
}

export { LandingTemplate }
