// src/components/Contato.jsx
import React, { useState } from 'react';
import './Contato.css'; // podemos criar CSS específico ou usar o App.css

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [mensagemSucesso, setMensagemSucesso] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você poderia enviar os dados para um servidor
    setMensagemSucesso('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
    setTimeout(() => setMensagemSucesso(''), 3000);
  }

  return (
    <div className="contato-container">
      <h1>Contato - BonfimCell</h1>

      <p><strong>Meios de Contato:</strong></p>
      <ul>
        <li>E-mail: contato@bonfimcell.com</li>
        <li>Telefone/WhatsApp: (00) 00000-0000</li>
      </ul>

      <p><strong>Endereço:</strong></p>
      <p>Rua Exemplo, 123, Centro<br/>Cidade, Estado - CEP 00000-000</p>

      <p><strong>Horário de Atendimento:</strong></p>
      <p>Segunda a Sexta: 08h às 18h<br/>Sábados: 09h às 13h<br/>Domingos e feriados: fechado</p>

      <p><strong>Redes Sociais da empresa:</strong></p>
      <ul>
        <li><a href="https://instagram.com/bonfimcell" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://facebook.com/bonfimcell" target="_blank" rel="noreferrer">Facebook</a></li>
        <li><a href="https://linkedin.com/company/bonfimcell" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>

      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
