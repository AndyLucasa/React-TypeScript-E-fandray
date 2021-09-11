import React, { Component } from 'react'
import {HiMenu} from 'react-icons/hi'

// interface MenuProps {
//     open: boolean;
//     onClose: () => void;
// }

export class BurgerMenu extends Component {
    
    render() {
        return (
            <div>
                <HiMenu className="block h-8 w-8"/>
            </div>
        )
    }
}

export default BurgerMenu
