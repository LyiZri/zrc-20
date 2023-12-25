import { CONTRACT_ADDRESS, DEFAULT_CHAIN_ID, TOTAL_SUPPLY } from "@/lib/config"
import CONTRACT_ABI from "@/lib/web3/abi.json"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useAccount, useContractRead, useContractWrite } from "wagmi"

const CONTACT_CONFIG = {
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: DEFAULT_CHAIN_ID,
}

export const useContractProgress = () => {
    const { data: totalSupply, isLoading: loading, isError: error } = useContractRead({
        ...CONTACT_CONFIG,
        functionName: "totalSupply",
        watch: true,
    })
    const totalNum = TOTAL_SUPPLY
    console.log(totalSupply, totalNum);

    return {
        progress: Number(totalSupply) / totalNum,
        totalSupply,
        loading,
        error,
    }
}

export const useContractUserBalance = () => {
    const { address } = useAccount()
    const [userBalance, setUserBalance] = useState(0)
    const { data: balance, isLoading: loading, isError: error } = useContractRead({
        ...CONTACT_CONFIG,
        functionName: "balanceOf",
        args: [address],
        watch: true,
    })
    useEffect(() => {
        if (!address) {
            setUserBalance(0)
        } else {
            setUserBalance(Number(balance))
        }
    }, [balance, address])
    return { userBalance }
}

export const userContractMint = () => {
    const { data, isLoading, isError, isSuccess, write: mint } = useContractWrite({
        ...CONTACT_CONFIG,
        functionName: "mint",
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Mint Success")
        } else if (isError) {
            toast.error("Mint Failed")
        }
    }, [isSuccess, isError])
    return { data, isLoading, isSuccess, mint }
}