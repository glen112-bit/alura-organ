import { CampoTexto, ListaSuspensa, Button, Team } from "../../components"
import { useState } from "react"
import './formulario.css'

export const Formulario = (props) => {
  const [valor, setValor] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')

  const clicar = (e) => {
    e.preventDefault()
    // console.log('click', nome, cargo, imagem, team)
    props.colaboradorCadastrado ({
      nome,
      cargo,
      imagem,
      team
    })
  }
  
    const digitado = (e) => {
    return (
      setValor(e.target.value)
    )
  }

  return(
  <section className="formulario">
    <form action="" onSubmit={clicar}>
      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <CampoTexto 
        change={digitado} 
        obligatorio={true} 
        type="text" 
        label='Nome' 
        place='Digite seu Nome' 
        valor={nome}
        alterado={valor => setNome(valor)}
      />
      <CampoTexto 
        obligatorio={true} 
        type="text" 
        label='Cargo' 
        place='Digite seu Cargo'
        valor={cargo}
        alterado={valor => setCargo(valor)}
      />
      <CampoTexto 
        type="text" 
        label='Imagem' 
        place='Digite o endereco de sua Imagem'
        valor={imagem}
        alterado={valor => setImagem(valor)}
      />
      <ListaSuspensa 
        label='Team' 
        teams = {team.nome}
        items ={props.teams} 
        valor ={team}
        alterado={valor => setTeam(valor)}
      />
      <Button title='Crear Card'/>
    </form>
  </section>
  )
}
