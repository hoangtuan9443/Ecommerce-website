const LineOrder = ({id, name, price, nums, taxes}) => {
    return (
            
                <div className="flex flex-1 content-center mx-3 text-center">
                    <span className="w-[400px] truncate text-left">{name}</span>
                    <span className='ml-[10px] w-[150px]'>{price}.000₫</span>
                    <span className='ml-[10px] w-[150px]'>{nums}</span>
                    <span className='ml-[10px] w-[200px]'>{nums*price}.000₫</span>
                    <span className='ml-[10px] w-[150px]'>{taxes*nums}.000₫</span>
                </div>
           
    )
}

export default LineOrder