import React from 'react'
import {TiMediaRecord,TiMicrophone} from 'react-icons/ti'

interface CallProps {
    name: string;
    peopleImg : string;
    isMe: boolean
  }

export class CallTile extends React.Component<CallProps> {
    render() {
        return (
            <>
                <div className={`absolute z-10  justify-between flex-wrap flex ${(this.props.isMe) ?'w-full h-10 mt-64 px-7' : 'px-3 w-52 h-7 mt-28'}`}>
                    <div className={`h-full flex items-center justify-center bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-xl rounded-lg ${(this.props.isMe) ?' w-48' : 'w-24'}`}>
                            <p className=" font-poppins text-xs text-white">{this.props.name}</p>
                            <TiMediaRecord className={` text-green-500 block z-10  shadow-xl ${(this.props.isMe) ?'ml-3 w-4 h-4':'ml-2 w-3 h-3'}`}/>
                    </div>
                    <div className={`h-full flex items-center justify-center  shadow-xl rounded-lg ${(this.props.isMe) ?' w-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30' : 'w-7 bg-blue-500'}`}>
                            <TiMicrophone className={`text-gray-100 block z-10 shadow-xl  ${(this.props.isMe) ?' w-5 h-5':'w-4 h-4'}`}/>
                    </div>
                </div>
                
                <img src={this.props.peopleImg} alt="photoPeople" className="relative w-full h-full rounded-lg object-cover"/>
            </>
        )
    }
}

export default CallTile
