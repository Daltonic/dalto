import AddTransactionCard from './components/AddTransactionCard'
import Header from './components/Header'
import Tabuler from './components/Tabuler'

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <Tabuler />
      <div className="text-center">
        <button className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring">
          Load more
        </button>
      </div>
      <AddTransactionCard />
    </div>
  )
}

export default App
