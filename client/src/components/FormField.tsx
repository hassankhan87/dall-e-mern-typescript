import React from 'react'

interface Props
{
    labelName:string
    name:string
    type:string
    placeholder:string
    value:string
    handleChange:(e:React.FormEvent<HTMLInputElement>)=>void
    isSurpriseMe?:boolean
    handleSurpriseMe?:()=>void
}
const FormField:React.FC<Props> = ({labelName, name, type, placeholder, value, handleChange, isSurpriseMe: isSurpriseMe, handleSurpriseMe: handleSurpriseMe}:Props) => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <label htmlFor={name} className="text-sm font-medium text-gray-900 block ">
                {labelName}
            </label>
            {isSurpriseMe && (
                <button type='button' onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black">Surprise me</button>
            )}
        </div>
        <input id={name} type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} required 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3" />
    </div>
  )
}

export default FormField