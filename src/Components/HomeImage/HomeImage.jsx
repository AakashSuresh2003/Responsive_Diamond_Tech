import React from 'react';
import laser from '../../assets/laser.jpg'
import './HomeImage.css'

export const HomeImage = () => {
  return (
    <div>
      <div className='imageCom'>
        <img src={laser} alt="HomeImage" width="100%" height="100%"/>
    </div>
    </div>
  )
}
