import React from 'react';
import CardNull from './CardNull'
import Card from './Card'
import { DivLista } from '../style/styled'

function CardSearchList(props) {
    
    return (
        <DivLista style={{ marginTop: props.flag === true ? "-20%" : "-40%" }}>
        {props.posts.length > 0 ? 
            props.posts &&
            props.posts.length && 
              props.posts.array.map((post,i) => (
                <Card
                  flag={props.flag}
                  key={i}
                  post={post}
                  remove={props.deleteById.bind(this,post)}
                />
              ))
          : <CardNull/> 
        }
      </DivLista>
    );
}

export default CardSearchList;