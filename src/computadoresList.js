// src/ComputadoresList.js

import React from 'react';

function ComputadoresList({ computadores, onDelete }) {
  return (
    <div>
      <h2>Lista de Computadores</h2>
      <ul>
        {computadores.map(computador => (
          <li key={computador.hostname}>
            <strong>Hostname:</strong> {computador.hostname} <br />
            <strong>Processador:</strong> {computador.processador} <br />
            <strong>Memória:</strong> {computador.memoria} <br />
            <strong>Armazenamento:</strong> {computador.armazenamento} <br />
            <strong>Estado:</strong> {computador.estado} <br />
            <button onClick={() => onDelete(computador)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComputadoresList;
