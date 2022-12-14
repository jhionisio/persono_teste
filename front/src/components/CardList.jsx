import React from 'react';
import { DivLista } from '../style/styled'
import CardNull from './CardNull'
import Card from './Card'

function CardList(props) {
    
    return (
        <DivLista style={{ marginTop: props.flag === true ? "-20%" : "-40%" }}>
        {props.posts.length > 0 ? 
            props.posts &&
            props.posts.length && 
              props.posts.map((post,i) => (
                <Card
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

export default CardList;