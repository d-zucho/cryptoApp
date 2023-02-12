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
              <Route exact path='/echanges' element={<Exchanges />} />
              <Route
                exact
                path='/cryprotcurrencies'
                element={<Cryptocurrencies />}
              />
              <Route exact path='/' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default App
