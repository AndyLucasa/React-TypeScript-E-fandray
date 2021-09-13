import React, { Component } from 'react'
import BurgerMenu from './BurgerMenu'
import SearchBar from './SearchBar'

export class AppBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="AppBar py-1 md:py-2 h-16 md:h-auto w-full bg-gray-900 md:bg-gray-800  grid grid-cols-12 items-center fixed z-20 top-0 md:border-b border-gray-700 shadow-lg text-gray-200">
                <div className="Menu col-span-2 h-14 flex items-center justify-center">
                    <BurgerMenu/>
                </div>
                <div className="Title col-span-8 md:col-span-4 items-center justify-center md:justify-start h-14  font-righteous text-3xl flex flex-rows">
                    <p className="text-blue-400">E</p>
                    <p className="text-2xl text-blue-400">-</p>
                    <p className="text-gray-200">Fandray</p>
                </div>
                <div className="SearchBar col-span-2 md:col-span-6 flex h-14 items-center justify-center">
                    <SearchBar />
                </div>
            </div>
        )
    }
}

export default AppBar
