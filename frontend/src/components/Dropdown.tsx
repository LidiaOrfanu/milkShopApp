import React from 'react'
import '../styles/Dropdown.css'
import { milkTypes } from '../types/interfaces';
interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Dropdown : React.FC<Props>  = ({ onChange, value })=> {

  return (
    <div className='filter-container'>
      <select className='filter'
                onChange={ onChange }
                value={ value }
      >
        <option value="">All</option>
          {milkTypes.map(type => {
            return (
              <option value={type}> {type} </option>
            )
          })}
      </select>
    </div>
  )
}

export default Dropdown