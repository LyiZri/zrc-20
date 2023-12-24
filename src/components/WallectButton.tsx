"use client";
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function WallectButton() {
    return (
        <ConnectButton.Custom>
            {({ account, chain, openConnectModal, openChainModal, mounted }) => {
                console.log(account, chain, openConnectModal, openChainModal, mounted);
                return (
                    <div
                        {...(!mounted && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!mounted || !account || !chain) {
                                return (
                                    <button
                                        className='bg-[#6ad09d] text-black text-sm w-full py-1 rounded-md flex px-4'
                                        onClick={openConnectModal}>
                                        <svg className='scale-75 my-auto' xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                            <path d="M20.765 7.74081H24.2228C24.5285 7.74081 24.8217 7.86225 25.0379 8.07841C25.2541 8.29456 25.3755 8.58773 25.3755 8.89343V23.4164C25.3755 23.7221 25.2541 24.0151 25.0379 24.2313C24.8217 24.4475 24.5285 24.5689 24.2228 24.5689H3.47586C3.17016 24.5689 2.87699 24.4475 2.66084 24.2313C2.44468 24.0151 2.32324 23.7221 2.32324 23.4164V4.28298C2.32324 3.97729 2.44468 3.68412 2.66084 3.46797C2.87699 3.25181 3.17016 3.13037 3.47586 3.13037H20.765V7.74081ZM4.62847 10.046V22.2637H23.0703V10.046H4.62847ZM4.62847 5.4356V7.74081H18.4599V5.4356H4.62847Z" fill="black" />
                                            <path d="M20.7655 15.3481H17.3076V17.6533H20.7655V15.3481Z" fill="black" />
                                        </svg>
                                        <p className='m-auto'>
                                            Connect Wallet
                                        </p>
                                    </button>
                                )
                            }
                            if (chain.unsupported) {
                                return (
                                    <button onClick={openConnectModal} className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                            <path d="M20.765 7.74081H24.2228C24.5285 7.74081 24.8217 7.86225 25.0379 8.07841C25.2541 8.29456 25.3755 8.58773 25.3755 8.89343V23.4164C25.3755 23.7221 25.2541 24.0151 25.0379 24.2313C24.8217 24.4475 24.5285 24.5689 24.2228 24.5689H3.47586C3.17016 24.5689 2.87699 24.4475 2.66084 24.2313C2.44468 24.0151 2.32324 23.7221 2.32324 23.4164V4.28298C2.32324 3.97729 2.44468 3.68412 2.66084 3.46797C2.87699 3.25181 3.17016 3.13037 3.47586 3.13037H20.765V7.74081ZM4.62847 10.046V22.2637H23.0703V10.046H4.62847ZM4.62847 5.4356V7.74081H18.4599V5.4356H4.62847Z" fill="black" />
                                            <path d="M20.7655 15.3481H17.3076V17.6533H20.7655V15.3481Z" fill="black" />
                                        </svg>
                                        Wrong Network
                                    </button>
                                )
                            }
                        })()}
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}
