import React, { Component } from 'react'
import ListMeetHome from './ListMeetHome'
import NewMeet from './NewMeet'

export class Home extends Component {

    render() {
        return (
            <>
                <div className="grid grid-rows-9 md:grid-cols-7 md:row-span-8 row-span-11 h-full"> 
                    <div className="NewMeeting row-span-1 h-20 md:h-full md:row-span-full md:col-span-3 bg-gray-800 md:sticky z-0 border-b md:border-b-0 md:border-r border-gray-700 pb-3">
                        <NewMeet/>
                    </div>
                    
                    <div className="MyMeet scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full md:overflow-y-auto bg-gray-800 row-span-8 md:row-span-full md:col-span-4 text-gray-300 pt-3 h-full">
                        <ListMeetHome/>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
