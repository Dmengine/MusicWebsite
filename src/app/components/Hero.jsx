import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className='bg-custom flex p-3 border-none justify-center h-screen'>
      <div className='text-center p-5'>
        <h1 className='text-indigo-400 text-2xl sm:text-6xl font-bold mb-6 '>
          Discover New Songs and <span className='mt-5  block text-green-400'>Mint them as NFT
          Mint</span> <span className='mt-5 text-fuchsia-500'>new songs as NFT</span>
        </h1>
        <p className='text-slate-100 mb-6'>
          Keep your music NFT collection and mint your playlist
        </p>
        <Link href='#' className='cursor-pointer items-center justify-center'>
          <button className='rounded-md bg-green-400 p-3 font-semibold text-2xl mt-7'>Start 2-Week Trial</button>
        </Link>
      </div>
    </div>
  );
}
