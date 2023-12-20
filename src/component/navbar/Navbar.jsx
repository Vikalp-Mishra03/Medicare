import React from 'react'
import logo from '../../assets/images/Medicare-Logo-PNG2.png'
import { CiLocationOn } from "react-icons/ci";
import { LiaSearchSolid, LiaShoppingCartSolid, LiaUserSolid } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";

export default function Navbar() {
    return (
        <>
            <div className="nav">
                <span className="img">
                    <img src={logo} alt="" />
                </span>

                <div className="location">
                    <div className="icons">
                        <CiLocationOn />
                        <span>Select Location</span>
                    </div>
                    <div className="place">New York </div>
                </div>

                <div className="input flex-center gap-1">
                    <div className="search-icon flex-center"><LiaSearchSolid /></div>
                    <div className="inputs flex-center">
                        <input type="text" placeholder='Medicine and healthcare items' />
                    </div>
                </div>

                <div className="service">
                    <span className="new ">
                        New
                    </span>
                    <div className="health-service text1">Healthcare Services </div>
                </div>

                <div className="offer flex-center gap-1">
                    <BiSolidOffer />
                    <span>Offers</span>
                </div>

                <div className="cart flex-center text1">
                    <LiaShoppingCartSolid />
                    <span >Cart</span>
                </div>
                <div className="cart flex-center text1">
                    <LiaUserSolid />
                    <span >Login</span>
                </div>

            </div>
        </>
    )
}
