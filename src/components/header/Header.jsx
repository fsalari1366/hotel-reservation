import { useState } from 'react'
import {MdLocationOn} from 'react-icons/md';
import { HiCalendar, HiSearch } from 'react-icons/hi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import GuestOptionList from '../GuestOptionList/GuestOptionList';

const Header = () => {
    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOptions = (name, operation) =>{
        setOptions(prev => {
            return {...prev, 
            [name]: operation === "inc" ? options[name] + 1 : options[name] - 1};
        });
    };

  return (
    <div className='header'>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <MdLocationOn className='headerIcon locationIcon' />
                <input type='text' placeholder='Where to go?'
                value={destination}
                onChange={e => setDestination(e.target.value)}
                className='headerSearchInput'
                name='destination' 
                id='destination'
                />
                <span className='seperator'></span>
            </div>
            <div className="headerSearchItem">
            <HiCalendar className='headerIcon dateIcon' />
            <div className="dateDropDown"></div>
            <span className='seperator'></span>
            </div>
            <div className="headerSearchItem">
                <div id="optionDropDown"
                 onClick={() => setOpenOptions(!openOptions)}
                >{options.adult} adult &bull; {options.children}
                 children &bull; {options.room} room</div>
                  {openOptions && <GuestOptionList 
                  options={options}
                  handleOptions={handleOptions}
                  setOpenOptions={setOpenOptions}
                   />}
                <span className='seperator'></span>
            </div>
            <div className="headerSearchItem">
                <button className='headerSearchBtn'>
                <HiSearch className="headerIcon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header