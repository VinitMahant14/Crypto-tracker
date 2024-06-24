// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()

    const updateCryptoData = cryptoData.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      cryptoData: updateCryptoData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptoData} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loading">
            <Loader type="Rings" color=" #00e7ff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-currency-main-contaniner">
            <h1 className="crypto-currency-heading">Cryptocurrency Tracker</h1>
            <img
              className="crypto-currency-banner-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />

            <div className="crypto-currency-table-container">
              <div className="table-heading-container">
                <h1 className="coin-heading">Coin Type</h1>
                <div className="USD-EURO-coin-heading-item">
                  <h1 className="USD-EURO-coin-heading">USD</h1>
                  <h1 className="USD-EURO-coin-heading">EURO</h1>
                </div>
              </div>
              <ul className="table-values-container">
                {cryptoData.map(eachItem => (
                  <CryptocurrencyItem
                    cryptoDetailItems={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
