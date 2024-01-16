
import {Colaborador} from '../colaborador'
import './Team.css'


export const Team = (props) => {

  // console.log(props)
  // console.log(props.colaboradores.map(colaborador => colaborador.nome))
   console.log(props.colaboradores.map(colaborador => colaborador.imagem))
  return(
    <section className='team' style={{backgroundColor : props.secondaryColor}}>
      <h3 style={{borderBlockColor: props.primaryColor}}>{props.nome}</h3>
      <div className='colaboradores'>
      {props.colaboradores.map(colaborador => 
      <Colaborador
        key={colaborador.nome}
        src={colaborador.imagem} 
        nome={colaborador.nome}
        cargo={colaborador.cargo}
        />
      )}
      </div>
    </section>

  )
}
