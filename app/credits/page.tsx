
import React from 'react'

import { ButtonDemo } from '../components/ButtonDemo'

import { CartaCredits } from '../components/CardCredits'


const page = () => {
  return (
    <div className='grid w-full gap-4 h-screen  place-items-center'>
       <CartaCredits />

     
       <ButtonDemo elLink="/" buttonText="Atras"  />
    </div>
  )
}

export default page
