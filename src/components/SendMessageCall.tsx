import React, { Component } from 'react'
import { TiMicrophoneOutline } from 'react-icons/ti'
import { FaRegSmile } from 'react-icons/fa'
import { BsFileEarmark,BsFilePlus } from 'react-icons/bs'


export class SendMessageCall extends Component {
    render() {
        return (
            <div className="row-span-2 mt-3">
                <div className="h-5 flex mb-3">
                    <BsFilePlus className="mr-5 ml-5 text-gray-300 w-5 h-5"/>    
                    <BsFileEarmark className="mr-5 text-gray-300 w-5 h-5"/>    
                    <TiMicrophoneOutline className="mr-52 text-gray-300 w-5 h-5"/>    
                    <FaRegSmile className="text-gray-300 w-5 h-5"/>    
                </div>     
                <div className="h-12 flex justify-between items-center pr-5">
                    <input id="messagefme" type="text" placeholder="Type to write message" className="block pl-4 h-full w-64 bg-gray-800 text-gray-400 text-sm font-poppins"/>

                    <div className="h-8 flex items-center justify-center shadow-xl bg-blue-500 rounded-lg ">
                        <p className="font-poppins text-xs mx-3 text-white">Send</p>
                    </div>
                </div>     
            </div>
        )
    }
}

export default SendMessageCall
