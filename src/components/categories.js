import Box from "./categoriesBox";

import information from '../images/icons/information_ico.png'
import experts from '../images/icons/expert_ico.png'
import jobico from '../images/icons/job_ico.png'
import coupons from '../images/icons/Coupon_ico.png'
import auto from '../images/icons/auto_ico.png'
import home from '../images/icons/home_ico.png'
import bag from '../images/icons/Bag_ico.png'
import calendar from '../images/icons/Calendar_ico.png'

const catArray = [
    {
        bg: 'bg-gradient-Active',
        border: 'border-accent-red',
        img:`${information}`,
        title: 'ინფორმაცია'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${experts}`,
        title: 'ექსპერტები'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${jobico}`,
        title: 'სამსახური'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${coupons}`,
        title: 'კუპონები'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${auto}`,
        title: 'ავტო'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${home}`,
        title: 'უძრავი ქონება'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${bag}`,
        title: 'მარკეტი'
    },

    {
        bg: 'bg-gradient-deactive',
        border: 'border-dark-grey',
        img:`${calendar}`,
        title: 'ივენთები'
    }
]

export default function Categories(){
    return(
        <div className="w-full pl-[120px] pr-[120px] absolute bottom-[94px] flex flex-col gap-[24px]">
            <p className="text-[20px] leading-[24px] text-light-grey font-[500] font-[firago]">კატეგორიები</p>

            <div className="flex gap-[16px]">
                {catArray.map((item, index) => {
                    return(
                        <Box 
                            key={index}
                            bg={item.bg}
                            border={item.border}
                            img={item.img}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}