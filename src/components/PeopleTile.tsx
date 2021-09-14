import React, { Component } from 'react'
import { IoVideocamOutline } from 'react-icons/io5'
import { TiMicrophone} from 'react-icons/ti'

interface PeopleProps {
    peopleImg : string
    name : string
  }
export class PeopleTile extends Component<PeopleProps> {
    render() {
        return (
            <div className="w-full mt-3 h-12 rounded-md ml-4 flex items-center">
                <div className="w-12 h-12">
                    <img src={this.props.peopleImg} alt="iphone" className="w-full h-full rounded-md object-cover"/>
                </div>

                <p className="ml-3 w-52 font-poppins text-sm text-white text-left">{this.props.name}</p>

                <TiMicrophone className="mr-5 text-gray-300 w-5 h-5"/>
                <IoVideocamOutline className="text-gray-300 w-5 h-5"/>
            </div>
        )
    }
}

export default PeopleTile
