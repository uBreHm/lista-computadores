// src/AdicionarComputador.js

import React, { useState } from 'react';

function AdicionarComputador({ onAdicionar }) {
  const [hostname, setHostname] = useState('');
  const [processador, setProcessador] = useState('');
  const [memoria, setMemoria] = useState('');
  const [armazenamento, setArmazenamento] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoComputador = {
      hostname,
      processador,
      memoria,
      armazenamento,
      estado
    };
    onAdicionar(novoComputador);
    setHostname('');
    setProcessador('');
    setMemoria('');
    setArmazenamento('');
    setEstado('');
  };

  return (
    <div>
      <h2>Adicionar Computador</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hostname:
          <input type="text" value={hostname} onChange={(e) => setHostname(e.target.value)} required />
        </label>
        <br />
        <label>
          Processador:
          <input type="text" value={processador} onChange={(e) => setProcessador(e.target.value)} required />
        </label>
        <br />
        <label>
          Memória:
          <input type="text" value={memoria} onChange={(e) => setMemoria(e.target.value)} required />
        </label>
        <br />
        <label>
          Armazenamento:
          <input type="text" value={armazenamento} onChange={(e) => setArmazenamento(e.target.value)} required />
        </label>
        <br />
        <label>
          Estado:
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Adicionar Computador</button>
      </form>
    </div>
  );
}

export default AdicionarComputador;
