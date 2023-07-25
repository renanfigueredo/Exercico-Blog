import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MenuPrincial from './MenuPrincial';
import Apresentacao from './Apresentacao';
import PubItem from './PubItem.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuPrincial />
    <Apresentacao
      img="/img/beSome.png"
      nome="Renan Olivé"
      descricao="Engenheiro de Controle e Automação formado pelo Instituto Nacional de Telecomunicações (Inatel) e Pós graduando em Engenharia de Software pela PUC Minas. Buscando ser um programador nas horas vagas."
    />

    <div className="publicaçoes">
      <p className="publicaçoes__texto">Ultimas atualizações:</p>

        <PubItem
          titulo="Como foi usar React pela primeira vez"
          descricao="Uns tutoriais aqui ... uns 'helps' ali e no final deu tudo certo."
        />
        <PubItem
          titulo="Essa tal de Lorem"
          descricao="Lorem ipsum dolor sit amet consectetur ... mas que trem é esse?!"
        />
        <PubItem
          titulo="Sofrido, mas cá estamos !"
          descricao="Foi difícil mais o 'blog' saiu hehe"
        />
        
      <a className="publicaçoes--link" href="/blog.html">Leia mais ...</a>
    </div>
  </React.StrictMode>
);