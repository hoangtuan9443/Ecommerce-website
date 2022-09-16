import * as Actions from '../controllers/actionTypes'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Item = ({id, img, name, price, taxes}) => {
    const [value, setValue] = useState(1)
    const dispatch = useDispatch()
    const handleNumOfProduct = (e) => {
        if(e.target.value < 1){
            e.target.value = 1
        }
        setValue(e.target.value)
    }
    const handleClick = (e) => {
        dispatch({
            type: Actions.ADD_NEW_INTO_CART,
            payload: {
                id: id,
                name: name,
                img: img,
                price: price,
                taxes: taxes,
                nums: value
            }
        })
        setValue(1)
        toast.success('Thêm sản phẩm thành công', {autoClose: 2000})
    }

    return (
        <>
            <div id={id} className='w-[260px] m-4 text-sm overflow-hidden border-[1px] border-solid shadow-lg'>
                <div className='hover:scale-x-110 w-[260px] overflow-hidden duration-300'>
                    <img src={img} />
                </div>
                <div className="text-[#333] font-semibold h-[40px] ml-3">
                    <span>{name}</span>
                </div>
                <label className="text-[#c54934] font-bold mx-3">{price}.000₫</label>
                <input type='number' value={value} onChange={handleNumOfProduct} className='rounded-[4px] border-solid border-[1px] border-gray-400 mt-2 px-1 w-[60px]'/>
                <div className="p-[6px] bg-[#777] rounded-[4px] my-3 font-bold text-white hover:bg-[#909090] text-center mx-16 cursor-pointer" onClick={handleClick}>
                    <button>Thêm</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Item