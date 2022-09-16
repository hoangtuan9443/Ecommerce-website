import '../css/form.css'
const InputForm = ({name, title, type, placeholder, onChange, pattern, value, error, onInput}) => {
    return (
        <div> 
           <div className="my-2"> 
               <label className="w-[350px]">{title}</label>
            </div>
            <input 
            className="rounded-[4px] border-solid border-[1px] border-gray-400 px-4 py-3 w-[300px]"
            type={type} 
            placeholder={placeholder} 
            name={name}
            onChange={onChange}
            value={value}
            pattern={pattern}
            onInput={onInput}
            required
            />
             <div className={`w-[300px] warning`}>
                <span className="text-sm text-red-500">{error}</span>
            </div>
        </div>
    )
}
export default InputForm