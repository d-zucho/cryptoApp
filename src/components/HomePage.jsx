// import { Navbar } from '../components'
// import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Statistic } from 'antd'

// redux tools
import { useGetCryptosQuery } from '../services/cryptoApi'

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery() // this is a hook that we can use to get the data from the endpoint
  // this destructures the data and isFetching properties from the useGetCryptosQuery function\
  // isFetching is a boolean that is true when the data is being fetched and false when the data is fetched

  return (
    <>
      <Typography.Title level={2} className='heading'>
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Total 24 Volume' value='5' />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value='5' />
        </Col>
      </Row>
    </>
  )
}

export default HomePage
