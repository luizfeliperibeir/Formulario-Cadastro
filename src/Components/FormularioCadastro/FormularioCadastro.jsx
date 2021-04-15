import React, {useState} from "react";
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core'

function FormularioCadastro(props) {
  const [nome,setNome] = useState();
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promoção, setPromoção] = useState('true')
  const [novidades, setNovidades] = useState('true')

  
  return (
    <form
    onSubmit={(event)=>{
      event.preventDefault();
      props.aoEnviar({nome, sobrenome, cpf, promoção, novidades})
    }}
    >

      <TextField 
      value={nome}
      onChange={(event)=> {
        let tmpNome = event.target.value
        if(tmpNome.length > 20)
        {
          tmpNome = tmpNome.substr(0,20)
        }
        setNome(tmpNome)
      }}
      id="outlined-basic" label="Nome" variant="outlined" margin="normal" fullWidth/>

      <TextField 
      value={sobrenome}
      onChange={(event)=> {
        setSobrenome(event.target.value)
      }}
      id="outlined-basic" label="SobreNome" variant="outlined" margin="normal" fullWidth/>

      <TextField 
      value={cpf}
      onChange={(event)=> {
        setCpf(event.target.value)
      }}
      id="outlined-basic" label="CPF" variant="outlined" margin="normal" fullWidth/>

      <FormControlLabel 
      label="Promoções" 
      control={<Switch 
        checked={promoção}
        onChange={(event)=>
        setPromoção(event.target.checked)}
      name="Promoções" 
      defaultChecked={promoção} 
      color="primary">
      </Switch>}> </FormControlLabel>
      
      
      <FormControlLabel 
      label="Novidades" 
      control={<Switch 
      checked={novidades}
      onChange={(event)=>
        setNovidades(event.target.checked)}
      name="Novidades" defaultChecked={novidades} color="primary"></Switch>}></FormControlLabel>
      
      
      <Button type="submit" variant="contained" color="primary">Confirmar</Button>
    </form>
  );
}
export default FormularioCadastro;
