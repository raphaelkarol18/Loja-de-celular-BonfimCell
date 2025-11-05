// Essa linha sempre aparece em componentes React
import React from 'react';
// Criamos uma função que mostra um botão verde com mensagem surpresa
function BotaoMagico(props) {
return (
<button
className="botao-magico" // Chamamos o estilo do .botao-magico do App.css
onClick={() => alert(props.mensagem)} //Quando clicamos, aparece a mensagem que vem de outro arquivo (neste caso, props.mensagem pega o valor que veio lá do App.jsx)
>
Clique aqui {/* Texto que aparece no botão */}
</button>
);
}
// Exportamos para poder usar no App.jsx
export default BotaoMagico;