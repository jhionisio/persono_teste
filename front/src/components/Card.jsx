import React from 'react';
import { DivCard, DivBody, DivTitle, DivCat } from '../style/styled'
import { FiDelete as X } from 'react-icons/fi'  

function Card(props) {
    
    return (
        <DivCard>
            <DivTitle>
                <h2>{props.post.title}</h2>
                <button onClick={props.remove}><X/></button>
            </DivTitle>
            <DivBody>
                <p>Por: {props.post.author} - {props.post.createdAt}</p>
                <h3>{props.post.contents}</h3>
            </DivBody>
            <DivCat>
                <h4>{props.post.category}</h4> 
            </DivCat>
        </DivCard>
    );
}

export default Card;