// src/App.jsx

// 1. Importa o seu componente Contato:
// O caminho './Contato.jsx' está correto se ele e App.jsx estão no mesmo nível (src/)
import Contato from './Contato.jsx'; 

// Importa o arquivo CSS
import './App.css';

// Componente principal da aplicação
function App() {
  
  // 2. O componente App agora renderiza APENAS o seu componente Contato
  return (
    <>
      <Contato />
    </>
  );
}

export default App;