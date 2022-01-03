import ethLogo from '../assets/ethlogo.png'

const Tabuler = () => {
  return (
    <section className="antialiased rounded-xl text-gray-600 p-5">
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-2xl rounded-xl">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-gray-800 text-center">Recent Transactions</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Address</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Sent</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Remark</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="Alex Shatov"
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          Alex Shatov
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        0xkjnksdalsnklalkndnslkdsn
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex flex-row justify-center items-center text-left font-medium">
                        <img
                          className="w-3 h-3 object-contain cursor-pointer mr-1"
                          src={ethLogo}
                          alt="Etherium Logo"
                        />
                        <span className="text-green-500">0.005</span>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center">
                        Thanks for the lift.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tabuler
