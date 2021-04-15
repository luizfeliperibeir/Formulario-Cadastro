import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro'
import {Container} from '@material-ui/core'
class App extends Component{
  render (){
    return (
      <Container component="article" maxWidth='sm'>
        <Typography variant="h3">
          Formulário Cadastro
        </Typography >
        <FormularioCadastro aoEnviar={
          aoEnviarForm
        }/>
      </Container>
    )
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

export default App