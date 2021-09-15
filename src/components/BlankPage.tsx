import React, { Component } from 'react'
import Blank from '../assets/blank.png'
export class BlankPage extends Component {
    render() {
        return (
            <>
                <div className="flex justify-center items-center  md:grid-cols-7 md:row-span-8 row-span-11 h-full"> 
                 <img src={Blank} alt="blank" className="z-0 relative w-96 h-96 rounded-xl object-cover"/>
                </div>
            </>
        )
    }
}

export default BlankPage
