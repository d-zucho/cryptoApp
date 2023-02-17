import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'

// redux tools
import { useGetCryptosQuery } from '../services/cryptoApi'

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery() // this is a hook that we can use to get the data from the endpoint
  // this destructures the data and isFetching properties from the useGetCryptosQuery function
  // isFetching is a boolean that is true when the data is being fetched (data is undefined until returned ) and false when the data is returned
  // data is the data that is returned from the endpoint

  const globalStats = data?.data?.stats // the ? is a short circuit operator that checks if the data exists before accessing the data property
  // the second ? is a short circuit operator that checks if the data property exists before accessing the stats property
  console.log(globalStats)

  return (
    <>
      <Typography.Title level={2} className='heading'>
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24 Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Typography.Title>
      </div>
    </>
  )
}

export default HomePage
