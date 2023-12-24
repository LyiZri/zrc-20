"use client";
import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    zkSync,
    zkSyncSepoliaTestnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
    [zkSyncSepoliaTestnet, zkSync],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
        publicProvider()
    ]
);
const demoAppInfo = {
    appName: 'Rainbowkit Demo',
};
const { connectors } = getDefaultWallets({
    appName: 'zrc-20',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_KEY as string,
    chains
});
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
