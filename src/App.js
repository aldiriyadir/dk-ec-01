import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import SelectedCurrency from './component/selectedCurrency/SelectedCurrency'

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=9153f9df89afe269706bb02042fb587c'

function App() {
  const[amount,setAmount] = useState(10)
  const[plus,setPlus] = useState(true)
  const [fromCurrency, setFromCurrency] = useState()
  const[currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() =>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setFromCurrency(data.base)
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  },[])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
  }

  function handleCurrencyChange(e) {
    setFromCurrency(e.target.value)
    console.log(fromCurrency)
  }

  const plusButton = () =>{
    setPlus(!plus);
  } 

  return (
    <div className = "form-box">
      {/* Header USD */}
      <Header 
        amount={amount} 
        onChangeAmount={handleFromAmountChange}
      />

      {/* Line */}
      <hr className = "line"></hr>

      {/* Plus button */}
      <div className = "form-plus">
        {plus ?(
          <button className = "buttonplus" onClick={plusButton}>
          (+) Add Currendes
        </button>
        ):(
          <SelectedCurrency 
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={handleCurrencyChange}
          />
        )}
      </div>

    </div>
  );
}

export default App;
