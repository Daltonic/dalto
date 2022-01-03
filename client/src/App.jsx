import Header from './components/Header'
import Tabuler from './components/Tabuler'

const App = () => {
  return (
    <div className="flex flex-col space-y-4 h-screen bg-gray-100">
      <Header />
      <Tabuler />
    </div>
  )
}

export default App
