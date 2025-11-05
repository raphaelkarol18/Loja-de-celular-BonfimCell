// Importa o React para criar o componente
import React from 'react';

// Importa o arquivo CSS específico do modal
import './ModalConfirmacao.css';

// Cria o componente ModalConfirmacao
function ModalConfirmacao({ mensagem, onConfirmar, onCancelar }) {
  return (
    // Fundo escuro que cobre toda a tela
    <div className="modal-fundo">
      
      {/* Caixa branca central com a mensagem e os botões */}
      <div className="modal-caixa">
        
        {/* Mostra a mensagem recebida como prop */}
        <p>{mensagem}</p>

        {/* Div que agrupa os dois botões */}
        <div className="modal-botoes">
          
          {/* Botão verde para confirmar */}
          <button onClick={onConfirmar} className="btn-confirmar">Sim</button>

          {/* Botão vermelho para cancelar */}
          <button onClick={onCancelar} className="btn-cancelar">Cancelar</button>
        </div>

      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.jsx
export default ModalConfirmacao;