import { ethers } from 'ethers'
import { setGlobalState } from '../store'

import { contractAbi, contractAddress } from '../utils/constants'

const { ethereum } = window

const getEtheriumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  )

  return transactionContract
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      console.log('No accounts found.')
    }
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const checkIfTransactionExist = async () => {
  try {
    const transactionContract = getEtheriumContract()
    const transactionCount = await transactionContract.getTransactionsCount()

    window.localStorage.setItem('transactionCount', transactionCount)
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const sendMoney = async ({ connectedAccount, address, amount, remark }) => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const transactionContract = getEtheriumContract()
    const parsedAmount = ethers.utils.parseEther(amount)

    await ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: connectedAccount,
          to: address,
          gas: '0x5208',
          value: parsedAmount._hex,
        },
      ],
    })

    const transactionHash = await transactionContract.sendMoney(
      address,
      parsedAmount,
      remark
    )
    console.log(`Loading - ${transactionHash.hash}`)
    await transactionHash.wait()
    console.log(`Success - ${transactionHash.hash}`)

    const transactionCount = await transactionContract.getTransactionsCount()
    setGlobalState('transactionCount', transactionCount.toNumber())

    window.location.reload()
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

const getAllTransactions = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const transactionContract = getEtheriumContract()
    const availableTransactions = await transactionContract.getAllTransactions()

    const structuredTransactions = availableTransactions.map((tx) => ({
      receiver: tx.receiver,
      sender: tx.sender,
      timestamp: new Date(tx.timestamp.toNumber() * 1000).toLocaleString(),
      remark: tx.remark,
      amount: parseInt(tx.amount._hex) / 10 ** 18,
    })).reverse()
    
    setGlobalState('transactions', structuredTransactions)
    return structuredTransactions
  } catch (error) {
    console.log(error)
    throw new Error('No ethereum object.')
  }
}

export {
  getEtheriumContract,
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
  sendMoney,
  getAllTransactions,
}
