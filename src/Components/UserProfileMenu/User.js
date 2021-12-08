import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
 import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'


export const user =  [
    { name: 'Profile',icon: faUser},
    { name: 'My Listing',icon: faClipboardCheck},
    { name: 'Saved homes',icon: faHandHoldingHeart},
    { name: 'Saved search',icon: 'fa'},
    { name: 'Messages',icon: faCommentAlt},
    { name: 'Notifications',icon:"far fa-cogs"},
    { name: 'Billing',icon: faCalculator},
    { name: 'Analytics',icon:faChartPie},
    { name: 'Blog',icon: faListAlt}
]

export const link ={
    name:"Alex Assenmacher",
    url: 'https://www.udwell.com/p.',
    icon: faClone,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQslg390P0p9m1gi8dH4UTbmHLfKtpWqW4A&usqp=CAU"
}