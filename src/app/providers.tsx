"use client";
import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
    connectorsForWallets,
    darkTheme,
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    // bsc,
    goerli
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { injectedWallet, metaMaskWallet, okxWallet, rainbowWallet, tokenPocketWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';


const { chains, publicClient } = configureChains(
    [goerli],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
        publicProvider()
    ]
);
const demoAppInfo = {
    appName: 'bsc-420',
};
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_KEY as string;
const wallets = [
    injectedWallet({ chains }),
    rainbowWallet({ projectId, chains }),
    metaMaskWallet({ projectId, chains }),
    walletConnectWallet({ projectId, chains }),
    tokenPocketWallet({ projectId, chains }),
    okxWallet({ projectId, chains }),
]

const connectors = connectorsForWallets([
    {
        groupName: 'Popular',
        wallets,
    },
])
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
            <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={demoAppInfo}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
