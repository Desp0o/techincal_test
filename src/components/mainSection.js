import searchIcon from '../images/icons/search_ico.png'
import RightSide from './rightSide'
import ValueExchange from './valueExchange'


export default function MainSection(){
    
    return(
        <div className='w-full flex pl-[120px] pr-[120px]'>

            {/* left side */}
            <div className="relative">

                {/* texts */}
                <div className="pt-[64px]">
                    <div className="w-[573px] flex flex-col gap-[32px]">
                        <p className="text-light-grey text-[42px] font-[500] font-[firago] leading-[56px]">მიიღე ყველა <span className="text-accent-red">მომსახურება</span> სწრაფად და მარტივად</p>
                        <p className="text-[16px] text-medium-grey leading-[24px] font-[firago]">მომსახურების ფართო არჩევანი, ნებისმიერ დროს, ნებისმიერ ადგილას აღმოაჩინეთ საუკეთესო ონლაინ ბაზრის გამოცდილება</p>
                    </div>
                </div>

                {/* search input & location, weather, exchange*/}
                <div className='absolute my-[80px] z-10'>

                   <>
                        {/* input */}
                        <input 
                            type="text"
                            className="w-[707px] h-[64px] rounded-[16px] text-[#6F6F6F] font-[firago] bg-dark-grey pt-[12px] pb-[12px] pl-[48px] pr-[16px] box-border"
                            placeholder='მოძებნე მომსახურება'
                        />
                        
                        {/* search icon*/}
                        <div className='flex gap-[8px] items-center absolute top-[20px] left-[16px]'>
                            <img src={searchIcon} alt='search icon' />
                        </div>

                        {/* button */}
                        <div className='w-[71px] h-[36px] bg-accent-red rounded-[8px] flex items-center justify-center absolute top-[14px] right-[16px]'>
                            <p className='text-[14px] text-light-grey leading-[20px] font-[firago] cursor-pointer'>ძიება</p>
                        </div>
                   </>

                        <ValueExchange />

                </div>

                


            </div>


            {/* right side */}
            <RightSide />
        </div>
    )
}