import React from 'react';
import './Special.css';

const Special = () => {
    const Text = 'It may be a good thing, or vice versa, but this will give us a lot of experience, which will help us go up strong, develop more , provide the best services for you. It may be a good thing, or vice versa, but this will give us a lot of experience, which will help us go up strong, develop more, provide the best services for you.';
  return (
    <div className='sp-grid'>
        <div className='item-big'>
            <div className='box-tittle'>
            <h1 className='box-h1'>WELLES</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
        </div>
        <div className='grid-mini'>

            <div className='grid-min'>
            <div className='item-small is1' >
            <div className='box-tittle'>
            <h1 className='box-h1'>M.I.C.E</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            <div className='item-small is2'>
            <div className='box-tittle'>
            <h1 className='box-h1'>LUXURY</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            </div>

            <div className='grid-min'>
            <div className='item-small is3'>
            <div className='box-tittle'>
            <h1 className='box-h1'>HERITAGES</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            <div className='item-small is4'>
            <div className='box-tittle'>
            <h1 className='box-h1'>REPONSIBLE TRAVEL</h1>
            <hr className='box-hr'/>
            </div>
            <p className='box-p'>{Text}</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Special