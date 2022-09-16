
const LineCart = ({img, name, price, nums, taxes}) => {
    return (
        
        <div className="flex flex-1 h-[50px] text-black m-2 content-center text-center">
            <img src={img} className='mr-2'/>
            <span className="truncate mt-[7px] w-[285px]">{name}</span>
            <span className="w-[160px] mt-[7px]">{price}.000₫</span>
            <span className="mt-[7px] w-[120px]">{nums}</span>
            <span className="mt-[7px] w-[200px]">{nums*price}.000₫</span>
            <span className="mt-[7px] w-[150px]">{nums*taxes}.000₫</span>
            <span className="mt-[7px] w-[200px]">{nums*taxes + nums*price}.000₫</span>
        </div>
    )
}

export default LineCart