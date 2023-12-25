"use client";
import React from 'react'
import Logo from "@images/logo.png"
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import WallectButton from '../WallectButton';
import TwIcon from '../icon/tw';
import DcIcon from '../icon/Dcicon';
import { useAccount } from 'wagmi';
export default function header() {
    const { address } = useAccount()
    return (
        <div className='mx-auto flex justify-between gap-9 py-7'>
            <div className='flex'>
                <Image src={Logo} width={132} height={34} alt="logo" />
            </div>
            <div className='hidden lg:flex lg:ml-20 m-auto justify-start flex-1'>
                <div className='flex w-2/3 justify-between'>
                    <div onClick={() => alert("comming soon")}>
                        <Link href={"/"} className=' text-base'>Marketplace</Link>
                    </div>
                    <Link href={"/"} className='text-base text-primary'>Token</Link>
                    <div onClick={() => alert("comming soon")}>
                        <Link href={"/"} className='text-base'>Deploy</Link>
                    </div>
                </div>
            </div>
            <div className='flex gap-12'>
                <Link href={"https://twitter.com/ZRC420_"} target='_blank' className='scale-75 m-auto'>
                    <TwIcon />
                </Link>
                <div className='scale-75 m-auto cursor-not-allowed'>
                    <DcIcon />
                </div>
                {
                    !address ? <WallectButton /> : <ConnectButton showBalance={false} />
                }
            </div>
        </div>
    )
}
