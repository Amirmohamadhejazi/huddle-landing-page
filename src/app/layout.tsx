import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { RootProvider } from '@partials/providers/RootProvider'

import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Huddle landing',
    description: 'huddle landing app',
}

const RootLayout = ({ children }: TWrapperWithChildrenType) => {
    return (
        <html lang='en' dir='rtl'>
            <body className={inter.className} dir='ltr'>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default RootLayout
