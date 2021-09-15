import React, { Component } from 'react'
import {TiVideo} from 'react-icons/ti'
import {SiAddthis} from 'react-icons/si'
import {FaCalendarDay} from 'react-icons/fa'
import {MdScreenShare} from 'react-icons/md'

export class NewMeet extends Component {
    render() {
        return (
            <div className=" pt-0 md:pt-10  flex flex-wrap justify-center">
                <div className="animate__animated animate__bounceIn h-14 w-14 md:p-4 lg:p-6 flex justify-center md:justify-start md:flex-wrap content-between md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl shadow-2xl bg-deep-orange-400 mx-3 md:m-2 lg:m-4">
                    <div className="md:h-12 md:w-12 lg:h-14 lg:w-14 flex items-center justify-center md:border border-gray-100 border-opacity-20 md:bg-white md:backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-100 rounded-xl">
                        <SiAddthis className="text-gray-100 block z-10 w-6 h-6 shadow-xl"/>
                    </div>
                    <div className="hidden md:block Subtitle">
                        <p className="text-left text-gray-100 font-rubik font-semibold text-sm">New Meeting</p>
                        <p className="hidden lg:block text-left text-gray-100 font-rubik font-medium text-xs mt-1">set up new Meeting</p>
                    </div>
                </div>

                <div className="animate__animated animate__bounceIn h-14 w-14 md:p-4 lg:p-6 flex justify-center md:justify-start md:flex-wrap content-between md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl shadow-lg bg-blue-500 mx-3 md:m-2 lg:m-4">
                    <div className="md:h-12 md:w-12 lg:h-14 lg:w-14 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white md:backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                        <TiVideo className="text-gray-100 block z-10 w-8 h-8 shadow-xl"/>
                    </div>
                    <div className="hidden md:block Subtitle">
                        <p className="text-left text-gray-100 font-rubik font-semibold text-sm">Join Meeting</p>
                        <p className="hidden lg:block text-left text-gray-100 font-rubik font-medium text-xs mt-1">via invitation link .</p>
                    </div>
                </div>

                <div className="animate__animated animate__bounceIn h-14 w-14 md:p-4 lg:p-6 flex justify-center md:justify-start md:flex-wrap content-between md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl shadow-lg bg-blue-500 mx-3 md:m-2 lg:m-4">
                    <div className="md:h-12 md:w-12 lg:h-14 lg:w-14 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white md:backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                        <FaCalendarDay className="text-gray-100 block z-10 w-7 h-7 shadow-xl"/>
                    </div>
                    <div className="hidden md:block Subtitle">
                        <p className="text-left text-gray-100 font-rubik font-semibold text-sm">Schedule</p>
                        <p className="hidden lg:block text-left text-gray-100 font-rubik font-medium text-xs mt-1">plan your meeting</p>
                    </div>
                </div>

                <div className="animate__animated animate__bounceIn h-14 w-14 md:p-4 lg:p-6 flex justify-center md:justify-start md:flex-wrap content-between md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl shadow-lg bg-blue-500 mx-3 md:m-2 lg:m-4">
                    <div className="md:h-12 md:w-12 lg:h-14 lg:w-14 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white md:backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-xl">
                        <MdScreenShare className="text-gray-100 block z-10 w-8 h-8 shadow-xl"/>
                    </div>
                    <div className="hidden md:block Subtitle">
                        <p className="text-left text-gray-100 font-rubik font-semibold text-sm">Share Screen</p>
                        <p className="hidden lg:block text-left text-gray-100 font-rubik font-medium text-xs mt-1">show your work .</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewMeet
