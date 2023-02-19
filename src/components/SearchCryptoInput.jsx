import { Input, Space } from 'antd'
import { Typography } from 'antd'

const { Title } = Typography

const { Search } = Input // this is a destructured property from the Input component
const onSearch = (value) => console.log(value)

const SearchCryptoInput = () => {
  return (
    <div
      className='input-container'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        margin: '2rem auto',
      }}
    >
      <label htmlFor='search-crypto-input'>
        <Title level={5}>Find your Crypto: </Title>
      </label>
      <Search
        id='search-crypto-input'
        placeholder='Filter Cryptos'
        allowClear // this is a property that allows the user to clear the input field
        enterButton='Search' // this is a property that allows the user to click the button to search
        onSearch={onSearch}
        style={{ width: '80%' }}
      ></Search>
    </div>
  )
}

export default SearchCryptoInput
