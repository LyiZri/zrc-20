"use client";
import PreViewNft from '@/components/Pre_NFT'
import { useContractProgress, useContractUserBalance } from '@/hooks/contract';
import { SINGLE_PRICE } from '@/lib/config';
import Image from 'next/image'
import { Line } from 'rc-progress'
import { useEffect } from 'react';

export default function Home() {
  const { progress, loading, totalSupply } = useContractProgress()
  const { userBalance } = useContractUserBalance()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <section className='flex justify-between flex-col-reverse lg:flex-row w-full gap-14'>
        <div className='flex-1 flex justify-between flex-col gap-7'>
          <ul className='flex justify-start gap-2'>
            <li className=' rounded-full border border-[#6ad09d] border-opacity-[0.49] bg-opacity-[0.56] bg-[#6ad09d] text-primary px-7  py-1 text-xs'>
              3D
            </li>
            <li className=' border rounded-full border-[#FFB00F]/[0.6] bg-[#FFB00F]/[0.2] text-[#FFB00F] px-5  py-1 text-xs'>
              PFP
            </li>
          </ul>
          <h2 className='text-white text-3xl'>BSC-420</h2>
          <h2 className='w-full text-right text-white'>Progress: <span className='text-primary'>{progress * 100} %</span></h2>
          <div className='flex justify-between'>
            <Line percent={progress * 100} strokeWidth={1} trailColor="#222224" strokeColor="#6AD09D" />
          </div>
          <ul className='border text-[#fafafa] border-[#27272a] p-6 rounded-[10px] flex flex-col gap-9'>
            <h3 className='text-[#fafafa] text-left text-xl'>
              Overview
            </h3>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Type</span>
              <span>BSC-420</span>
            </li>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Address Per Mint</span>
              <span>10</span>
            </li>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Supply</span>
              <span>10000</span>
            </li>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Royalty</span>
              <span>{SINGLE_PRICE} BNB</span>
            </li>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Supply Minted</span>
              <span>{Number(totalSupply)}</span>
            </li>
            <li className='w-full flex justify-between text-sm'>
              <span className='opacity-50'>Your BSC-420</span>
              <span>{userBalance}</span>
            </li>
          </ul>
        </div>
        <PreViewNft />
      </section>
    </main>
  )
}
