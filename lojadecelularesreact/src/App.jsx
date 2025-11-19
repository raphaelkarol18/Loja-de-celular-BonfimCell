import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import Imagem from './components/Imagem';
import ModalConfirmacao from './components/ModalConfirmacao';
import Contato from './components/Contato'; // Importa a página de contato
import './App.css';

function App() {
  const [visitantes, setVisitantes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [indiceParaExcluir, setIndiceParaExcluir] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  function adicionarVisitante(nome, idade) {
    setVisitantes([...visitantes, { nome, idade }]);
    setMensagemSucesso('Visitante adicionado com sucesso!');
    setTimeout(() => {
      setMensagemSucesso('');
    }, 2000);
  }

  function solicitarExclusao(index) {
    setIndiceParaExcluir(index);
    setMostrarModal(true);
  }

  function confirmarExclusao() {
    const novaLista = visitantes.filter((_, i) => i !== indiceParaExcluir);
    setVisitantes(novaLista);
    setMostrarModal(false);
    setIndiceParaExcluir(null);
  }

  function cancelarExclusao() {
    setMostrarModal(false);
    setIndiceParaExcluir(null);
  }

  const handlePress = () => {
    alert('Botão clicado!');
  };

  return (
    <Router>
      <div>
        <h1>Bem-vindo à loja BonfimCell</h1>

        {/* Navegação com link para a página de contato */}
        <nav>
          <ul>
            <li>
              <Link to="/contato">Página de Contato</Link>
            </li>
          </ul>
        </nav>

        {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

        <Formulario onAdicionar={adicionarVisitante} />

        <Tabela dados={visitantes} onRemover={solicitarExclusao} />

        <Imagem />

        {mostrarModal && (
          <ModalConfirmacao
            mensagem="Tem certeza que deseja excluir este visitante?"
            onConfirmar={confirmarExclusao}
            onCancelar={cancelarExclusao}
          />
        )}

        <button onClick={handlePress} className="botao">
          Clique Aqui
        </button>

        {/* Definição das rotas */}
        <Switch>
          <Route path="/contato" component={Contato} />
          {/* Você pode adicionar outras rotas aqui */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;