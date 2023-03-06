import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

export default function RightSide(){
    return(
        <div className="absolute pt-[48px] right-[120px] flex gap-[24px]">
            {/* pictures */}
            <div className="flex flex-col gap-[24px]">
                <img src={image1} alt='img-1' />
                <img src={image2} alt='img-1' />
            </div>

            <img src={image3} alt='img-3' className='my-[40px]'/>

        </div>
        
    )
}