import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../controllers/actionTypes'
import { NavLink } from 'react-router-dom'

const InFoOrder = () => {
    const dataOrder = useSelector(state => state.ordersReducer.itemsOrder)
    const dispatch = useDispatch()
    const handleDataOrder = (i) => {
        dispatch({
            type: Actions.CHOOSE_ORDER,
            payload: i
        })
    }

    return (
            dataOrder.map((item, index) => {
                return (
                    <div
                    className="w-[1000px] mx-auto shadow-lg border-[1px] border-solid py-2 mt-4 hover:bg-slate-200 cursor-pointer" 
                    onClick={() => handleDataOrder(index)}
                    key={index}>
                        <NavLink to={`/DetailOrder/${index}`} className="flex flex-1 content-center mx-auto text-center">
                            <span className="w-[150px]">{item.id}</span>
                            <span className='ml-[10px] w-[200px]'>{item.name}</span>
                            <span className='ml-[10px] w-[200px]'>{item.sumPrice}.000₫</span>
                            <span className='ml-[10px] w-[200px]'>{item.sumTaxes}.000₫</span>
                            <span className='ml-[10px] w-[200px]'>{item.sumTaxes + item.sumPrice}.000₫</span>
                        </NavLink>
                    </div>
                )
            })
    )
}

export default InFoOrder

