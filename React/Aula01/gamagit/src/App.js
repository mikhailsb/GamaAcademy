import React from 'react';
import './App.css';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario ] = React.useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
  }

  return (
    <>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
