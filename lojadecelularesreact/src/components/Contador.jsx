import React, { useState } from 'react'; // useState guarda o número de cliques
function Contador() {
const [numero, setNumero] = useState(0); // Começa com zero
// A partir daqui a execução começa pelo return
// Função para aumentar o número em 1. Executado apenas quando o return chamar
const aumentar = () => {
setNumero(numero + 1); // Soma +1
};
return (
<div>
<h2>Contador: {numero}</h2> {/* Mostra o número atual */}
<button onClick={aumentar}>Clique para contar</button> {/* Botão que conta */}
</div>
);
}
export default Contador;