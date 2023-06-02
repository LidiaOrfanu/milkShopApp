import React from 'react'
import '../styles/Search.css'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchMilk: React.FC<Props>  = ({ onChange, value }) => {
  return (
      <div className='search'>
        <input
          type="text"
          placeholder="Search"
          onChange={ onChange }
          value={ value }
          className='search-input'
          />
    </div>
  )
}

export default SearchMilk
