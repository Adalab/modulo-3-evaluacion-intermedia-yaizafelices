import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';


ReactDOM.render(<App />, document.getElementById('root'));
// LO DE ARRIBA ES LO MISMO QUE ESTO
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );