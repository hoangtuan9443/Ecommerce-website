import InputForm from "./InputForm"
import { useState } from "react"
import { useDispatch } from "react-redux"
import * as Actions from '../controllers/actionTypes'
import '../css/form.css'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const infoInput = [
    {   
        title: 'Nhập tên sản phẩm',
        name: 'name',
        type: 'text',
        placeholder: 'Nhập tên sản phẩm ít nhất 3 kí tự',
        pattern: '^.{3,}',
        error: 'Vui lòng nhập tên sản phẩm ít nhất 3 kí tự'
    },
    {   
        title: 'Chọn hình ảnh cho sản phẩm',
        name: 'img',
        type: 'text',
        placeholder: 'Nhập link ảnh sản phẩm',
        pattern: "https?://.+",
        error: 'Vui lòng nhập link hình ảnh có tồn tại'
    },
    {
        title: 'Nhập giá tiền cho sản phẩm',
        name: 'price',
        type: 'text',
        pattern: "^.{3,}",
        placeholder: 'Nhập giá tiền cho sản phẩm',
        error: 'Vui lòng nhập giá tiền cho sản phẩm và giá tiền sản phẩm phải lớn hơn tiền thuế'    
    },
    {
        title: 'Nhập tiền thuế cho sản phẩm',
        name: 'taxes',
        type: 'text',
        pattern: "^.{1,}",
        placeholder: 'Nhập tiền thuế cho sản phẩm',
        error: 'Vui lòng nhập tiền thuế cho sản phẩm'
    }
]

const Form = () => {
    const [formData, setFormData] = useState({name: '', img: '', price: '', taxes: ''})
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleOnInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Number(formData.price) < Number(formData.taxes)) return toast.error('Vui lòng nhập giá tiền lớn hơn tiền thuế',{autoClose: 2000})
        else{
            console.log(formData)
            dispatch({
                type: Actions.CREATE_NEW_SAN_PHAM,
                payload: {
                    data: {
                        name: formData.name.toUpperCase(),
                        img: formData.img,
                        price: formData.price,
                        taxes: formData.taxes
                    }
                }
            })
            setFormData({name: '', img: '', price: '', taxes: ''})
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center">
            <ToastContainer />
            <form onSubmit={handleSubmit}
            className="w-[400px] min-h-[90%] my-auto flex flex-col justify-center px-[50px] bg-white rounded-[4px]">
                {infoInput.map((item, index) => {
                    if(index < 2) 
                    return (
                        <div key={index}>
                            <InputForm 
                            title={item.title} 
                            name={item.name}
                            type={item.type}
                            value={formData[item.name]}
                            placeholder={item.placeholder}
                            pattern={item.pattern}
                            error={item.error}
                            onChange={handleInputChange}
                            />
                        </div>
                    )
                    else return (
                        <div key={index}>
                            <InputForm 
                            title={item.title} 
                            name={item.name}
                            type={item.type}
                            value={formData[item.name]}
                            placeholder={item.placeholder}
                            pattern={item.pattern}
                            error={item.error}
                            onChange={handleInputChange}
                            onInput={handleOnInput}
                            />
                        </div>
                    )
                })}
                <button type="submit"
                className='w-[300px] p-4 bg-[#777] rounded-[4px] mt-5 mb-3 font-bold text-white hover:bg-[#909090]'>
                    Xác Nhận
                </button>
            </form>
        </div>
    )
}

export default Form