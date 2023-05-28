import React from 'react'
import {TfiCup} from 'react-icons/ti'

export default function smallCard() {
  return (
    <div className='bg-gray-800 rounded-md border '>
        <div className='flex'>
            <TfiCup className='text-yellow-500'/>
            <div className='flex-col'>
                <h1>product hunt</h1>
                <h2>#1 Product of the Month</h2>
            </div>
        </div>
    </div>
  )
}
