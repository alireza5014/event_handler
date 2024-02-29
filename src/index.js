import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fa_IR from "antd/lib/locale/fa_IR";
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ConfigProvider
        prefixCls="dotin"
        direction={'ltr'}
        locale={fa_IR}


    >
        <App/>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(conso1le.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
