import React, { Component } from 'react'
import Decoration from '../assets/img1.jpeg'
import {MdMoreHoriz} from 'react-icons/md'
import {AiOutlineClockCircle} from 'react-icons/ai'
import People1 from '../assets/people1.jpeg'
import People2 from '../assets/people2.jpeg'
import People3 from '../assets/people3.jpeg'
import People4 from '../assets/people4.jpeg'
import People5 from '../assets/people5.jpeg'
import People6 from '../assets/people6.jpeg'
import People7 from '../assets/people7.jpeg'
import People8 from '../assets/people8.jpeg'
import People9 from '../assets/people9.jpeg'


export class ListMeetHome extends Component {
    render() {
        return (
            <div className="relative pt-4 md:pt-10 ">
                <div className="h-48 mx-16 mb-8 rounded-xl ">
                    <div className="z-10 absolute h-24 w-auto mt-24 ml-4">
                        <p className="text-left text-5xl font-righteous text-gray-100">IGGLIA 3 - N° 48</p>
                        <p className="text-left text-lg font-light font-righteous text-gray-100 mt-1">AMBININTSOA Ny Aina Andy Lucas</p>
                    </div>

                    <img src={Decoration} alt="iphone" className="z-0 relative w-full h-full rounded-xl object-cover"/>
                </div>

                <div className=" justify-around flex flex-col py-6 px-5 h-48 mx-16 mb-8 rounded-xl bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-xl">
                    <div className="grid grid-flow-col justify-between">
                        <p className="text-left font-poppins text-base text-white">Design Daily Zoom Meeting</p>
                        <div className="md:h-12 md:w-12 lg:h-7 lg:w-10 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg">
                            <MdMoreHoriz className="text-gray-100 block w-6 h-6 shadow-xl"/>
                        </div>
                    </div>

                    <div className="flex flex-row mb-10">
                        <AiOutlineClockCircle className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                        <p className="ml-1 text-left font-rubik text-xs text-white">10:00 -13:00 | starts in 18 hours</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-9 pr-2 md:h-12 w-11 md:w-14 flex items-center justify-center ">
                            <img src={People3} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People2} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People4} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-48 md:h-12 w-11 md:w-12 flex items-center justify-center shadow-xl bg-blue-500 rounded-xl ">
                            <p className="font-poppins text-sm text-white">+6</p>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                            <p className="font-poppins text-sm text-white">id</p>
                        </div>
                        <div className="h-9 md:h-12 w-11 md:w-24 flex items-center justify-center shadow-xl bg-blue-500 rounded-xl">
                            <p className="font-poppins text-sm text-white">start</p>
                        </div>
                    </div>
                </div>

                <div className=" justify-around flex flex-col py-6 px-5 h-48 mx-16 mb-8 rounded-xl bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-xl">
                    <div className="grid grid-flow-col justify-between">
                        <p className="text-left font-poppins text-base text-white">Daily Standup Tech Conference</p>
                        <div className="md:h-12 md:w-12 lg:h-7 lg:w-10 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg">
                            <MdMoreHoriz className="text-gray-100 block w-6 h-6 shadow-xl"/>
                        </div>
                    </div>

                    <div className="flex flex-row mb-10">
                        <AiOutlineClockCircle className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                        <p className="ml-1 text-left font-rubik text-xs text-white">14:00 -16:30 | starts in 22 hours</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-9 pr-2 md:h-12 w-11 md:w-14 flex items-center justify-center ">
                            <img src={People5} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People1} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-56 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People6} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                            <p className="font-poppins text-sm text-white">id</p>
                        </div>
                        <div className="h-9 md:h-12 w-11 md:w-24 flex items-center justify-center shadow-xl bg-blue-500 rounded-xl">
                            <p className="font-poppins text-sm text-white">start</p>
                        </div>
                    </div>
                </div>

                <div className=" justify-around flex flex-col py-6 px-5 h-48 mx-16 mb-8 rounded-xl bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-xl">
                    <div className="grid grid-flow-col justify-between">
                        <p className="text-left font-poppins text-base text-white">Daily Standup Tech Conference</p>
                        <div className="md:h-12 md:w-12 lg:h-7 lg:w-10 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg">
                            <MdMoreHoriz className="text-gray-100 block w-6 h-6 shadow-xl"/>
                        </div>
                    </div>

                    <div className="flex flex-row mb-10">
                        <AiOutlineClockCircle className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                        <p className="ml-1 text-left font-rubik text-xs text-white">14:00 -16:30 | starts in 22 hours</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-9 pr-2 md:h-12 w-11 md:w-14 flex items-center justify-center ">
                            <img src={People9} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People7} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center ">
                            <img src={People8} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                        </div>
                        <div className="h-9 mr-48 md:h-12 w-11 md:w-12 flex items-center justify-center shadow-xl bg-blue-500 rounded-xl ">
                            <p className="font-poppins text-sm text-white">+2</p>
                        </div>
                        <div className="h-9 mr-2 md:h-12 w-11 md:w-12 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                            <p className="font-poppins text-sm text-white">id</p>
                        </div>
                        <div className="h-9 md:h-12 w-11 md:w-24 flex items-center justify-center shadow-xl bg-blue-500 rounded-xl">
                            <p className="font-poppins text-sm text-white">start</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListMeetHome
