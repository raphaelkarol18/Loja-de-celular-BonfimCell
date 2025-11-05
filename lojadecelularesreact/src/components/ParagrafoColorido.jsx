import React, { useState } from 'react'; // useState serve para guardar a cor
function ParagrafoColorido() {
const [cor, setCor] = useState("black"); // Começa com cor preta
// A partir daqui a execução começa pelo return
// Função que troca entre preto e azul. Executado apenas quando o return chamar
const mudarCor = () => {
setCor(cor === "black" ? "blue" : "black"); // Se estiver preto, vira azul; se azul, vira preto
};
return (
<p
onClick={mudarCor} // Quando clicar, muda a cor
style={{ color: cor, cursor: "pointer" }} // Aplica a cor e deixa o cursor como
mãozinha
>
Clique aqui para mudar minha cor!
</p>
);
}
export default ParagrafoColorido;