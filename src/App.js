import React from 'react';
import './App.css';

const renderCardNumber = number => {
  number = number.toString()
  // '7253325678951245'
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return resultStr.trim()
}

// input : 1150
// output : '11/50'
const renderValidThru = number => {
  number = number.toString()
  // '1150'
  // number.slice(0, 2) === '11'
  // number.slice(2) === '50'
  return number.slice(0, 2) + '/' + number.slice(2)
}

const CreditCard = (props) =>
  <div className="credit-card">
    <h1 className="credit-card-title">
      {props.companyName.toUpperCase()}
    </h1>
    <div className="credit-card-chip" />
    <div className="credit-card-content">
      <div className="credit-card-text">
          <h2 className="credit-card-number">
            {renderCardNumber(props.cardNumber)}
          </h2>
          <h2 className="credit-card-valid-thru">
            {renderValidThru(props.validThru)}
          </h2>
          <h2 className="credit-card-holder-name">
            {props.cardHolder.toUpperCase()}
          </h2>
      </div>
      <div className="credit-card-logo">
        <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" alt="hehe" />
      </div>
    </div>
  </div>

const Main = () => <div>
  <CreditCard
    companyName='credit card'
    cardNumber={7253325678951245}
    validThru={1150}
    cardHolder='CARDHOLDER' />
    <CreditCard
    companyName='THE CREDIT CARD'
    cardNumber={7777777778951245}
    validThru={1230}
    cardHolder='fOULEN' />
</div>

export default Main;