import React from 'react';
import 'devextreme/dist/css/dx.carmine.css';
import {
  TaiFactoryContextProvider,
} from './providers/TaiFactoryProvider';
import './App.css';
import DepartmentRouter from './components/DepartementRouter';
} from './providers/TaiFactoryProvider';
import './App.css';
import DepartmentRouter from './components/DepartementRouter';

function App() {
function App() {
  return (
    <div className="app">
      <TaiFactoryContextProvider>
        <DepartmentRouter />
      </TaiFactoryContextProvider>
    </div>
  );
}

export default App;
