import React from 'react'
import Bg from "./img/hero1.jpg"
import Im from "./img/4.jpg"

function ProfilePhoto() {
  return (
    <div>
      <img className='BGG' src={Bg}  />
      <img  src={Im}  />
    </div>
  )
}

export default ProfilePhoto
