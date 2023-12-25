"use client";
import { userContractMint } from '@/hooks/contract';
import { useCountDown, useCounter } from 'ahooks';
import React, { useRef, useEffect, useState } from 'react';
import { SINGLE_PRICE } from '@/lib/config'
import { parseEther } from 'viem';
import { useAccount } from 'wagmi';
import Loading from './icon/Loading';
import { toast } from 'react-toastify';
import classNames from 'classnames';


const SvgContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative w-[36px] scale-75 -mx-[2px]'>
            <svg width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1430104230">
                    <g id="Rectangle 34626065">
                        <g filter="url(#filter0_i_11_349)">
                            <rect x="0.5" y="0.526611" width="37" height="55" rx="4" fill="black" fill-opacity="0.1" />
                        </g>
                        <rect x="0.75" y="0.776611" width="36.5" height="54.5" rx="3.75" stroke="#08FFFF" stroke-width="0.5" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_i_11_349" x="0.5" y="0.526611" width="37" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11_349" />
                    </filter>
                </defs>
            </svg>
            <p className='text-2xl absolute top-3 left-3 text-white'>
                {children}
            </p>
        </div>
    )
}

const TimeItemBox = ({ timeNum, title }: { timeNum: number, title: string }) => {
    const formatTime = () => {
        if (timeNum / 10 < 1) {
            return '0' + timeNum.toString()
        }
        return timeNum.toString()
    }
    return (
        <ul className="trans-text">
            <li className=" flex min-w-[4rem]  text-[1.5rem]">
                {Array.from(formatTime()).map((num, index) => <SvgContent key={index}>{num}</SvgContent>)}
            </li>
        </ul>
    )
}

function PreViewNft() {
    //倒计时
    const [countdown, formattedRes] = useCountDown({
        targetDate: '2023-12-25 14:20:00',
        onEnd: () => {
            setAction(true)
        }
    })
    const { days, hours, minutes, seconds } = formattedRes
    const [action, setAction] = useState(() => days == 0 && hours == 0 && minutes == 0 && seconds == 0)
    const [loading, setLoading] = React.useState(true)
    const { address } = useAccount()
    const [mintNum, { inc,
        dec,
        set,
        reset }] = useCounter(1, { min: 1, max: 10 })
    const { isLoading, data, mint } = userContractMint()
    const handleMint = () => {
        if (!address) {
            toast.warning('Please connect wallet')
            return
        }
        toast.info('Minting...')
        if (action) {
            mint({
                args: [mintNum],
                value: parseEther((SINGLE_PRICE * mintNum).toString())
            })
        }
    }
    return <div className='w-full lg:w-1/2 flex justify-between flex-col'>
        <div className='border border-[#27272a] rounded-md'>
            <iframe className='w-full aspect-square rounded-md' src='https://my.spline.design/iridescentcube-ffaa0d1b195c83ba9e0275663c4514fa/' />
        </div>
        <div className='my-6 flex justify-center m-auto'>
            {action ?
                <div className='flex justify-center gap-4'>
                    <p className='w-12 rounded-lg cursor-pointer bg-primary text-black text-center my-auto h-6' onClick={() => set(1)}>min</p>
                    <p className='w-6 cursor-pointer rounded-lg bg-primary text-black text-center my-auto h-6' onClick={() => dec()}>-</p>
                    <p className='w-6 h-6 rounded-lg text-white bg-slate-900 text-center'>{mintNum}</p>
                    <p className='w-6 cursor-pointer bg-primary rounded-lg text-black text-center my-auto h-6' onClick={() => inc()}>+</p>
                    <p className='w-12 cursor-pointer bg-primary text-black rounded-lg text-center my-auto h-6' onClick={() => set(10)}>MAX</p>
                </div>
                :
                <div className="flex justify-between">
                    <TimeItemBox title="Days" timeNum={days} />
                    <p className='my-auto text-white text-xs mx-1'>
                        D
                    </p>
                    <TimeItemBox title="Hours" timeNum={hours} />
                    <p className='my-auto text-white text-xs mx-1'>
                        H
                    </p>
                    <TimeItemBox title="Minutes" timeNum={minutes} />
                    <p className='my-auto text-white text-xs mx-1'>
                        M
                    </p>
                    <TimeItemBox title="Seconds" timeNum={seconds} />
                    <p className='my-auto text-white text-xs mx-1'>
                        S
                    </p>
                </div>}
        </div>
        <div className='flex justify-between gap-6'>
            <button className='bg-[#6ad09d] opacity-30 cursor-not-allowed text-black text-sm w-full py-2 rounded-md' onClick={()=>{
                toast.info("Comming soon")
            }}>
                Trade
            </button>
            <button className={classNames('bg-[#6ad09d] text-black text-sm w-full py-2 rounded-md disabled:cursor-not-allowed text-center disabled:bg-opacity-50', {
                "cursor-pointer": action,
                "cursor-not-allowed": !action
            })} disabled={isLoading} onClick={handleMint}>
                {
                    isLoading ? <Loading /> :
                        "Mint"
                }
            </button>

        </div>
    </div>
}

export default PreViewNft;
