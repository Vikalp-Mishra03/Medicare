import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
export default function Card(props) {


    const { heading,heading2, title, icon, background } = props
    return (
        <div className='card' style={background}>
            <h1 className='text1'>{heading}</h1>
            <h1 className='text1'>{heading2}</h1>
            <p className='mt-1 title'>{title}</p>
            <div className="card-icon mt-1">
                <img src={icon} alt="" />
            </div>

            <div className="drop-icon  bc-text1 slate flex-center right-arrow">
                <LiaLongArrowAltRightSolid />
            </div>
        </div>
    )
}
