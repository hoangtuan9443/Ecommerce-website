import LineOrder from './LineOrder'
import { useSelector } from 'react-redux'
import React from 'react'

const ParkageOrder = () => {
    const dataLineOrder = useSelector(state => state.lineOrdersReducer.lineOrder)
    const dataOrder = useSelector(state => state.ordersReducer.itemsOrder)
    const numOrder = useSelector(state => state.lineOrdersReducer.num)
    console.log(dataOrder, dataLineOrder)

    return (
            dataLineOrder.map((list, i) => {
                return dataOrder.map((order, a) => {
                            if (a !== i || a !== numOrder) return
                            return <div className="w-[1210px] mx-auto shadow-lg border-[1px] border-solid py-2 mt-4" key={i}>
                            <h1 className="font-bold ml-3 mb-3">{order.name}</h1>
                            {list.map((item, index) => {
                                return (
                                    <LineOrder 
                                    key={index}
                                    name={item.name}
                                    nums={item.nums}
                                    price={item.price}
                                    taxes={item.taxes}
                                    />
                                )
                            })}
                            <div className='flex flex-1 mx-3 font-bold mr-32 mt-3'>
                                <span className='w-[130px]'>Tổng trước thuế: </span>
                                <span className='ml-2 w-[90px] text-right'>{order.sumPrice}.000₫</span>
                            </div>
                            <div className='flex flex-1 mx-3 font-bold mr-32'>
                                <span className='w-[130px]'>Tổng thuế: </span>
                                <span className='ml-2 w-[90px] text-right'>{order.sumTaxes}.000₫</span>
                            </div>
                            <div className='flex flex-1 mx-3 font-bold mr-32'>
                                <span className='w-[130px]'>Tổng tiền: </span>
                                <span className='ml-2 w-[90px] text-right'>{order.sumPrice + order.sumTaxes}.000₫</span>
                            </div>
                        </div>
                    })
            })
    )
}

export default ParkageOrder