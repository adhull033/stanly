import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
  // import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
//react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  // {/* </React.StrictMode> */}
);

reportWebVitals();
