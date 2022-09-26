import React from 'react';
import Sellitem from '../Sellitem';

const Listrender = (database) => {
  return (
    <div>
        {database.map(item =>{
        return <Sellitem item={item}/>
          })}
    </div>
  )
}

export default Listrender