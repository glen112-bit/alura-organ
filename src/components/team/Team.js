import './Team.css'
export const Team = (props) => {
  return(
    <section className='team' style={{backgroundColor : props.secondaryColor}}>
      <h3 style={{borderBlockColor: props.primaryColor}}>{props.nome}</h3>
    </section>

  )
}
