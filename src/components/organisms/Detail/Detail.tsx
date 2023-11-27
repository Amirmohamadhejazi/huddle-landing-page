import React, { type FC } from 'react'
import { Parallax } from 'react-scroll-parallax'

import XCardDetail from '@molecules/XCardDetail'

import { type TBoxDetail } from './resources'
import boxDetailData from './resources/data'

const Detail: FC = () => {
    return boxDetailData.map((itemsBox: TBoxDetail) => (
        <Parallax speed={itemsBox.parallax} key={itemsBox.id}>
            <XCardDetail dataCard={itemsBox} />
        </Parallax>
    ))
}

export default Detail
