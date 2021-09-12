import React, { Component } from 'react'
import AppBar from './AppBar'
import ListMeetHome from './ListMeetHome'
import NewMeet from './NewMeet'

export class Home extends Component {

    render() {
        return (
            <>
                <div className="row-span-1">
                    <AppBar />
                </div>
          
                <div className="grid grid-rows-9 md:grid-cols-7 md:row-span-8 row-span-11 "> 
                    <div className="NewMeeting row-span-1 md:row-span-full md:col-span-3 bg-gray-800 sticky z-0 border-b md:border-b-0 md:border-r border-gray-700 pb-3">
                        <NewMeet/>
                    </div>
                    
                    <div className="MyMeet bg-gray-800 row-span-8 md:row-span-full md:col-span-4 text-gray-300 pt-3">
                        <ListMeetHome/>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
