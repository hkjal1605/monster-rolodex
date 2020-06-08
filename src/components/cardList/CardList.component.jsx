import React from 'react';
import './CardList.styles.scss';
import { Card } from '../card/Card.component';


export const CardList = props => {
    return <div className='cardList'>
                { props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster}/>
                )) 
                }
            </div>;
}