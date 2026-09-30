import './App.css'
import { useState } from 'react'

function App() {


  return (
    <>
      <h1 className="x1"> AGENDA UNI-JORGE </h1>
      <br /><br />
      <div className="container">
        <div className="caixa">
          <input className="ip" placeholder="ESCREVA SEU NOME AQUI " />
          <br />
          <input className="ip" placeholder="ESCREVA SEU CPF AQUI" type="number"/>
          <br />
          <input className="ip" placeholder="RG" type="number" />
          <br />
          <input className="ip" placeholder="ESCREVA O NOME DO PAI" type="text" />
          <br />
          <input className="ip" placeholder="ESCREVA O NOME DA MÃE " type="text" />
          <br />
          <input className="ip" placeholder="NACIONALIDADE" type="text" />
          <br />
          <input className="ip" placeholder="CIDADE DE ORIGEM" type="text" />
          <br />
          <input className="ip" placeholder="UF DE ORIGEM"/> 
          <br />
          <input className="ip" placeholder="TELEFONE" type="number" />
          <br />
          <input className="ip" placeholder="EMAIL" type="email" />
          <br />
          <input className="ip"  placeholder="HOME PAGE" />
          <br />
          <button className="e1"> SUBMIT </button>
        </div>
      </div>
    </>
  )
}

export default App
