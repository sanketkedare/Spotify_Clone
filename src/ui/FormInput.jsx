import React from 'react';

const FormInput = ({labelText, inputType,inputPlaceholder, required,value, onChange, name}) => {
    return(
        <div className="my-7">
            <div>
                <label htmlFor="" className="font-bold text-[16px] text-black">{labelText}</label>
                {
                    required ? <sup className="text-red-500 text-[12px]">*</sup> : ""
                }
            </div>

            <div className="my-3">
                <input type={inputType} placeholder={inputPlaceholder} className="text-black border rounded-md px-3" required 
                name = {name} value = {value} onChange = {onChange} />
            </div>
        </div>
    )
}

export default FormInput;