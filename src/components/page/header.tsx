"use client";
import React, { useMemo } from 'react'
import Logo from "@images/logo.png"
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import WallectButton from '../WallectButton';
import TwIcon from '../icon/tw';
import DcIcon from '../icon/Dcicon';
import { useAccount } from 'wagmi';
import Drawer from '@mui/material/Drawer';
import { useSize } from 'ahooks';
import Opensea from '../icon/Opensea';

const DrawerSide = () => {
    const { address } = useAccount()

    return <div className='flex flex-1 flex-col lg:flex-row justify-between text-[#FAFAFA] lg:text-[#A1A1AA]'>
        <div className='lg:hidden flex py-3   mt-8 mb-12'>
                <Image src={Logo} width={132} height={34} alt="logo" />
            </div>
        <div className='flex lg:ml-20 my-auto lg:m-auto justify-start flex-1'>
            <div className='flex lg:flex-row flex-col gap-6 w-2/3 justify-between'>
                <div onClick={() => alert("comming soon")}>
                    <Link href={"/"} className=' text-left lg:text-center text-xl lg:text-base'>Marketplace</Link>
                </div>
                <Link href={"/"} className='text-left lg:text-center text-xl lg:text-base text-primary'>Token</Link>
                <div onClick={() => alert("comming soon")}>
                    <Link href={"/"} className='text-left lg:text-center text-xl lg:text-base'>Deploy</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-12 mt-12 lg:my-auto'>
            <div className='flex justify-between gap-12'>
                <Link href={"https://twitter.com/BSC420_BTC"} target='_blank' className='scale-75 m-auto'>
                    <TwIcon />
                </Link>
                <Link href={"https://opensea.io/collection/bsc-420-5"} target='_blank' className=' m-auto'>
                    <Opensea />
                </Link>
            </div>
            {
                !address ? <WallectButton /> : <ConnectButton showBalance={false} />
            }
        </div>
    </div>
}
export default function header() {
    const { address } = useAccount()
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const size = useSize(document.querySelector('body'));
    const isMobile = useMemo(() => (size?.width || 0) < 1024, [size?.width]);
    return (
        <div className='mx-auto flex justify-between gap-9 py-7'>
            <div className='flex py-3 lg:py-8'>
                <Image src={Logo} width={132} height={34} alt="logo" />
            </div>
            {
                isMobile && <div className='scale-50' onClick={() => {
                    setIsDrawerOpen(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="46" viewBox="0 0 70 46" fill="none">
                        <rect width="70" height="8" fill="#6AD09D" />
                        <rect y="19" width="70" height="8" fill="#6AD09D" />
                        <rect y="38" width="70" height="8" fill="#6AD09D" />
                    </svg>
                </div>
            }
            {
                isMobile ?
                    <Drawer
                        anchor={"top"}
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        sx={{
                            ".MuiDrawer-paper":{
                                backgroundColor: "#1E1E1E",
                                padding: "2rem",
                            }
                        }}
                    >
                        <DrawerSide />
                    </Drawer>
                    :
                    <DrawerSide />
            }
        </div>
    )
}
