import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic } from 'antd'
import { Cryptocurrencies, News, Loader } from '../components'
import millify from 'millify'

// redux tools
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10) // this is a hook that we can use to get the data from the endpoint
  // this destructures the data and isFetching properties from the useGetCryptosQuery function
  // isFetching is a boolean that is true when the data is being fetched (data is undefined until returned ) and false when the data is returned
  // data is the data that is returned from the endpoint

  const globalStats = data?.data?.stats
  if (isFetching || !globalStats) {
    return <Loader />
  }

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchanges'
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24 Volume'
            value={globalStats.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
    </>
  )
}

export default HomePage
