import React from 'react';

import './Card.styles.scss';

export const Card = (props) => (
     <div className='card'>
        <img alt='Monster' src={`https://robohash.org/${props.monster.id}?set=set2`} className='card__img'></img>
        <h1 className='card__name'>{ props.monster.name }</h1>
        <h2 className='card__email'>{ props.monster.email }</h2>
     </div>
)