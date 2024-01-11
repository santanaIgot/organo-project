import { useState } from 'react'
import './CampoTexto.css'


const CampoTexto = (props) =>{
    // let valor = ''

    // const [valor,setValor]=useState('')
    const aoDigitado = (e) => {
        // setValor (e.target.value);
        // console.log(valor);
        props.aoAlterado(e.target.value);
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required = {props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}


export default CampoTexto