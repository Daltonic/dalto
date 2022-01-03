import ethLogo from '../assets/ethlogo.png'

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-5 bg-white">
      <img
        className="w-6 h-6 object-contain cursor-pointer"
        src={ethLogo}
        alt="Etherium Logo"
      />
      <nav className="flex flex-row list-none">
        <li className='cursor-pointer mr-3'>Pricing</li>
        <li className='cursor-pointer mr-3'>Docs</li>
      </nav>
    </header>
  )
}

export default Header
