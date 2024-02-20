import React, { useState } from 'react'

import { InputBox } from './components'
import useCorrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCorrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <>
      <h1 className='text-3xl bg-orange-500'>
        Currnecy API App
      </h1>
    </>
  )
}

export default App