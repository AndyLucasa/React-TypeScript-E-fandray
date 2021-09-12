import React, { Component } from 'react'
import Decoration from '../assets/img1.jpeg'

export class ListMeetHome extends Component {
    render() {
        return (
            <div className="pt-4 md:pt-10">
                <div className="h-48 mx-16 mb-8 rounded-xl ">
                    <div className="z-10 absolute h-24 w-auto mt-24 ml-4">
                        <p className="text-left text-5xl font-righteous text-gray-100">IGGLIA 3 - N° 48</p>
                        <p className="text-left text-lg font-light font-righteous text-gray-100 mt-1">AMBININTSOA Ny Aina Andy Lucas</p>
                    </div>

                    <img src={Decoration} alt="iphone" className="z-0 relative w-full h-full rounded-xl object-cover"/>
                </div>

                <div className="h-48 mx-16 mt-8 rounded-xl bg-white">

                </div>
                
            </div>
        )
    }
}

export default ListMeetHome
