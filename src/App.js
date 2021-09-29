import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import SelectedCurrency from './component/selectedCurrency/SelectedCurrency';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=9153f9df89afe269706bb02042fb587c'

function App() {
  const[amount,setAmount] = useState(10)
  const[plus,setPlus] = useState(true)
  const[fromCurrency, setFromCurrency] = useState([])
  const[plusCurrency, setPlusCurrency] = useState()
  const[currencyOptions, setCurrencyOptions] = useState([])
  const[list, setList] = useState([])

  useEffect(() =>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setFromCurrency(data)
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  },[])

  useEffect(() =>{
    const json = localStorage.getItem("list");
    const loadedList = JSON.parse(json);
    if (loadedList) {
      setList(loadedList);
    }
  }, []);

  useEffect(() =>{
  const json = JSON.stringify(list);
    localStorage.setItem("list", json);
  }, [list]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
  }

  function handleCurrencyChange(e) {
    setPlusCurrency(e.target.value)
    console.log(plusCurrency)
  }

  const plusButton = () =>{
    setPlus(!plus);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newplusCurrency = {
      id: new Date().getTime(),
      text: plusCurrency,
      completed: false,
    };
    setList([...list].concat(newplusCurrency));
  }

  function deleteplusCurrency(id) {
    let updatedList = [...list].filter((plusCurrency) => plusCurrency.id !== id);
    setList(updatedList);
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

      {/* List Card */}
      {list.map((plusCurrency =>(
        <div className = "Card">
          {plusCurrency.text}
          <button onClick={() => deleteplusCurrency(plusCurrency.id)}>( - )</button>
        </div>
      )))}

      {/* Plus button */}
      <div className = "form-plus">
        {plus ?(
          <button className = "buttonplus" onClick={plusButton}>
          (+) Add Currendes
        </button>
        ):(
          <form onSubmit={handleSubmit}>
          <SelectedCurrency 
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={handleCurrencyChange}
          />
          </form>
        )}
      </div>

    </div>
  );
}

export default App;
