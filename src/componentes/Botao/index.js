import './Botao.css'

const Botao = (props)=>{
    return(
        <button className='botao'>{props.children}</button>
        // quer dizer que é os filhos dele w
    )
}

export default Botao