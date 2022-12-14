import React, {useState, useEffect, useCallback} from 'react'
import { DivCardPost, DivTitlePost, DivPostLista, DivFlex, DivBodyPost, SearchWrapper, DivInp, NewPost } from '../style/styled'
import CardForm from './CardForm'
import api from "../providers/api";
import CardList from './CardList'
import CardSearchList from './CardSearchList'

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count,setCount]= useState (0);
  const [busca, setBusca] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [newPostFlag, setNewPostFlag] = useState(false);

  const findByPartial = async (param) => {
    setBusca(param);
    setCount(count + 1);
    try {
      api
      .get(`post_api/post/find_by_partial/${param}`)
      .then(res => {
        setLoading(false);
        if (res.data) {
          setFilteredPosts(res.data);
        }
      })
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const post = async () => {
    setCount(count + 1);
    try {
      api
      .post(`post_api/post`, nPost)
      .then(res => {
        setLoading(false);
        console.log(res);
      })
    } finally {
      setCount(count + 1);
    }
  };

  const handleChange = (e) => {
      findByPartial(e.target.value);
  };

  const handleNewPostChange = () => {
    setNewPostFlag(true)
  };

  const handleDontPostChange = () => {
    setNewPostFlag(false)
  };

  const limpar = () => {
    setCount(count + 1);
    setBusca("");
  };

  const getAll = async () => {
    try {
      api
      .get(`post_api/post`)
      .then(res => {
        setLoading(false);
        if (res.data) {
      setPosts(res.data);
        }
      })
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, [count]);

  const deleteById = async (param) => {
    setCount(count+1)
    await api.delete(`post_api/post/delete_by_id/${param.id}`);
  };

  const [nPost, setNPost] = useState({title:"",author:"",contents:"",category :""})

  const handleNewNPostChange = (e) => {
    setNPost({ ...nPost, [e.target.name]: e.target.value });
  };

  return (
    <>
    <SearchWrapper>
        <NewPost>
            <h1>Post:</h1>
            <button style={{ display: newPostFlag === true ? "block" : "none" }} onClick={handleDontPostChange}>
                <h2>-</h2>
            </button>
            <button style={{ display: newPostFlag === false ? "block" : "none" }} onClick={handleNewPostChange}>
                <h2>+</h2>
            </button>
        </NewPost>
        <DivInp>
            <input                 
                type="text"
                placeholder="Search Posts..."
                name="search"
                value={busca}
                onChange={handleChange}
            />
            <button style={{ display: busca !== "" ? "inline" : "none" }} onClick={limpar}>
                Limpar
            </button>
        </DivInp>
    </SearchWrapper>
    <DivPostLista>
      <DivCardPost style={{ display: newPostFlag === true ? "block" : "none" }}>
        <form onSubmit={post}>
          <DivFlex>
            <DivTitlePost>
                <h2>Título</h2>
                <input type="text" name="title" value={posts.title} onChange={handleNewNPostChange}/>
                <h3>Autor</h3>
                <input type="text" name="author" value={posts.author} onChange={handleNewNPostChange}/>
                <h3>Categoria</h3>
                <input type="text" name="category" value={posts.category} onChange={handleNewNPostChange}/>
            </DivTitlePost>
            <DivBodyPost>
                <h3>Conteúdo</h3>
                <textarea name="contents" cols="30" rows="10" value={posts.contents} onChange={handleNewNPostChange}></textarea>
                <button type="submit">Adicionar</button>
            </DivBodyPost>
          </DivFlex>
        </form>
      </DivCardPost>
    </DivPostLista>
    {
       busca === "" ? 
       <CardList 
        flag={newPostFlag}
        posts={posts}
        deleteById={deleteById}
       /> 
       : 
       <CardSearchList 
        flag={newPostFlag}
        posts={filteredPosts}
        deleteById={deleteById}
       /> 
    }
    </>
  )
}