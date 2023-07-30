import Image from 'next/image'
import {  Carta } from './components/Card'
import { AvatarDemo } from './components/Avatar'

export default function Home() {
  return (
    <>
    <div className='mainStuff p-4 bg-red-500 h-screen w-screen'>
        <div className='grid w-full h-full place-items-center'>
          <Carta />

        </div>

    </div>
    </>
    
  )
}
