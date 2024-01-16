import { CampoTexto, ListaSuspensa, Button } from "../../components"
import { useState } from "react"
import './formulario.css'

export const Formulario = (props) => {
  const [valor, setValor] = useState('')
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')

  const times = [
    '',
    'Programação',
    'Front-End',
    'Data Sciense',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]
  const clicar = (e) => {
    e.preventDefault()
    console.log('click', nome, cargo, imagem, team)
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
        items ={times} 
        valor ={team}
        alterado={valor => setTeam(valor)}
      />
      <Button title='Crear Card'/>
    </form>
  </section>
  )
}
