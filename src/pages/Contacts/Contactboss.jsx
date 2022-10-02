import React from 'react'

const ContactBoss = ({item}) => {
  return (
    <div className='ct-boss'>
        <img src={item.logo}/>
        <p>{item.name}</p>

    </div>
  )
}

export default ContactBoss