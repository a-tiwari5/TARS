import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Header />
                <Main />
            </div>
        </Provider>
    )
}

export default App