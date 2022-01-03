import ethLogo from '../assets/ethlogo.png'

const Tabuler = () => {
  return (
    <section class="antialiased bg-gray-100 text-gray-600 p-5">
      <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Customers</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Name</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Address</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Sent</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center">Remark</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            class="rounded-full"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="Alex Shatov"
                          />
                        </div>
                        <div class="font-medium text-gray-800">Alex Shatov</div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">0xkjnksdalsnklalkndnslkdsn</div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex flex-row justify-center items-center text-left font-medium">
                        <img
                          className="w-3 h-3 object-contain cursor-pointer mr-1"
                          src={ethLogo}
                          alt="Etherium Logo"
                        />
                        <span className="text-green-500">0.005</span>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-sm text-center">
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
