import './CampoTexto.css'

export const CampoTexto = (props) => {
  const digitado = (e) => {
    props.alterado(e.target.value)
  }

  return(
     <div className='campoTexto'>
       <label htmlFor="nome">{props.label}</label>
       <input value={props.valor} onChange={digitado} required={props.obligatorio} type={props.type} placeholder={props.place}/>
     </div>
   )
}

