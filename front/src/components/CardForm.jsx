import React from 'react'

export default function CardForm(props) {
  return (
    <div>
        <form method="post" onSubmit={props.addPost}>
            <div>
                <label>Título</label>
                <input type="text" name="title" value={props.post.title} onChange={props.digit}/>
            </div>
            <div>
                <label>Autor</label>
                <input type="text" name="author" value={props.post.author} onChange={props.digit}/>
            </div>
            <div>
                <label>Conteúdo</label>
                <textarea name="contents" cols="30" rows="10" value={props.post.contents} onChange={props.digit}></textarea>
            </div>
            <div>
                <label>Categoria</label>
                <input type="text" name="category" value={props.post.category} onChange={props.digit}/>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}
