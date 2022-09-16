import ParkageOrder from './ParkageOrder'
import InFoOrder from './InFoOrder'

const dataCol = [{
    num: 'STT',
    name: 'Tên đơn hàng',
    sumPrice: 'Tổng tiền trước thuế',
    sumTaxes: 'Tổng tiền thuế',
    total: 'Tổng tiền',
}]

const MyOrder = () => {

    return (
        <div className="w-[100%] my-[80px]">
            {dataCol.map((item, index) => {
                return (
                    <div className="w-[1000px] mx-auto shadow-lg border-[1px] border-solid py-2 bg-slate-400" key={index}>
                    <div className="flex flex-1 content-center text-center mx-auto">
                        <span className="w-[150px]">{item.num}</span>
                        <span className='ml-[10px] w-[200px]'>{item.name}</span>
                        <span className='ml-[10px] w-[200px]'>{item.sumPrice}</span>
                        <span className='ml-[10px] w-[200px]'>{item.sumTaxes}</span>
                        <span className='ml-[10px] w-[200px]'>{item.total}</span>
                    </div>
                </div>
                )
            })
            }
            <InFoOrder />
             {/* <div className="w-[1210px] mx-auto shadow-lg border-[1px] border-solid py-2 mt-4">
                    <h1 className="font-bold ml-3 mb-3">Đơn hàng </h1>
                        {dataLineOrder.map((list, index) => {
                            return (list.map((item, i) => {
                                return (
                                    <LineOrder 
                                    key={i}
                                    name={item.name}
                                    nums={item.nums}
                                    price={item.price}
                                    taxes={item.taxes}
                                    />
                                )
                            }))
                        })}
                    <div className='flex flex-1 mx-3 font-bold mr-32 mt-3'>
                        <span className='w-[135px]'>Tổng trước thuế: </span>
                        <span className='ml-2'>20000.000₫</span>
                    </div>
                    <div className='flex flex-1 mx-3 font-bold mr-32'>
                        <span className='w-[135px]'>Tổng thuế: </span>
                        <span className='ml-2'>20000.000₫</span>
                    </div>
                    <div className='flex flex-1 mx-3 font-bold mr-32'>
                        <span className='w-[135px]'>Tổng tiền: </span>
                        <span className='ml-2'>20000.000₫</span>
                    </div>
            </div> */}
        </div>
    )
}

export default MyOrder