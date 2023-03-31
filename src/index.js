import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dice from './DiceGame/Dice';
import DiceGame from './DiceGame/DiceGame';
import { store } from './redux/configStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
        <DiceGame />
   </Provider>
);
