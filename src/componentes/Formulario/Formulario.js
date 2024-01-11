import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSupensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () =>{
    const times = [
        'Programacao',
        'FrontEnd',
        'DataScience',
        'Devops',
        'Ux e design',
        'Mobile',
        'Gestão'
    ]


    const aoSalvar = (e)=>{
        e.preventDefault();
       alert("deu certo")
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                 <CampoTexto obrigatorio = {true} label="Nome" placeholder="Digite seu nome"/>
                 <CampoTexto obrigatorio = {true} label="Cargo" placeholder="Digite seu cargo "/>
                 <CampoTexto label="Imagem" placeholder="Digite sua imagem"/>
                 <ListaSupensa obrigatorio = {true} label = "Time" itens = {times}/>
                 <Botao>
                    Criar card
                 </Botao>
                 
            </form>
        </section>
    )
}


export default Formulario