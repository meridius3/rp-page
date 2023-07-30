
import React from 'react'
import { CartaChar } from '../components/CardChar'
import { CartaHabilities } from '../components/CardHabilities'
import { ButtonDemo } from '../components/ButtonDemo'
import { CartaUser } from '../components/CardUser'

const page = () => {
  return (
    <div className='grid w-full gap-4 h-full  place-items-center'>
       <CartaUser />
       
     
       <ButtonDemo elLink="/char-info" buttonText="Atras"  />
    </div>
  )
}

export default page
