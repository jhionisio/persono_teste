import styled from 'styled-components'

  export const DivPostLista = styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 2%;
    display: flex;
    flex-wrap: initial;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
  `

  export const DivLista = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 2%;
  display: flex;
  flex-wrap: initial;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  ` 

  export const DivCard = styled.div`
    border: solid 1px #333;
    box-shadow: 5px 5px 5px #333;
    text-align: center;
    width: 50%;
    height: 35vh;
    margin: 1%;
    @media (max-width: 992px) {
      height: 100%;
    }
  `;

  export const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14%;
    @media (max-width: 992px) {
      margin-left: 8%;
    }
    h3{
      color: #D3d3d3;
    }
    h4{
      color: white;
      border-radius: 15px;
      background-color: blue;
      padding: 1% 3% 1% 3%;
    }
    p {
      color: #D3d3d3;
      padding-bottom: 10px;
    }
  `;

  export const DivCat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14%;
    margin-top: 7%;
    margin-bottom: 5%;
    @media (max-width: 992px) {
      margin-left: 8%;
      margin-bottom: 5%;
    }
    h4{
      color: white;
      border-radius: 15px;
      background-color: blue;
      padding: 1% 3% 1% 3%;
    }
  `;

  export const DivTitle = styled.div`
    margin-top: 7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 14%;
    margin-right: 8%;
    @media (max-width: 992px) {
      margin-left: 8%;
    }
    button{
      color: white;
      background: none;
      border: 0;
      margin-top: 1.5%;
    }
    h2{
      color: white;
    }
  `;

  export const DivCardPost = styled.div`
    border: solid 1px #333;
    box-shadow: 5px 5px 5px #333;
    text-align: center;
    width: 50%;
    height: 35vh;
    margin: 1%;
    display: flex;
    flex-direction: row;
    margin-top: -20%;
  @media (max-width: 992px) {
    height: 100%;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 20%;
  }
  `;

  export const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `;

  export const DivBodyPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 14;
    textarea{
      background-color: #666666;
      border: 0;
      border-radius: 15px;
      padding: 5%;
      width:80%;
      margin: 2%;
      font-family: Arial, Helvetica, sans-serif;
      :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
      ::placeholder {
        color: white;
      }
    }
    @media (max-width: 992px) {
      margin-left: 8%;
    }
    h3{
      color: #D3d3d3;
      margin-top: 15%;
      margin-bottom: 2%;
    }
    button{
      background-color: white;
      border: 0;
      margin-left: 55%;
      margin-top: 3.5%;
      margin-bottom: 5%;
    }
  `;

  export const DivTitlePost = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: flex-start ;
    margin-left: 4%;
    @media (max-width: 992px) {
      margin-left: 2%;
    }
    button{
      color: white;
      background: none;
      border: 0;
      margin-top: 1.5%;
    }
    h2{
      color: white;
      margin-top: 4%;
      margin-bottom: 2%;
    }
    h3{
      color: white;
      margin-top: 4%;
      margin-bottom: 2%;
    }
    input{
      background-color: #666666;
      border: 0;
      border-radius: 15px;
      padding: 2%;
      width:80%;
      margin: 2%;
      font-family: Arial, Helvetica, sans-serif;
      :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
      ::placeholder {
        color: white;
      }
    }
  `;
    
  export const DivCardNull = styled.div`
    background-color : #a0a0a0;
    border: solid 1px #333;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 50em;
    height: 30em;
    margin: 1em;
    h1{
      margin-top: 15%;
      padding: 20px;
      background-color : #a0a0a0;
      color: white;
    }
    p{
      margin-top: 10%;
      padding: 20px;
      background-color : #a0a0a0;
    }
  `;

  export const P = styled.p`
    padding-bottom: 10px;
    border-radius: 15px;
  `

  export const Inp = styled.input`
    background-color: white;
    width: 5em;
    height: 3em;
    margin: 10px;
  `

  export const NewPost = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    margin-top: 2%;
    border-radius: 15px;
    width: 50%;
    background-color: #333;
    button{
      color: white;
      background-color: #333;
      text-decoration: none;
      border: 0;
      height: 30px;
      width: 30px;
      margin-top: 0.6%;
    }
    h1{
      background-color: #333;
      color: white;
    }
    h2{
      background-color: #333;
      color: white;
    }
  `

  export const DivInp = styled.div`
    width: 30%;
    min-height: 5vh;
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #666666;
    border-radius: 15px;
    padding: 0.1%;
    input{
      background-color: #666666;
      border: 0;
      width:80%;
      margin: 2%;
      font-family: Arial, Helvetica, sans-serif;
      :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }
      ::placeholder {
        color: white;
      }
    }
    button{
      margin: 2%;
      width: 20%;
      background-color: #a0a0a0;
      border: 0;
      border-radius: 15px;
    }
  `

  export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
  `