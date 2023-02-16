import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from './components'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              />
              <Route exact path='/news' element={<News />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'>
        <Typography.Title
          level={5}
          style={{ color: 'white', textAlign: 'center' }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
    </div>
  )
}

export default App
