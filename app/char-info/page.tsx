
import React from 'react'
import Image from 'next/image'
import { CartaChar } from '../components/CardChar'
import { CartaHabilities } from '../components/CardHabilities'
import { ButtonDemo } from '../components/ButtonDemo'
import { CartaLikes } from '../components/CardLikes'

const page = () => {
  return (
    <div className='grid w-full  gap-4 h-full  place-items-center'>
       <CartaChar />
       <CartaHabilities/>
       <CartaLikes />
       <div
         className="bg-accentColor w-full sm:w-[500px] rounded-xl shadow"
         aria-label="card-overlay-v3"
       >
         <div className="w-full rounded-xl h-full flex-shrink-0">
           <Image
             src="https://pbs.twimg.com/media/FsZpPLbXwAE0GA2?format=jpg&name=large"
             alt=""
             width={500}
             height={500}
             className="object-cover w-full h-full rounded-xl"
           />
         </div>
         <div className="flex flex-col justify-center items-center flex-1 p-5">
           <div className="pb-5 mb-5 border-b border-black">
             <h3 className="mb-1 text-lg font-bold">Trevor Belmont</h3>
         
           </div>
          
         </div>
       </div>
       <ButtonDemo elLink="/" buttonText="Atras"  />
    </div>
  )
}

export default page
