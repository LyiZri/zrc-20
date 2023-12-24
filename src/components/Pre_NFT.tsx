"use client";
import { useCountDown } from 'ahooks';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { div } from 'three/examples/jsm/nodes/Nodes.js';


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
            <p className='text-2xl absolute top-2 left-3 text-white'>
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
        targetDate: '2023-12-25 21:00:00',
    })
    const { days, hours, minutes, seconds } = formattedRes
    return <div className='w-full lg:w-1/2 flex justify-between flex-col'>
        <div className='border border-[#27272a] rounded-md'>
            <iframe className='w-full aspect-square rounded-md' src='https://my.spline.design/iridescentcube-ffaa0d1b195c83ba9e0275663c4514fa/' />
        </div>
        <div className='my-6 flex justify-center m-auto'>
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
            </div>
        </div>
        <div className='flex justify-between gap-6'>
            <button className='bg-[#6ad09d] opacity-30 cursor-not-allowed text-black text-sm w-full py-2 rounded-md'>
                Trade
            </button>
            <button className=' bg-[#6ad09d] text-black cursor-not-allowed text-sm w-full py-2 rounded-md'>
                Mint
            </button>

        </div>
    </div>
}

export default PreViewNft;
