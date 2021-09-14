import React, { Component } from 'react'

interface CallProps {
    name?: string;
    time?: string;
    message: string;
    peopleImg : string;
    isMe?: boolean
    isNewUser : boolean
  }
export class MessageTile extends Component<CallProps> {
    render() {
        return (
            <>
                <div className="flex justify-between my-1">
                    <p className={`font-poppins text-xs ml-16 text-white ${this.props.isNewUser ?'mt-2':'hidden'}`}>{this.props.name}</p>
                    <p className={`font-poppins text-xs  text-white ${this.props.isNewUser ?'mt-2':'hidden'}`}>{this.props.time}</p>
                </div>
                <div className="flex flex-row my-1">
                    <div className={`h-8 w-8 rounded-md mx-3 bg-yellow-300 ${this.props.isNewUser ?'':'hidden'}`}>
                        <img src={this.props.peopleImg} alt="person" className="w-full h-full rounded-md object-cover"/>
                    </div>
                    <div className={`h-8 rounded-lg flex items-center justify-center md:border border-gray-300 border-opacity-20 bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl ${this.props.isNewUser ?'':'ml-14'}`}>
                        <p className="font-rubik ml-3 mr-5 text-xs text-white">{this.props.message}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default MessageTile
