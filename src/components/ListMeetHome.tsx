import React, { Component } from 'react'
import Decoration from '../assets/img1.jpeg'
import People1 from '../assets/people1.jpeg'
import People2 from '../assets/people2.jpeg'
import People3 from '../assets/people3.jpeg'
import People4 from '../assets/people4.jpeg'
import People5 from '../assets/people5.jpeg'
import People6 from '../assets/people6.jpeg'
import People7 from '../assets/people7.jpeg'
import People8 from '../assets/people8.jpeg'
import People9 from '../assets/people9.jpeg'
import MeetTileHome from './MeetTileHome'


export class ListMeetHome extends Component {
    render() {
        return (
            <div className="relative pt-0 md:pt-10 ">
                <div className="h-40 lg:h-48 mx-8 md:mx-10 lg:mx-16 mb-5 lg:mb-8 rounded-xl">
                    <div className="z-10 absolute h-24 w-auto mt-24 md:mt-20 lg:mt-24 ml-3 md:ml-4">
                        <p className="text-left text-2xl md:text-3xl lg:text-5xl font-righteous text-gray-100">IGGLIA 3 - N° 48</p>
                        <p className="text-left text-base lg:text-lg font-light font-righteous text-gray-100 md:mt-1">AMBININTSOA Ny Aina Andy Lucas</p>
                    </div>

                    <img src={Decoration} alt="iphone" className="z-0 relative w-full h-full rounded-xl object-cover"/>
                </div>

                < MeetTileHome 
                    title="Design Daily Zoom Meeting" 
                    time="10:00 -11:30 | starts in 18 hours" 
                    peopleImg1={People3} 
                    peopleImg2={People2}
                    peopleImg3={People4}
                    peopleOverflow="+6"
                />

                < MeetTileHome 
                    title="Daily Standup Tech Conference" 
                    time="14:00 -16:30 | starts in 22 hours" 
                    peopleImg1={People5} 
                    peopleImg2={People1}
                    peopleImg3={People6}
                    peopleOverflow=""
                />

                < MeetTileHome 
                    title="Marketing Strategy Development" 
                    time="18:00 -20:00 | starts in 24 hours" 
                    peopleImg1={People9} 
                    peopleImg2={People8}
                    peopleImg3={People7}
                    peopleOverflow="+2"
                />  

            </div>
        )
    }
}

export default ListMeetHome
