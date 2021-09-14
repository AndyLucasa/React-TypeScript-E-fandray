import React, { Component } from 'react'
import PeopleTile from './PeopleTile'
import People11 from '../assets/people11.jpeg'
import People4 from '../assets/people4.jpeg'
import People10 from '../assets/people10.jpeg'
import People12 from '../assets/people12.jpeg'

interface ViewerProps {
    isViewer : boolean
    isParticipant : boolean
    nbViewer : number
    nbParticipant : number
  }
export class ParticipantsAndViewers extends Component<ViewerProps> {
    
    render() {
        return (
            <div className="row-span-4">
                <div className="w-full h-11 mb-3 rounded-md bg-gray-700 grid grid-cols-2">
                    <div className={`col-span-1 rounded-md m-0.5 flex items-center justify-center ${(this.props.isParticipant) ? 'bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-25' :'bg-transparent'}`}>
                        <p className="font-poppins text-sm text-white">Participants ({this.props.nbParticipant})</p>
                    </div>
                    <div className={`col-span-1 rounded-md m-0.5 flex items-center justify-center ${(this.props.isViewer) ? 'bg-white border border-gray-100 border-opacity-20 backdrop-filter backdrop-blur-lg bg-opacity-25' : 'bg-transparent' }`}>
                        <p className="font-poppins text-sm text-white">Viewers ({this.props.nbViewer})</p>
                    </div>
                </div>

                <div className="h-32 pr-6 border-t-2 border-gray-700 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full md:overflow-y-auto">
                    <PeopleTile name="Lauren Strattenberg" peopleImg={People4} />
                    <PeopleTile name="Rey Mond" peopleImg={People12} />
                    <PeopleTile name="Nikolas Jr" peopleImg={People11} />
                    <PeopleTile name="Mile Smith" peopleImg={People10} />
                </div>
            </div>
        )
    }
}

export default ParticipantsAndViewers
