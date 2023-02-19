import { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { SearchCryptoInput } from '../components'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  // crtptosList is the data that is returned from the endpoint
  // cryptors is the coins from the useState hook of cryptosList

  if (isFetching || !cryptos) {
    return 'Loading...'
  }

  return (
    <>
      <div className='search-crypto-container'>
        <SearchCryptoInput />
      </div>

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className='crypto-card'
            key={currency.uuid}
          >
            {/* xs={24} is for mobile stating that the card should take up the entire width of the screen */}
            {/* sm={12} is for tablet stating that the card should take up half the width of the screen */}
            {/* lg={6} is for desktop stating that the card should take up a sixth of the width of the screen */}
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank} . ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                // extra is a property that is used to add extra content to the card
                hoverable
              >
                <p>Price: ${millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
