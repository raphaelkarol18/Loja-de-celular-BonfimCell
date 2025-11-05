// Importa o React e o ícone de lixeira da biblioteca react-icons
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Fa = FontAwesome

function Tabela({ dados, onRemover }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>

        {/*função map() vai repetir algo para cada item da lista dados.*/}
        {/*(item, index): item é um visitante da lista. index é a posição dele na lista (0, 1, 2...).*/}
        {dados.map((item, index) => (
          <tr key={index}> {/*Criamos uma linha da tabela (<tr>). A chave única será o {index}*/}
            <td>{item.nome}</td> {/*Criamos uma coluna para mostrar o nome*/}
            <td>{item.idade}</td> {/*Criamos uma coluna para mostrar a idade*/}
            <td> {/*Criamos uma coluna para mostrar o icone lixeira*/}
              {/* Botão com ícone de lixeira */}
              <button 
                onClick={() => onRemover(index)} //chama a função solicitarExclusao do App.jsx
                title="Excluir visitante" //mostra ao passar o mouse
                style={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '6px 10px',
                  cursor: 'pointer',
                }}
              >
                <FaTrash /> {/* Mostra o ícone */}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;