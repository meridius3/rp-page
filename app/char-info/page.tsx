
import React from 'react'
import { CartaChar } from '../components/CardChar'
import { CartaHabilities } from '../components/CardHabilities'
import { ButtonDemo } from '../components/ButtonDemo'

const page = () => {
  return (
    <div className='grid w-full gap-4 h-full  place-items-center'>
       <CartaChar />
       <CartaHabilities/>
       <div
         className="bg-accentColor w-full rounded-xl shadow"
         aria-label="card-overlay-v3"
       >
         <div className="w-full rounded-xl h-full flex-shrink-0">
           <img
             src="https://pbs.twimg.com/media/FsZpPLbXwAE0GA2?format=jpg&name=large"
             alt=""
             className="object-cover w-full h-full rounded-xl"
           />
         </div>
         <div className="flex flex-col justify-center items-center flex-1 p-5">
           <div className="pb-5 mb-5 border-b border-black">
             <h3 className="mb-1 text-lg font-bold">Trevor Belmont</h3>
         
           </div>
           <ButtonDemo elLink="/char-info" buttonText="Atras"  />
         </div>
       </div>
    </div>
  )
}

export default page
