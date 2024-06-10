import React, { useState, useEffect } from 'react';
import './App.css';
import ComputadoresList from './computadoresList';
import AdicionarComputador from './AdicionarComputador';

function App() {
  const [computadores, setComputadores] = useState([]);

  // Carrega os computadores do arquivo JSON quando o componente é montado
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/computadores.json');
      const data = await response.json();
      setComputadores(data);
    };

    fetchData();
  }, []);

  // Salva os computadores no arquivo JSON
  const salvarComputadores = async () => {
    try {
      await fetch('/computadores.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(computadores),
      });
    } catch (error) {
      console.error('Erro ao salvar os computadores:', error);
    }
  };

  const handleAdicionarComputador = (novoComputador) => {
    setComputadores([...computadores, novoComputador]);
    salvarComputadores(); // Salva os dados após adicionar um novo computador
  };

  const handleDeletarComputador = (computadorParaDeletar) => {
    const novaLista = computadores.filter(computador => computador.hostname !== computadorParaDeletar.hostname);
    setComputadores(novaLista);
    salvarComputadores(); // Salva os dados após deletar um computador
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Computadores</h1>
      </header>
      <main>
        <AdicionarComputador onAdicionar={handleAdicionarComputador} />
        <ComputadoresList computadores={computadores} onDelete={handleDeletarComputador} />
      </main>
    </div>
  );
}

export default App;
