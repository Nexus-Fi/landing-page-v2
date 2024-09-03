import React from 'react'

const Features : React.FC = () => {
  return (
    <div className="border-b-2">
      <div className="mx-36 border-x-2">
        <div className="mx-16 p-4 border-x-2 text-center">Features</div>
      </div>
      <div className="mx-36 border-2">
        <div className="grid grid-cols-3 gap-4 p-8">
          {/* APY Column */}
          <div className="col-span-1 row-span-3 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
              <div className="text-6xl font-bold text-indigo-400">3.5%</div>
              <div className="text-sm text-gray-500">
                ranging from 3.0% to 3.7%
              </div>
            </div>
          </div>

          {/* Your Keys, Your Coins */}
          <div className="col-span-2 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">Your Keys, Your Coins</div>
          </div>

          {/* Decentralization */}
          <div className="col-span-2 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">Decentralization</div>
          </div>

          {/* Thriving Ecosystem */}
          <div className="col-span-1 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">Thriving Ecosystem</div>
          </div>

          {/* Auto-Compounding Rewards */}
          <div className="col-span-1 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">
              Auto-Compounding Rewards
            </div>
          </div>

          {/* NIBIRU chain */}
          <div className="col-span-1 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">NIBIRU chain</div>
          </div>

          {/* ??? */}
          <div className="col-span-1 row-span-1 flex items-center justify-center bg-gray-100 p-4">
            <div className="text-xl font-semibold">?????</div>
          </div>
        </div>
      </div>
      <div className="mx-36 border-x-2">
        <div className="mx-16 border-x-2">.</div>
      </div>
    </div>
  );
}

export default Features