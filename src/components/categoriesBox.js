

export default function Box(props){
    return(
        <div className={`w-[136px] h-[129px] ${props.bg} rounded-[16px] box-border cursor-pointer
                        border-[2px] ${props.border} flex items-center justify-center flex-col gap-[24px]`}
        >
            <img src={props.img} />
            <p className="text-[14px] text-light-grey font-[700] font-[firago]">{props.title}</p>
        </div>
    )
}