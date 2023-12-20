import React from 'react'
import { TbDropletDown } from "react-icons/tb";
import { TbArrowCapsule } from "react-icons/tb";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import doctor from '../../assets/images/pngwing.png'
export default function Banner() {
  return (
    <div className='banner'>
      <div className='healthcare align-center'>Healthcare</div>


      <div className="doctor-img">
        <img src={doctor} alt="" />
      </div>


      <div className="work flex-around">
        <div className="left flex-center gap-1">
          <div className="drop-icon flex-center">
            <TbDropletDown />
          </div>
          <span className='text2 slate fs-20'>Reduce HbA1c</span>
        </div>
        <div className="right flex-center gap-1">
          <div className="drop-icon flex-center bc-light-green">
            <TbArrowCapsule />
          </div>
          <span className='text2 slate fs-20'>No More medications</span>
        </div>
      </div>

      <div className="para slate">
        if you're looking for a creative and easy way to build a website, wow! is the perfect solution.
      </div>

      <div className="book flex-end gap-1">
        <div className="consultation flex-center">
          Book Consultation
        </div>
        <div className="arrow drop-icon flex-center">
          <LiaLongArrowAltRightSolid />
        </div>
      </div>
    </div>
  )
}
