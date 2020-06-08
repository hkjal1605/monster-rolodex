import React from 'react';

import './search-box.styles.scss';

export const SearchBox = ({ handleChange }) => (
    <div className='input'>
        <input className='input__search' id='input-search' type='search' placeholder='Search Monsters' onChange={handleChange}/>
        <label htmlFor='input-search' className='input__label'>Search Monsters</label>
    </div>
)