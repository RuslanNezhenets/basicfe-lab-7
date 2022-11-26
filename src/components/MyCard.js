import React from 'react';
import {Card, Image} from "react-bootstrap";

const MyCard = ({card}) => {
    console.log(card)
    return (
        <Card className="Card">
            <Image className="Card__img" src={card.img}/>
            <div className="Card__name">{card.name}</div>
            <div className="Card__price">{card.price}</div>
        </Card>
    );
};

export default MyCard;