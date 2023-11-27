import { type TBoxDetail } from '..'

import {
    bgSectionBottomDesktop1,
    bgSectionBottomDesktop2,
    bgSectionTopDesktop1,
    bgSectionTopDesktop2,
    illustrationFlowingConversation,
    illustrationGrowTogether,
    illustrationYourUsers,
} from '@public/images'

const boxDetailData: TBoxDetail[] = [
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

export default boxDetailData
