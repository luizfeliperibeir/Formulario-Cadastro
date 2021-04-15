import React, {useState} from "react";
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core'

function FormularioCadastro() {
  const [nome,setNome] = useState();
  
  return (
    <form
    onSubmit={(event)=>{
      event.preventDefault();
      console.log(nome);
    }}
    >

      <TextField 
      value={nome}
      onChange={(event)=> {
        setNome(event.target.value)
        if(nome.length > 20)
        {
       setNome(nome.substr(0,20)) 
        }
      }}
      id="outlined-basic" label="Nome" variant="outlined" margin="normal" fullWidth/>

      <TextField id="outlined-basic" label="SobreNome" variant="outlined" margin="normal" fullWidth/>

      <TextField id="outlined-basic" label="CPF" variant="outlined" margin="normal" fullWidth/>

      <FormControlLabel label="Promoções" control={<Switch name="Promoções" defaultChecked color="primary"></Switch>}> <label>Promoções</label></FormControlLabel>
      <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked color="primary"></Switch>}></FormControlLabel>
      <Button type="submit" variant="contained" color="primary">Confirmar</Button>
    </form>
  );
}
export default FormularioCadastro;
