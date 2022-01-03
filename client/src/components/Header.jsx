import ethLogo from '../assets/ethlogo.png'
import { setGlobalState } from '../store'

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between drop-shadow-md py-2 px-5 bg-white">
      <div className="flex flex-row justify-center items-center cursor-pointer">
        <img
          className="w-6 h-6 object-contain cursor-pointer"
          src={ethLogo}
          alt="Etherium Logo"
        />
        <span>Dalto</span>
      </div>
      <nav className="flex flex-row justify-center items-center list-none">
        <li className="cursor-pointer mr-3 hover:text-blue-500">Pricing</li>
        <li className="cursor-pointer mr-3 hover:text-blue-500">Docs</li>
        <li className="cursor-pointer mr-3">
          <button
            onClick={() => setGlobalState('modal', 'scale-100')}
            className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
          >
            Send
          </button>
        </li>
      </nav>
    </header>
  )
}

export default Header
