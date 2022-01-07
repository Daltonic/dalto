import { useGlobalState, setGlobalState } from '../store'
import { useState } from 'react'
import { sendMoney } from '../shared/Transaction'

const AddTransactionCard = () => {
  const [modal] = useGlobalState('modal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [remark, setRemark] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!address || !amount || !remark) return
    setLoading(true)

    sendMoney({ connectedAccount, address, amount, remark })
      .then(() => {
        setGlobalState('transaction', { address, amount, remark })
        setLoading(false)
        setGlobalState('modal', '')
        resetForm()
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  const resetForm = () => {
    setAddress('')
    setAmount('')
    setRemark('')
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform scale-0 transition-transform duration-300 ${modal}`}
    >
      <div className="bg-white rounded-xl w-1/3 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-800">Add a step</p>
            <button
              onClick={() => setGlobalState('modal', '')}
              className="border-0 bg-transparent focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-100 rounded-xl p-3 mt-5">
            <input
              className="bg-transparent focus:outline-none w-full"
              type="text"
              name="address"
              placeholder="Address To"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-100 rounded-xl p-3 mt-5">
            <input
              className="bg-transparent focus:outline-none w-full"
              type="number"
              step={0.0001}
              name="amount"
              placeholder="Amount (Eth)"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>

          <div className="flex flex-row justify-between items-center bg-gray-100 rounded-xl p-3 mt-5">
            <input
              className="bg-transparent focus:outline-none w-full"
              type="text"
              name="remark"
              placeholder="Remark"
              onChange={(e) => setRemark(e.target.value)}
              value={remark}
            />
          </div>

          <div className="flex flex-row justify-between items-centerrounded-xl mt-5">
            {!loading ? (
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex flex-row justify-center items-center w-full text-white text-lg bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
              >
                Send Money
              </button>
            ) : (
              <button
                className="flex flex-row justify-center items-center w-full text-white text-lg bg-blue-300 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent focus:outline-none focus:ring"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                    fill="white"
                    stroke="none"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="1s"
                      repeatCount="indefinite"
                      keyTimes="0;1"
                      values="0 50 51;360 50 51"
                    ></animateTransform>
                  </path>
                </svg>
                Sending...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTransactionCard
