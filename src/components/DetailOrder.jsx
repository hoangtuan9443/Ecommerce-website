import ParkageOrder from "./ParkageOrder"

const dataCol = [{
    name: 'Tên sản phẩm',
    num: 'Số lượng',
    price: 'Đơn giá',
    sumPrice: 'Tổng tiền trước thuế',
    sumTaxes: 'Tổng tiền thuế'
}]

const DetailOrder = () => {
    return (
        <div className="w-[100%] my-[80px]">
            {dataCol.map((item, index) => {
                return (
                    <div className="w-[1210px] mx-auto shadow-lg border-[1px] border-solid py-2" key={index}>
                        <div className="flex flex-1 content-center mx-3 text-center">
                            <span className="w-[400px]">{item.name}</span>
                            <span className='ml-[10px] w-[150px]'>{item.price}</span>
                            <span className='ml-[10px] w-[150px]'>{item.num}</span>
                            <span className='ml-[10px] w-[200px]'>{item.sumPrice}</span>
                            <span className='ml-[10px] w-[150px]'>{item.sumTaxes}</span>
                        </div>
                    </div>
                )
            })
            }
            <ParkageOrder />
        </div>
    )
}

export default DetailOrder