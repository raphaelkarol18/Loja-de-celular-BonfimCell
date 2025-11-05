// Importa o React e a função useState para controlar estados
import React, { useState } from 'react';

// Importa os componentes que serão usados na página
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import Imagem from './components/Imagem';
import ModalConfirmacao from './components/ModalConfirmacao';

// Importa o estilo CSS geral do site
import './App.css';

function App() {
  // Estado com a lista de visitantes
  // começa como lista vazia (array)
  const [visitantes, setVisitantes] = useState([]);

  // Estado para mostrar/ocultar o modal
  const [mostrarModal, setMostrarModal] = useState(false);

  // Índice de quem será excluído
  const [indiceParaExcluir, setIndiceParaExcluir] = useState(null);

  //Novo estado para mensagem de sucesso
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  //*****A partir daqui a execução começa pelo return

  // Função para adicionar visitante
  // Usa o operador spread (...visitantes), que copia todos os visitantes já cadastrados  
  function adicionarVisitante(nome, idade) {
    setVisitantes([...visitantes, { nome, idade }]); // Cria uma nova lista, com todos os anteriores + o novo e atualiza a tela (set).

    //Mostra mensagem de sucesso
    setMensagemSucesso('Visitante adicionado com sucesso!');

    //Limpa a mensagem após 2 segundos
    setTimeout(() => {
      setMensagemSucesso('');
    }, 2000);
  }

  // Solicita exclusão (abre modal: janela)
  function solicitarExclusao(index) {
    setIndiceParaExcluir(index);
    setMostrarModal(true);//mostra a tela do modal
    //Vai para a linha 100 "{mostrarModal &&":Se mostrarModal for true,
    //então exiba o componente <ModalConfirmacao />."
  }

  // Confirma a exclusão
  function confirmarExclusao() {
    //cria uma nova lista, chamada novaLista, que contém todos os visitantes, menos o que está no índice que queremos excluir.
    //.filter(...) É uma função que filtra a lista, deixando passar só os itens que você quiser manter (tira o indiceparaexcluir).
    //(_, i) => i !== indiceParaExcluir. Função de teste usada pelo filter.
    //O _ é o próprio item da lista (nome, idade), mas como não vamos usar o item aqui (apenas o índice). usamos _ (é só um costume para dizer: "não estou usando esse parâmetro").
    //O i é o índice do item na lista (0, 1, 2, ...).
    //A expressão i !== indiceParaExcluir significa: Só quero manter os itens que NÃO estão no índice que quero excluir.
    //o indiceParaExcluir é informado na function solicitarExclusao
    const novaLista = visitantes.filter((_, i) => i !== indiceParaExcluir);
    setVisitantes(novaLista);
    setMostrarModal(false);
    setIndiceParaExcluir(null);
  }

  // Cancela exclusão
  function cancelarExclusao() {
    setMostrarModal(false);
    setIndiceParaExcluir(null);
  }

  return (
    <div>
      <h1>Bem-vindo a loja BonfimCell</h1>

      {/*Exibe a mensagem de sucesso, se existir */}
      {/*mensagemSucesso &&= Verifica se a variável mensagemSucesso tem algum valor (true, texto, etc.).
      Caso tenha, mostra um parágrafo com a mensagem e estilo CSS*/}
      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

      {/* Formulário para adicionar visitantes */}
      {/* Formulário para adicionar visitantes */}
      {/* Quando um componente (como <Formulario />) precisa usar uma função que está declarada em outro componente (como App.jsx), é necessário **passar essa função como uma props**. Isso acontece porque o componente filho **não tem acesso direto** às funções do componente pai.*/}
      {/* Neste exemplo, estamos passando a função "adicionarVisitante", que foi criada no App.jsx, para o componente <Formulario /> por meio de uma props chamada "onAdicionar".
      ➤ O nome "onAdicionar" não é uma palavra reservada, você pode escolher qualquer nome! Mas, por **convenção**, usamos nomes como "onAdicionar", "onClick", "onChange", etc., porque indicam que estamos passando uma função que será executada em algum evento.*/}
      <Formulario onAdicionar={adicionarVisitante} />

      {/* Tabela com os visitantes */}
      {/*dados={visitantes} É uma prop chamada dados que está enviando 
      para Tabela os dados (lista) que estão guardados na variável visitantes. 
      A Tabela vai usar esses dados para montar as linhas com nome e idade.*/}
      {/*onRemover={solicitarExclusao} é uma prop chamada onRemover, que enviando 
      uma função chamada solicitarExclusao para a Tabela." */}
      <Tabela dados={visitantes} onRemover={solicitarExclusao} />

      {/* Imagem ilustrativa */}
      <Imagem />

      {/* Modal (janela) de confirmação */}
      {mostrarModal && (
        <ModalConfirmacao
          mensagem="Tem certeza que deseja excluir este visitante?"
          onConfirmar={confirmarExclusao}
          onCancelar={cancelarExclusao}
        />
      )}
    </div>
  );
}

export default App;