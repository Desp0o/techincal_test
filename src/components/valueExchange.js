import locationIco from '../images/icons/location_ico.png'
import weatherIco from '../images/icons/wheater_ico.png'
import weatherDot from '../images/icons/weatherDot.png'
import exchange from '../images/icons/exchange_ico.png'
import USD from '../images/icons/USD.png'
import EUR from '../images/icons/EUR.png'

export default function ValueExchange(){
    return(
        <div className='my-[24px] flex gap-[24px]'>

            {/* location */}
            <div className='flex gap-[8px] items-center'>
                <img src={locationIco} alt='location icon' />
                <p className='text-[14px] text-medium-grey font-[firago] leading-[20px]'>Tbilisi,Georgia</p>
            </div>

            {/* wetaher */}
            <div className='flex gap-[8px] items-center'>
                <img src={weatherIco} alt='weather icon' />

                <div className='relative flex gap-[2px]'>
                    <p className='text-[14px] text-medium-grey font-[firago] leading-[20px]'>5</p>
                    <img src={weatherDot} alt='icon' className='w-[4px] h-[4px]'/>
                    <p className='text-[14px] text-medium-grey font-[firago] leading-[20px]'>C</p>
                </div>
            </div>

            {/* USD EUR */}
            <div className='flex gap-[8px] items-center'>
                <img src={exchange} alt='icon' />
                <img src={USD} alt='icon' />
                <p className='text-[14px] text-medium-grey font-[firago] leading-[20px]'>2.61</p>
                <img src={EUR} alt='icon' />
                <p className='text-[14px] text-medium-grey font-[firago] leading-[20px]'>2.77</p>
            </div>
        </div>
    )
}