import React from 'react';
// Componente que mostra um botão rosa com uma mensagem surpresa
function BotaoSurpresa() {
return (
<button
className="botao-surpresa" // Usa o estilo .botao-surpresa (rosa) do App.css
onClick={() => alert("Surpresa! Você está indo muito bem!")} //Ao ser clicado, mostra a mensagem em um alerta.
>
    Me aperte! {/* Texto que aparece no botão */}
</button>
);
}
export default BotaoSurpresa;