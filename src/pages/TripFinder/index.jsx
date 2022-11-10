import React from 'react';
import { useState } from 'react';
import './style.css';
import {ImSearch} from 'react-icons/im';

const TripFinder = () => {

    const [showli1,setshowli1]=useState('hidden');
    const [showli2,setshowli2]=useState('hidden');
    const [showli3,setshowli3]=useState('hidden');
    const [showli4,setshowli4]=useState('hidden');
    const [showli5,setshowli5]=useState('hidden');
    const Showli = (a) =>{
        switch(a) {
            case 1:
                {(showli1=='showli')?setshowli1('hiddenli'):setshowli1('showli')}
              break;
            case 2:
                {(showli2=='showli')?setshowli2('hiddenli'):setshowli2('showli')}
              break;
            case 3:
                {(showli3=='showli')?setshowli3('hiddenli'):setshowli3('showli')}
                break;
            case 4:
                {(showli4=='showli')?setshowli4('hiddenli'):setshowli4('showli')}    
            break;
                case 5:
                {(showli5=='showli')?setshowli5('hiddenli'):setshowli5('showli')}
            break;
            }
        
    }

    const [pick,setpick]=useState('nopick');
    const Pick =()=>{
        {(pick=='pick')?setpick('nopick'):setpick('pick')}
    }

  return (
    <div className='trip-finder'>
        <div className='div-img-head'>
            <div className='finder-text'>
            <h1 className='finder-h1'>TRIPFINDER</h1>
            <p className='finder-p'>SELECT YOUR PERFECT EXERIENCE</p>
            </div>
        </div>

        <div className='finder-container'>
            <div className='finder-select'>
                <div className='finder-key'>
                    <ImSearch className='finder-icon'/>
                    <input className='finder-value' placeholder='Find your perfect trip'/>
                </div>
                <p>FILTER VIEW</p>
                <div className='find-des fc '>
                    <p onClick={()=>Showli(1)}>DESTINATION</p>
                    <ul className={`find-des-list fl  ${showli1}`}>
                    <li className={pick} onClick={()=>Pick()}>Viet Nam</li>
                    <li className={pick} onClick={()=>Pick()}>Thai Lan</li>
                    <li className={pick} onClick={()=>Pick()}>Lao</li>
                    <li className={pick} onClick={()=>Pick()}>Cambodia</li>    
                    </ul>     
                </div>
                <div className='find-style fc'>
                    <p onClick={()=>Showli(2)}>TRAVEL STYLE</p>
                    <ul className={`find-style-list fl ${showli2}`}>
                    <li className={pick} onClick={()=>Pick()}>Classic</li>
                    <li className={pick} onClick={()=>Pick()}>Family</li>
                    <li className={pick} onClick={()=>Pick()}>Beach</li>
                    <li className={pick} onClick={()=>Pick()}>Short Trip</li>
                    <li className={pick} onClick={()=>Pick()}>Culinary</li>
                    <li className={pick} onClick={()=>Pick()}>Adventure</li>
                    <li className={pick} onClick={()=>Pick()}>Cruises</li>
                    </ul>
                </div>
                <div className='find-special fc '>
                    <p onClick={()=>Showli(3)}>SPECIAL DEAL</p>
                    <ul className={`find-special-list fl ${showli3}`}>
                    <li className={pick} onClick={()=>Pick()}>Welles</li>
                    <li className={pick} onClick={()=>Pick()}>Mice</li>
                    <li className={pick} onClick={()=>Pick()}>Luxury</li>
                    <li className={pick} onClick={()=>Pick()}>Heritages</li>
                    <li className={pick} onClick={()=>Pick()}>Reponsible travel</li> 
                    </ul>
                </div>
                <div className='find-length fc'>
                    <p onClick={()=>Showli(4)}>TOUR LENGTH</p>
                    <ul className={`find-length-list fl ${showli4}`}>
                    <li className={pick} onClick={()=>Pick()}>2 - 5 day</li>  
                    <li className={pick} onClick={()=>Pick()}>6 -10 day</li>
                    <li className={pick} onClick={()=>Pick()}>11 -15 day</li> 
                    <li className={pick} onClick={()=>Pick()}>Over 16 day</li>
                    </ul>
                </div>
                <div className='find-cost fc'>
                    <p onClick={()=>Showli(5)}>BUDGET</p>
                    <ul className={`find-cost-list fl ${showli5}`}>
                    <li className={pick} onClick={()=>Pick()}>under 300 $</li>
                    <li className={pick} onClick={()=>Pick()}>300 - 900 $</li>
                    <li className={pick} onClick={()=>Pick()}>900 - 1500 $</li>
                    <li className={pick} onClick={()=>Pick()}>1500 $ up</li>
                    </ul>
                </div>

            </div> 
            <div className='finder-result'>

            </div>
        </div>
    </div>
  )
}

export default TripFinder
