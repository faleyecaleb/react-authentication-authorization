import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='text-3xl'>
        <div>
            <img src="./search.png" width={20} height={20} alt="" />
            <input 
                type="text" 
                placeholder='Search for a movie'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search