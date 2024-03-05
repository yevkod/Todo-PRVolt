import React from 'react';
import './App.css';
import { MainView } from './pages/Main/MainView';
import { Provider } from "react-redux";
import store from './store';


export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <MainView />
      </Provider>
    </div>
  );
}