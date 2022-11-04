import React from 'react';
import  {ImLocation2} from 'react-icons/im';
import  {MdOutlineMyLocation} from 'react-icons/md';
import  {BsCalendar} from 'react-icons/bs';
import  {BsFillPeopleFill} from 'react-icons/bs';
import './Search.css';

const Search = () => {
  return (
    <div className='search-container'>
       <form className='search-main'>
        <div className='search-area'>
            <ImLocation2 className='icons'/>
            <input className='search-input' placeholder='Viet Nam'/>
            <MdOutlineMyLocation className='icons'/>
        </div>
        <hr className='line'/>
        <div className='date-pick'>
            <BsCalendar className='icons'/>
            <input className='date-in' placeholder='Start Date'/>
            -
            <input className='date-out' placeholder='End Date'/>
        </div>
        <hr className='line'/>
        <div className='pick-number'>
            <BsFillPeopleFill className='icons'/>
            <button className='number-p'>Guest : 1</button>
        </div>
        <button type='submit' className='submit'>Find tour</button>
       </form>
    </div>
  )
}

export default Search