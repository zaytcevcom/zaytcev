import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const easterEgg = () => {
    console.log(
        '%cEaster Egg! 🐰',
        'font-size: 20px; color: #f08080; font-weight: bold'
    );

    console.log('' +
        'Спасибо за проявленный интерес к проекту!\n\n' +
        'Исходный код можно изучить в репозитории:\n' +
        'https://github.com/zaytcevcom/zaytcev');
}

easterEgg();
