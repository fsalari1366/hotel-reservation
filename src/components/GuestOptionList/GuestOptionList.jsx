import { useRef } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import useOutsideClick from '../../hooks/useOutsideClick'

const GuestOptionList = ({options, handleOptions, setOpenOptions}) => {
    const optionsRef = useRef()
    useOutsideClick(optionsRef, "optionDropDown" ,() => setOpenOptions(false));
  return (
    <div className='guestOptions' ref={optionsRef}>
        <OptionItem handleOptions={handleOptions} type="adult" options={options} minLimit={1} />
        <OptionItem handleOptions={handleOptions} type="children" options={options} minLimit={0} />
        <OptionItem handleOptions={handleOptions} type="room" options={options} minLimit={1} />
    </div>
  )
}
export default GuestOptionList

export function OptionItem({options, type, minLimit, handleOptions}){
  return (
    <div className="guestOptionItem">
        <span className='optionText'>{type}</span>
        <div className='optionCounter'>
            <button className='optionCounterBtn' 
               disabled={options[type] <= minLimit} 
               onClick={() => handleOptions(type, "dec")}
            >
            <HiMinus className='icon' />
            </button>
            <span className='optionCounterNumber'>{options[type]}</span>
            <button className='optionCounterBtn'
               onClick={() => handleOptions(type, "inc")}
            >
            <HiPlus className='icon' />
            </button>
        </div>
        </div>
  )
}