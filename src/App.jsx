
function App() {
  return (
    // APP CONTAINER 
    <div className="bg-[#c4e4e7] h-full w-full font-mono">
      <h1
        className="text-[#436567] text-center p-8 uppercase font-bold   leading-6 tracking-widest">spli<br />tter</h1>
      <div className="bg-white rounded-2xl p-8 flex flex-col gap-3 lg:grid grid-cols-2">
        <div className=" ">
          <div className="mb-4">
            <p className="text-[#7D8989] mb-1">Bill</p>
            <div className="flex items-center justify-between rounded-md bg-[#f3f8fb] px-2 ">
              <span className="text-[#C5D2D4]">$</span>
              <input type="text"
                className="outline-none bg-[#f3f8fb] text-[#05413F] text-end py-3 text-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-[#7D8989]">Select Tip %</h1>
            </div>
            <div className="grid grid-cols-2 text-white gap-3 lg:grid-cols-3">
              <button className="py-2 rounded-md bg-[#00474B]">5%</button>
              <button className="py-2 rounded-md bg-[#00474B]">10%</button>
              <button className="py-2 rounded-md bg-[#26C2AD] text-[#00474B]">15%</button>
              <button className="py-2 rounded-md bg-[#00474B]">25%</button>
              <button className="py-2 rounded-md bg-[#00474B]">50%</button>
              <button className="py-2 rounded-md bg-[#F3F8FB] text-[#627877]">Custom</button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-[#7D8989] ">Number of People</p>
            <div className="flex items-center justify-between rounded-md bg-[#f3f8fb] px-2 ">
              <span className="text-[#7D8989]">👤</span>
              <input type="text"
                className="outline-none bg-[#f3f8fb] text-[#05413F] text-end py-3 text-xl" />
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#00474B] p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white">Tip Amount</p>
              <span className="text-[#627877]">/ person</span>
            </div>
            <div>
              <h2 className="text-[#27BCA9] text-lg">$4.27</h2>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white">Tip Amount</p>
              <span className="text-[#627877]">/ person</span>
            </div>
            <div>
              <h2 className="text-[#27BCA9] text-lg">$4.27</h2>
            </div>
          </div>
          <button className="uppercase bg-[#26C2AD] rounded-md p-3 text-[#05413F]">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
