import './Colaborador.css';

export const Colaborador = ({nome, src, cargo}) => {
  console.log({nome, src, cargo})
  return(
  <section className='colaborador'>
    <div className='cabecalho'>
      <img src={src} alt={nome} />
    </div>
    <div className='rodape'>
      <h4>{nome}</h4>
      <h5>{cargo}</h5>
    </div>
  </section>
  )
}
