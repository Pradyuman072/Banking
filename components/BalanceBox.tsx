import React from 'react'
import Countup from './Countup'
import DonutChart from './DonutChart'

function BalanceBox({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
      <DonutChart accounts={accounts}/>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
            Bank Accounts: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
        <p className='total-balance-label'>
            Total Current Balance
        </p>
        <div className='total-balance-ammount flex-center gap-2'>
            <Countup totalCurrentBalance={totalCurrentBalance}/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default BalanceBox
