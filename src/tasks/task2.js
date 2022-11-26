import React from 'react';
import {Data} from './Data'
import MyCard from "../components/MyCard";

const Task2 = () => {
    return (
        <div className="Cards">
            {Data.map(card =>
                <MyCard card={card}/>
            )}
        </div>
    );
};

export default Task2;