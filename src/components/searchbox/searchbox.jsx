import React from 'react';
import './searchbox.css';


export const SearchBox = ({handleSearchSubmit}) => {
    return (
        <input
            className='search'
            type='search'
            placeholder='Search Startup Name'
            autoFocus
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleSearchSubmit(e.target.value);
                }
            }}
        />

    )
}