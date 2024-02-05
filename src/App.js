import './App.css';
import { useState } from 'react';




const labels = ["fácil", "médio", "médio", "forte"];

function App() {

  const [strength, setStrength] = useState("");
  const [passwordValue, setPasswordValue] = useState("")

  const getStrength = (password)=> {

     let indicator = -1

     if(/[a-z]/.test(password)) indicator++;
     if(/[A-Z]/.test(password)) indicator++;
     if(/\d/.test(password)) indicator++;
     if(/[^a-zA-Z0-9]/.test(password)) indicator++;

     if(password.length >= 16) indicator++;

     return labels[indicator]
  }
  
  const handleChange = (event) => {
    setStrength(
      getStrength(event.target.value)
    )

    setPasswordValue(event.target.value);

  }


  return (
    <div className="App">
      <div className="login">
         <h1>SIGN IN</h1>
         <form action="">
          <label>E-mail</label>
            <input 
            type="text"
            placeholder="Digite seu email"
            />
          
           <label>Senha</label>
            <input 
            type="password"
            value={passwordValue}
            placeholder="Digite sua senha"
            onChange={handleChange}
            />
           <button>
             Enviar
           </button>
         </form>
          <div className={`bars ${strength}`}>
              <div></div> 
          </div>
          <div className="strength">
              {strength && ` password ${strength}`}
          </div>
      </div>
    </div>
  );
}

export default App;
