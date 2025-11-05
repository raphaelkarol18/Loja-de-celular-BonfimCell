import React, { useState } from 'react'; // useState serve para guardar o que digitamos
function CaixaTexto() {
//useState é igual uma variável, só que muda o valor na tela do react automaticamente. E a variável não.
const [texto, setTexto] = useState(""); // “texto” é o estado, ou seja a variável. O valor da variável texto começa com vazio “ ”. O valor de texto será alterado quando encontrar o setTexto.
// A partir daqui a execução começa pelo return
// Função chamada toda vez que digitamos algo (executada apenas quando o return chamar)
const mostrarTexto = (evento) => {
setTexto(evento.target.value); // Atualiza o texto com o que está sendo digitado
};
return (
<div>
<input
type="text" // Tipo de campo: texto
placeholder="Digite algo aqui" // Texto cinza que aparece dentro da caixa
onChange={mostrarTexto} // Quando digita, atualiza o texto
/>
{/* Mostramos abaixo o que foi digitado */}
<p>Você digitou: {texto}</p>
</div>
);
}
export default CaixaTexto;