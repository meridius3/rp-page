import Image from 'next/image'
import {  Carta } from './components/Card'
import { AvatarDemo } from './components/Avatar'

export default function Home() {
  return (
    <>
  
        <div className='grid w-full h-screen lg:h-full place-items-center'>
          <Carta />

        </div>

   
    </>
    
  )
}
