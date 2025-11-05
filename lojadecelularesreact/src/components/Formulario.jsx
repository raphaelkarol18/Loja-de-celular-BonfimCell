import React, { useState } from 'react';

function Formulario({ onAdicionar }) {
  // Estados para guardar o que o usuário digita
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  
  //Daqui vai para return
  
  // Função para limpar os campos
  function limparCampos() {
    setNome('');
    setIdade('');
  }

  return (
    <form>
      {/* Campo de nome */}
      Nome:
      <input
        value={nome}
        //Quando algo for digitado no input, será colocado na variável nome
        onChange={e => setNome(e.target.value)} 
        placeholder="Digite seu nome"
      />
      <br />

      {/* Campo de idade */}
      Idade:
      <input
        value={idade}
        type="number"
        onChange={e => setIdade(e.target.value)}
        placeholder="Digite sua idade"
      />
      <br />

      {/* Grupo de botões com responsividade */}
      <div className="grupo-botoes">
        <button
          type="button"
          onClick={() => { //ao clicar no botão...
            onAdicionar(nome, idade);//O Formulario está chamando a função adicionarVisitante que está no App.jsx 
            limparCampos();//chama a função que está no proprio componente, por tanto não precisa de props
          }}
        >
          Enviar
        </button>

        <button type="button" onClick={limparCampos}>
          Limpar
        </button>
      </div>
    </form>
  );
}

export default Formulario;