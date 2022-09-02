import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';


=======
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 1211b3ce24103018a9c43c55ebc3d969b33294ad

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
