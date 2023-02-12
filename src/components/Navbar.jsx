import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from '@ant-design/icons'
import icon from '../assets/cryptocurrency.png'

const Navbar = () => {
  // function getItem(label, key, icon, children, type) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     type,
  //   }

  // const items2 = [
  //   getItem('Home', '1', <HomeOutlined />, null, 'link'),
  //   getItem('Cryptocurrencies', '2', <FundOutlined />, null, 'link'),
  //   getItem('Exchanges', '3', <MoneyCollectOutlined />, null, 'link'),
  //   getItem('News', '4', <BulbOutlined />, null, 'link'),
  // ]

  // const items = {
  //   Home: {
  //     label: 'Home',
  //     icon: <HomeOutlined />,
  //     link: '/',
  //     key: '1',
  //   },
  //   Cryptocurrencies: {
  //     label: 'Cryptocurrencies',
  //     icon: <FundOutlined />,
  //     link: '/cryptocurrencies',
  //     key: '2',
  //   },
  //   Exchanges: {
  //     label: 'Exchanges',
  //     icon: <MoneyCollectOutlined />,
  //     link: '/exchanges',
  //     key: '3',
  //   },
  //   News: {
  //     label: 'News',
  //     icon: <BulbOutlined />,
  //     link: '/news',
  //     key: '4',
  //   },
  // }

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>

        {/* This button will be for mobile sizes */}
        {/* <Button className='menu-control-container'>
        
        </Button> */}
      </div>
      <Menu mode='vertical' theme='dark'>
        <Menu.Item key='1' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item key='4' icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
