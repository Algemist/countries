import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import AppRoute from './components/AppRoute';

function App() {
    return (
        <div className="App">
            <Header />
            <Main>
                <AppRoute />
            </Main>
        </div>
    );
}

export default App;
