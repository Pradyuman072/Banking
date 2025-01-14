"use client"
import React from 'react'
import CountUp from 'react-countup';
function Countup({totalCurrentBalance}:{
    totalCurrentBalance:number;
}) {
  return (
    <div className='w-full'>
      <CountUp duration={2.75} prefix='₹' decimals={2} decimal='.' end={totalCurrentBalance}/>
    </div>
  )
}

export default Countup
