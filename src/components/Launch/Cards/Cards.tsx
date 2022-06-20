import React from 'react';
import Slider from 'react-slick';

import cardImg1 from '../../../assets/images/cardImg1.png';
import cardImg2 from '../../../assets/images/cardImg2.png';
import cardImg3 from '../../../assets/images/cardImg3.png';

import Card from '../Card/Card';
import './Cards.scss';

type data ={
    url: string,
    title: string,
    priceB:string,
    price: string,
}

type config={
    dots: boolean,
    infinite: boolean,
    slidesToShow:3,
    slidesToScroll: number,
    autoplay:boolean,
    autoplaySpeed: number,
    pauseOnHover:boolean,
    

}

type props ={
    version:string
    text:string
}

const Cards = (props:props) => {
    const {version, text} = props;
    const data:Array<data> = [
        {
            url:cardImg1,
            title:'La Bombonera -"Temple Of World Football"',
            priceB: '0.034 BNB',
            price: '($10.88 / 10.14€)'
        },
        {
            url:cardImg2,
            title:'El Semillero Del Mundo',
            priceB: '5 BNB',
            price: '($1600.00 / 1490.50€)'
        },
        {
            url:cardImg3,
            title:'TOMBA LA BOMBA',
            priceB: '0.034 BNB',
            price: '($10.88 / 10.14€)'
        },
        {
            url:cardImg1,
            title:'La Bombonera -"Temple Of World Football"',
            priceB: '0.034 BNB',
            price: '($10.88 / 10.14€)'
        },
        {
            url:cardImg3,
            title:'TOMBA LA BOMBA',
            priceB: '0.034 BNB',
            price: '($10.88 / 10.14€)'
        },
        {
            url:cardImg2,
            title:'El Semillero Del Mundo',
            priceB: '5 BNB',
            price: '($1600.00 / 1490.50€)'
        },
        
    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 840,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
                
            },
            {
                breakpoint: 670,
                settings: {
                slidesToShow: 1.55,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 380,
                settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
        ]
    };
    return (
        <div className='cards'>
            <Slider {...settings}>
                {
                    data.map((item,index)=>{
                        return (
                            <Card 
                            key={index}
                            url= {item&&item.url}
                            title = {item.title}
                            priceB = {item.priceB}
                            price = {item.price}
                            baseColor={"#01285D"}
                            icon={true}
                            version={version}
                            text={text}
                            />
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Cards