import React from 'react'
import './index.scss';
import Theme from '../../assets/img/theme.png';
import WebDevelopment from '../../assets/img/wedevelopment.png';
import Mobile from '../../assets/img/mobile.png';

const Services = () => {
    const serviceData =[
        {
            id: 1,
            icon: Theme,
            title : "Web Design",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            id: 2,
            icon: WebDevelopment,
            title : "Web Developement",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            id: 3,
            icon: Mobile,
            title : "Mobile Application",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        }
    ]

    return (
        <div className="main-container">
            <div className="services-container">
           {serviceData.map(item => <Block item={item} key={item.id} />)}
        </div>
        </div>
    )
}

export default Services

const Block = ({item})=>{
    return (
        <div className="item-container">
            <img src={item.icon} alt=" Icon Logo " />
            <div className="item-title title">{item.title}</div>
            <div className="item-desc desc">{item.desc}</div>
        </div>
    )
}