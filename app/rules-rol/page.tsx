
import React from 'react'

import { ButtonDemo } from '../components/ButtonDemo'
import { CartaRules } from '../components/CardRules'

const page = () => {
  return (
    <div className='grid w-full gap-4 h-full  place-items-center'>
       <CartaRules />
     
       
       <ButtonDemo elLink="/char-info" buttonText="Atras"  />
    </div>
  )
}

export default page
