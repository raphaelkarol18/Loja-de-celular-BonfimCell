import React from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'
import gatinho from '../assets/image.png';

function Imagem() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={gatinho} alt="Gatinho local" />;
}

export default Imagem;