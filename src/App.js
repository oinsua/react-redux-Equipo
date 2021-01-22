import './App.css';
/*Importar los componentes para Aplicar Redux */
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import React from 'react';
import Jugador from './components/Jugador/Jugador';
import Team from './components/Team/Team';

const store = generateStore();

const App = () => (
  <Provider store={store}>
     <main>
        <Jugador/>
        <Team/>
     </main>
  </Provider>
)
export default App;
