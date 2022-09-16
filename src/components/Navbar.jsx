import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import MyCart from './MyCart'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const dataNum = useSelector(state => state.myCartReducer.num)
    const handleShow = () => {
        setShowCart(!showCart)
    }

    return (
        <div className="grid grid-cols-3 py-4 fixed top-0 w-[100%] bg-[#909090] text-white text-lg z-[1]">
            <NavLink to='/' className="flex justify-center text-3xl">TOMAHOSHOP</NavLink>
            <div className='grid grid-cols-2 cursor-pointer'>
                <NavLink to='/MyOrders' className="flex justify-end pt-1 hover:text-[#333]">Đơn hàng của tôi</NavLink>
                <NavLink to ='/CreateNew'className="flex justify-end hover:text-[#333] pt-1">{'> Thêm sản phẩm <'}</NavLink>
            </div>
            <div className="flex justify-center pt-1 relative"> 
                <NavLink to='/MyCart'>
                    <FontAwesomeIcon icon={faCartShopping} className='mx-2 cursor-pointer hover:text-[#333] w-[25px] h-[25px]' onClick={handleShow}/>
                </NavLink>
                <div 
                className='bg-red-500 w-[15px] h-[15px] rounded-full text-white text-xs text-center font-semibold absolute ml-5 cursor-pointer'  
                onClick={handleShow}>
                    {dataNum}
                </div>
                {/* {showCart && <div className='absolute top-[34px] cart'></div>}
                {showCart && <MyCart />} */}
            </div>
        </div>
    )
}

export default Navbar