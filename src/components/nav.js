import logo from '../images/logo.png'
import mode from '../images/icons/mode_ico.png'

export default function Navbar(){
    return(
        <div className="w-full h-[70px] pr-[120px] pl-[120px] flex items-center justify-between">

                {/* logo */}
                <img src={logo} alt='main logo' />

                {/* left side  */}
                <div className='flex h-full items-center gap-[24px]'>

                    {/* log in button */}
                    <div className='w-[69px] h-[39px] rounded-[4px] flex items-center justify-center'>
                        <p className='text-light-grey text-[14px] leading-[20px] font-[firago]'>შესვლა</p>
                    </div>

                    {/* registration button */}
                    <div className='w-[126px] h-[36px] bg-accent-red flex items-center justify-center rounded-[8px]'>
                        <p className='text-light-grey text-[14px] font-[firago] leading-[20px]'>რეგისტრაცია</p>
                    </div>

                    {/* mode switch */}
                    <img src={mode} alt='mode switch' />

                </div>
        </div>
    )
}