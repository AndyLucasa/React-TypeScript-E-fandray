import React, { Component } from 'react'
import {TiVideo} from 'react-icons/ti'
import {RiHome5Fill} from 'react-icons/ri'
import {AiFillMessage, AiFillClockCircle} from 'react-icons/ai'
import {FaCalendarDay} from 'react-icons/fa'
import Me from '../assets/me2.png'
import {Link} from 'react-router-dom'

interface BarProps{
    isHome? : boolean
    isMeet? : boolean
    isChat? : boolean
    isPlan? : boolean
    isSchedule? : boolean
}
export class SideBar extends Component<BarProps> {

    toHome() {
        
    }

    render() {
        return (
            <div className="grid grid-col-12 h-screen">
                <div className=" h-20 flex items-center justify-center animate__animated animate__bounceIn">
                    <div className="h-10 md:h-12 w-10 md:w-12 flex items-center justify-center bg-blue-500 rounded-xl">
                        <TiVideo className="text-gray-100 block w-11 h-11 md:w-8 md:h-8 shadow-xl"/>
                    </div>
                </div>

                <div className="row-span-8 mx-2 lg:mx-4 flex flex-col items-center mt-8 ">
                    <Link to="/" onClick={this.toHome} >
                        <div className={`animate__animated animate__bounceIn h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-xl mb-5 ${this.props.isHome ?'border border-gray-100 border-opacity-20 bg-gray-700' : ''}`}>
                            <RiHome5Fill className="text-gray-100 block w-9 h-9 md:w-6 md:h-6 shadow-xl"/>
                        </div>
                    </Link>
                    
                    <Link to="/meeting">
                        <div className={`animate__animated animate__bounceIn h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-xl mb-5 ${this.props.isMeet ?'border border-gray-100 border-opacity-20 bg-gray-700' : ''}`}>
                            <TiVideo className="text-gray-100 block w-9 h-9 md:w-6 md:h-6 shadow-xl"/>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className={`animate__animated animate__bounceIn h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-xl mb-5 ${this.props.isChat ?'border border-gray-100 border-opacity-20 bg-gray-700' : ''}`}>
                            <AiFillMessage className="text-gray-100 block w-9 h-9 md:w-6 md:h-6 shadow-xl"/>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className={`animate__animated animate__bounceIn h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-xl mb-5 ${this.props.isPlan ?'border border-gray-100 border-opacity-20 bg-gray-700' : ''}`}>
                            <AiFillClockCircle className="text-gray-100 block w-9 h-9 md:w-6 md:h-6 shadow-xl"/>
                        </div>
                    </Link>

                    <Link to="/">
                        <div className={`animate__animated animate__bounceIn h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-xl mb-5 ${this.props.isSchedule ?'border border-gray-100 border-opacity-20 bg-gray-700' : ''}`}>
                            <FaCalendarDay className="text-gray-100 block w-9 h-9 md:w-6 md:h-6 shadow-xl"/>
                        </div>
                    </Link>
                </div>

                <div className=" row-span-3 flex justify-center items-end mb-6 animate__animated animate__bounceIn">
                    <div className="h-9 md:h-11 w-9 md:w-11 flex items-center justify-center rounded-full">
                        <img src={Me} alt="me" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar
