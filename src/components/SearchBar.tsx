import React from 'react'
import {FiSearch} from 'react-icons/fi'

function SearchBar() {
    return (
        <div className="flex flex-row h-10 w-80 md:mr-28 lg:mr-36 md:bg-gray-700 rounded-xl items-center justify-center">
            <input id="site-search" type="text" placeholder="Search by keywords ... " className="hidden md:block pl-4 h-10 w-72 bg-gray-700 rounded-xl text-sm font-poppins"/>
            <FiSearch aria-label="site-search" className="md:pr-1 block h-7 w-7 md:text-gray-400"/>
        </div>
    )
}

export default SearchBar
