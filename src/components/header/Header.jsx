import React from 'react'
import {MdLocationOn} from 'react-icons/md';
import { HiCalendar, HiSearch } from 'react-icons/hi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  return (
    <div className='header'>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <MdLocationOn className='headerIcon locationIcon' />
                <input type='text' placeholder='Where to go?'
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
                <div id="optionDropDown">1 adult &bull; 2 children &bull; 0 room</div>
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