import React, { Component } from 'react'

export class NewMeet extends Component {
    render() {
        return (
            <div className="pt-4 md:pt-10 flex flex-wrap justify-center">
                <div className="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl bg-yellow-400 mx-3 md:m-2 lg:m-4"></div>
                <div className="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl bg-blue-600 mx-3 md:m-2 lg:m-4"></div>
                <div className="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl bg-blue-600 mx-3 md:m-2 lg:m-4"></div>
                <div className="h-16 w-16 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg md:rounded-xl bg-blue-600 mx-3 md:m-2 lg:m-4"></div>
            </div>
        )
    }
}

export default NewMeet
