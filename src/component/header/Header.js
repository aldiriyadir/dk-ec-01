import React from 'react'
import './Header.css';

export default function Header(props) {
    const {
      onChangeAmount,
      amount
    } = props
    return (
        <div>
            <p className= "form-name"> USD - United States Dollar </p>
            <div className="code-price">
            <p className = "form-step"> USD </p>
            <input 
                type="number" 
                className="input" 
                value={amount} 
                onChange={onChangeAmount} />
            </div>
        </div>
    )
  }