import AddTransactionCard from './components/AddTransactionCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Tabuler from './components/Tabuler'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Tabuler />
      <div className="text-center mt-5 mb-10">
        <button className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring">
          Load more
        </button>
      </div>
      <AddTransactionCard />
    </div>
  )
}

export default App
