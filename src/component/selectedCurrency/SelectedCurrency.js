import React from 'react'
// import './Header.css';

export default function SelectedCurrency(props) {
    const {
        currencyOptions,    
        selectedCurrency,
        onChangeCurrency,
    } = props
    return (
        <div>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
              {currencyOptions.map(option =>(
                <option value={option}>{option}</option>
              ))}
            </select>
            <button type="submit">Submit</button>
        </div>
    )
  }