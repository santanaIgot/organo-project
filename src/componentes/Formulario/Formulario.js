import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSupensa from '../ListaSuspensa'
import './Formulario.css'



// const [listaSuspensa, setListaSuspensa] = useState('')


const Formulario = (props) =>{
    

    const [nome,setNome] = useState('')
    const [cargo, setCargo ] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e)=>{
        e.preventDefault();

        props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem,
                time
        })
    //    console.log(
    //    nome,
    //    cargo,
    //    imagem,
    //    time);
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                 <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                 />
                 <CampoTexto 
                    obrigatorio = {true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo "
                    valor ={cargo}
                    aoAlterado = {valor => setCargo(valor)}
                 />
                 <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite sua imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                 />
                 <ListaSupensa 
                    obrigatorio = {true} 
                    label = "Time" 
                    itens = {props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                    
                 />
                 <Botao>
                    Criar card
                 </Botao>
                 
            </form>
        </section>
    )
}


export default Formulario