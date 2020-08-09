import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import Watch from './pages/watch';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './components/PageDefault';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/watch" component={Watch} />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={() => (
        <PageDefault>
          <div>
            <h1>Página 404</h1>
            <span>
              Página não encontrada
            </span>
          </div>
        </PageDefault>
      )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
