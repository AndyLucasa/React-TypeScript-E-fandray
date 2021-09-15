import React, { Component } from 'react'
import {BiMessageSquare} from 'react-icons/bi'
import { IoIosArrowUp } from 'react-icons/io'
import MessageTile from './MessageTile'
import People11 from '../assets/people11.jpeg'
import People10 from '../assets/people10.jpeg'
import People12 from '../assets/people12.jpeg'

export class ChatCall extends Component {
    render() {
        return (
            <div className="row-span-6">
                <div className="h-9 w-full px-4 bg-gray-700 flex items-center">
                    <BiMessageSquare className="mr-4 w-5 h-5"/>
                    <p className="font-poppins mr-64 text-xs text-white text-left">Chat</p>
                    <IoIosArrowUp className="w-4 h-4"/>
                </div>

                <div className="h-60 m-2 mr-0 pt-1 pr-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full md:overflow-y-auto">
                    
                    <MessageTile
                        name="Rey Mond"
                        time="10:24"
                        peopleImg={People12}
                        message="Hey Guys!"
                        isNewUser={true}
                    />
                    
                    <MessageTile
                        name="Rey Mond"
                        time="10:24"
                        peopleImg={People12}
                        message="Everyone ready for the meeting ?"
                        isNewUser={false}
                    />
                    
                    <MessageTile
                        name="Nikolas Jr"
                        time="10:25"
                        peopleImg={People11}
                        message="Yeah man, let's do this !"
                        isNewUser={true}
                    />
                    
                    <MessageTile
                        name="Mile Smith"
                        time="10:27"
                        peopleImg={People10}
                        message="Hi everyone! I'm ready too !"
                        isNewUser={true}
                    />
                    
                    <MessageTile
                        name="Mile Smith"
                        time="10:27"
                        peopleImg={People11}
                        message="10:30 ?"
                        isNewUser={false}
                    />
                </div>
            </div>
        )
    }
}

export default ChatCall
