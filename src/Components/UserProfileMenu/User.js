import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import {faBlog} from '@fortawesome/free-solid-svg-icons'
 import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons'

export const user =  [
    { name: 'Profile',icon: faUser},
    { name: 'My Listing',icon: faClipboardCheck},
    { name: 'Saved homes',icon: faHandHoldingHeart},
    { name: 'Saved search',icon: faBlog},
    { name: 'Messages',icon: faCommentAlt},
    { name: 'Notifications',icon:faStickyNote },
    { name: 'Billing',icon: faCalculator},
    { name: 'Analytics',icon:faChartPie},
    { name: 'Blog',icon: faListAlt}
]

export const link ={
    name:"Alex Assenmacher",
    url: 'https://www.udwell.com/p.',
    icon: faClone,
    img:'https://blob.sololearn.com/avatars/484068b6-f9bc-43c0-8478-71af5a47066a.jpg'
}