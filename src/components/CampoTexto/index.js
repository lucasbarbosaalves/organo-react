import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

//  let valor = 'Lucas Alves'

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label} </label>
            <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto;