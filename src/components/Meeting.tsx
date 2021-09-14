import React, { Component } from 'react'
import VideoCall from './VideoCall'
import ParticipantsAndViewers from './ParticipantsAndViewers'
import ChatCall from './ChatCall'
import SendMessageCall from './SendMessageCall'

export class Meeting extends Component {
    render() {
        return (
            <>
                <div className="grid grid-rows-9 md:grid-cols-6 md:row-span-8 row-span-11 h-full"> 
                    <div className="NewMeeting row-span-1 h-20 md:h-full md:row-span-full md:col-span-4 bg-gray-800 md:sticky z-0 border-b md:border-b-0 md:border-r border-gray-700 pb-3">
                        <VideoCall/>
                    </div>
                    
                    <div className="MyMeet grid px-6 grid-rows-12 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full md:overflow-y-auto bg-gray-800 row-span-8 md:row-span-full md:col-span-2 text-gray-300 pt-3 h-full">
                        <ParticipantsAndViewers isParticipant={true} isViewer={false} nbParticipant={4} nbViewer={10}/>
                        <ChatCall />
                        <SendMessageCall />
                    </div>
                </div>
            </>
        )
    }
}

export default Meeting
