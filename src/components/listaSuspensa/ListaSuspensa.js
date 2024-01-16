import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
  return(
  <section className='listaSuspensa' >
    <label htmlFor={props.label}>{props.label}</label>
    <select value={props.value} onChange={e => props.alterado(e.target.value)} className='select'>
      {props.items.map(item => <option key={item} className='option'>{item}</option> )}
    </select>
  </section>
  )
}
