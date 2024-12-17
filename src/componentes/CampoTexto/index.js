import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    // Maneiras alternativas de deixar o placeholder dinâmico com interpolação
   // const placeholderModificado = `Digite seu ${placeholder}` e no "html" <input placeholder={placeholderModificado}/>
  // Ou <input placeholder={`${props.placeholder} . . .`}/>

  const aoDigitado = (evento) =>{
    props.aoAlterado(evento.target.value)
    }
  
  return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto