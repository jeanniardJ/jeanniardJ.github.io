import React from 'react';

import "./assets/App.scss";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ToastContextual from './components/ToastContextual';

function App() {

    return (
        <div id="home" className="App">
            <Header />
            <Main />
            <Footer />
            <ToastContextual />
        </div>
    );
}

export default App;
