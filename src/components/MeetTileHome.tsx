import React from 'react'
import {MdMoreHoriz} from 'react-icons/md'
import {AiOutlineClockCircle} from 'react-icons/ai'

interface TileProps {
    title: string;
    time : string;
    peopleImg1 : string;
    peopleImg2 : string;
    peopleImg3 : string;
    peopleOverflow : string
  }

export class MeetTileHome extends React.Component<TileProps> {
    render() {
        return (
            <div className="animate__animated animate__fadeInRight justify-around flex flex-col py-6 px-4 lg:px-5 h-40 lg:h-48 mx-8 md:mx-10 lg:mx-16 mb-8 rounded-xl bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-xl">
                <div className="grid grid-flow-col justify-between">
                    <p className="text-left font-poppins text-sm lg:text-base text-white">{this.props.title}</p>
                    <div className="h-7 w-10 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10  rounded-lg">
                        <MdMoreHoriz className="text-gray-100 block w-6 h-6 shadow-xl"/>
                    </div>
                </div>

                <div className="flex flex-row mb-10">
                    <AiOutlineClockCircle className="text-gray-100 block z-10 w-4 h-4 shadow-xl"/>
                    <p className="ml-1 text-left font-rubik text-xs text-white">{this.props.time}</p>
                </div>
                <div className="flex flex-row">
                    <div className="h-9 mr-2 lg:h-12 w-9 lg:w-12 flex items-center justify-center ">
                        <img src={this.props.peopleImg1} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                    </div>
                    <div className="h-9 mr-2 lg:h-12 w-9 lg:w-12 flex items-center justify-center ">
                        <img src={this.props.peopleImg2} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                    </div>
                    <div className="h-9 mr-2 lg:h-12 w-9 lg:w-12 flex items-center justify-center ">
                        <img src={this.props.peopleImg3} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                    </div>
                    <div className={`h-9 mr-6 md:mr-32 lg:mr-44 lg:h-12 w-9 lg:w-12 flex items-center justify-center rounded-lg ${(this.props.peopleOverflow === "")?'bg-transparent' :'bg-blue-500 shadow-xl'}`}>
                        <p className="font-poppins text-sm text-white">{this.props.peopleOverflow}</p>
                    </div>
                    <div className="h-9 mr-2 lg:h-12 w-9 lg:w-12 flex items-center justify-center md:border border-gray-100 border-opacity-20 bg-white backdrop-filter backdrop-blur-lg md:bg-opacity-25 bg-opacity-0 rounded-md lg:rounded-xl">
                        <p className="font-poppins text-xs lg:text-sm text-white">id</p>
                    </div>
                    <div className="h-9 lg:h-12 w-20 lg:w-24 flex items-center justify-center shadow-xl bg-blue-500 rounded-md lg:rounded-xl">
                        <p className="font-poppins text-xs lg:text-sm text-white">start</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetTileHome
