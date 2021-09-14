import React, { Component } from 'react'
import People11 from '../assets/people11.jpeg'
import People4 from '../assets/people4.jpeg'
import People10 from '../assets/people10.jpeg'
import People12 from '../assets/people12.jpeg'
import CallTile from './CallTile'
import ButtonCall from './ButtonCall'

export class VideoCall extends Component {
    render() {
        return (
            <div className="flex flex-col mx-14 ">
                <div className="relative h-80 w-auto m-5 rounded-lg">
                    <CallTile isMe={true} name="Lauren Strattenberg" peopleImg={People4}/>
                </div>
                <div className="flex flex-wrap mx-5 justify-between">
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Rey Mond" peopleImg={People12}/>
                    </div>
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Nikolas Jr" peopleImg={People11}/>
                    </div>
                    <div className="h-36 w-52 rounded-lg">
                        <CallTile isMe={false} name="Mile Smith" peopleImg={People10}/>
                    </div>
                </div>

                <ButtonCall/>
            </div>
        )
    }
}

export default VideoCall
