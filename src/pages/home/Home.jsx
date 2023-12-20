import React from 'react'
import Banner from '../../component/banner/Banner'
import Card from '../../component/card/Card';
import mobile from '../../assets/images/mobile.png'
import girl from '../../assets/images/girl.png'
import medicine from '../../assets/images/medicine.png'
import lab from '../../assets/images/labtest.png'

export default function Home() {

    const card = [
        {
            heading: 'Instant Video',
            heading2: 'Constultation',
            title: 'Connect within 60 secs',
            icon: mobile,
            background: {
                backgroundColor: '#02cec3',
            },
        },
        {
            heading: 'Find Doctors ',
            heading2: 'near you',
            title: 'Confirmed appointments',
            icon: girl,
            background: {
                backgroundColor: 'rgb(240 218 105)'
            },
        },
        {
            heading: '24/7 ',
            heading2: 'Medicines',
            title: 'Essential at your doorstep',
            icon: medicine,
            background: {
                backgroundColor: 'rgb(231 194 212)'
            },
    
        },
        {
            heading: 'Lab ',
            heading2: 'Tests',
            title: 'Sample pickup at your home',
            icon: lab,
            background: {
                backgroundColor: 'rgb(243 247 250)'
            },
        },

    ];

    return (
        <div>
            <Banner />

            <div className="flex-around gap-1 w-1450 mt-2">
                {card.map((cardData, index) => (
                    <Card key={index} {...cardData} />
                ))}
            </div>
        </div>
    )
}
