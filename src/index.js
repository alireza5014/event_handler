import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts.css';
import './index.css';
 import reportWebVitals from './reportWebVitals';
import fa_IR from "antd/lib/locale/fa_IR";
import {ConfigProvider} from "antd";
import {Route, Routes} from "react-router";
import {BrowserRouter} from 'react-router-dom';
import WebrtcBg from "./components/WebrtcBg";
import Home from "./components/Home";
import SdkTest from "./components/pages/SdkTest";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ConfigProvider
        prefixCls="dotin"
        direction={'ltr'}
        locale={fa_IR}
    >
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SdkTest/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/webrtc' element={<WebrtcBg/>}/>
            </Routes>
        </BrowserRouter>
     </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
