// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetailItems} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetailItems
  console.log(currencyName)
  return (
    <li className="table-value-item-container">
      <div className="left-column-value-items">
        <img
          className="coin-logo-image"
          src={currencyLogo}
          alt={currencyName}
        />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="right-column-value-items">
        <p className="USD-EURO-number-text">{usdValue}</p>
        <p className="USD-EURO-number-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
