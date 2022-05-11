import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

 
const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Main />
        </div>
    )
}

export default App