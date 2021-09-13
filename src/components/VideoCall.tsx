import React, { Component } from 'react'
import {TiMicrophone,TiVideo,TiUserAdd,TiMediaRecord} from 'react-icons/ti'
import {MdScreenShare} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {IoIosArrowUp,IoIosArrowForward} from 'react-icons/io'
import People11 from '../assets/people11.jpeg'
import People4 from '../assets/people4.jpeg'
import People10 from '../assets/people10.jpeg'
import People12 from '../assets/people12.jpeg'
import CallTile from './CallTile'

export class VideoCall extends Component {
    render() {
        return (
            <div className="flex flex-col mx-14 ">
                <div className="relative h-80 w-auto m-5 rounded-lg">
                    <CallTile isMe={true} name="Lauren Strattenberg" peopleImg={People4}/>
                </div>
                <div className="flex flex-wrap mx-5 justify-between">
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Rey Mondo" peopleImg={People12}/>
                    </div>
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Nicholas Jr" peopleImg={People11}/>
                    </div>
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Mile Smith" peopleImg={People10}/>
                    </div>
                </div>
                <div className="h-12 w-auto m-5 flex flex-wrap justify-between">
                    <div className="h-full w-16 flex items-center justify-center border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-xl rounded-lg">
                        <TiMicrophone className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowUp className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>

                    <div className="h-full w-16 flex items-center justify-center border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-xl rounded-lg">
                        <TiVideo className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowUp className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>

                    <div className="h-full w-16 flex items-center justify-center border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-xl rounded-lg">
                        <TiUserAdd className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowUp className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>

                    <div className="h-full  flex items-center justify-center shadow-xl bg-red-500 rounded-lg ">
                        <p className="font-poppins text-xs mx-7 text-white">End Meeting</p>
                    </div>

                    <div className="h-full w-16 flex items-center justify-center border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-xl rounded-lg">
                        <MdScreenShare className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowUp className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>

                    <div className="h-full w-16 flex items-center justify-center border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-xl rounded-lg">
                        <TiMediaRecord className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowUp className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>

                    <div className="h-full w-16 flex items-center justify-center bg-blue-500 shadow-xl rounded-lg">
                        <AiFillMessage className="text-gray-100 block z-10 w-6 h-6 mr-2 shadow-xl"/>
                        <IoIosArrowForward className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoCall
