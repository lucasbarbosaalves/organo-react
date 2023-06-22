import './ListaSuspensa.css'

const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false, placeholder}) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)} placeholder={placeholder}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa