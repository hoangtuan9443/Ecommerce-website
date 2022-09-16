import * as Actions from '../controllers/actionTypes'
import '../App.css'
import LineCart from './LineCart'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const titleCart = [
    {
        name: 'Tên sản phẩm',
        class: 'w-[340px]'
    },
    {
        name: 'Đơn giá',
        class: 'w-[160px]'
    },
    {
        name: 'Số lượng',
        class: 'w-[120px]'
    },
    {
        name: 'Tổng trước thuế',
        class: 'w-[200px]'
    },
    {
        name: 'Tổng thuế',
        class: 'w-[150px]'
    },
    {
        name: 'Thành tiền',
        class: 'w-[200px]'
    }
]

const MyCart = () => {
    const dataCart = useSelector(state => state.myCartReducer.myCart)
    const dataPrice = useSelector(state => state.myCartReducer.price)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const handleDataCart = (e) => {
        if(dataPrice === 0) return toast.error('Vui lòng thêm sản phẩm vào túi !', {autoClose: 2000})
        dispatch({
            type: Actions.CREATE_NEW_DON_HANG,
            data: {
                cart: dataCart,
            }
        })
        navigation('/MyOrders')
    }

    return (
        <>
            <div className='w-[1200px] max-h-[440px] shadow-xl mt-[85px] mx-auto border-[1px]'>
                <div className='flex flex-1 h-[20px] text-black font-semibold text-lg m-2 content-center text-center'>
                    {titleCart.map((tag, id) => {
                        return(
                            <span key={id} className={tag.class}>{tag.name}</span>
                        )
                    })}
                </div>
                <div className='max-h-[300px] overflow-y-scroll'>
                    {dataCart.map((item, index) => {
                        return (
                            <LineCart 
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            nums={item.nums}
                            taxes={item.taxes}
                            />
                        )
                    })}
                </div>
                <div className= 'text-black bottom-0 my-4 ml-5 right-[160px] text-lg font-semibold flex '>
                    <span className=''>Thành tiền:</span>
                    <span className='ml-2'>{dataPrice}.000₫</span>
                </div>
                <div className= 'text-black text-center font-semibold hover:scale-105 mb-3'>
                    <button className='py-[5px] p-3 bg-[#909090] rounded hover:bg-[#888]' onClick={handleDataCart}>Thanh toán</button>
                </div>
            </div>
            <ToastContainer />
        </>
        
    )
}

export default MyCart