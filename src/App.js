import Topo from "./componentes/Topo";
import EspacoBotoes from "./componentes/EspacoBotoes";
import EspacoJogos from "./componentes/EspacoJogos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const caminhoJogos = [
    {
      caminho: 'nao-nomeado#jogo-ancora',
      aparecerJogo: 'Não Nomeado'
    },
    {
      caminho: 'dash-and-get-out',
      aparecerJogo: 'Dash and Get Out'
    },
    {
      caminho: 'square-problems',
      aparecerJogo: 'Square Problems'
    },
    {
      caminho: 'pech',
      aparecerJogo: 'Pech'
    },
    {
      caminho: 'save-vein',
      aparecerJogo: 'Save Vein'
    },
    {
      caminho: 'lights-come-back',
      aparecerJogo: 'Lights Come Back'
    }
  ]

  return (
    <div className="App">

      <BrowserRouter>
        <Topo />
        <EspacoBotoes />
        <Routes>
          {caminhoJogos.map(caminhojogo => <Route
            path={caminhojogo.caminho}
            element={<EspacoJogos aparecerJogo={caminhojogo.aparecerJogo}/>}
          />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
