import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import AddItem from './pages/addItem';
import SearchItem from './pages/searchItem';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header brand='Тестовое задание'></Header>

                <main className='main'>
                    <Switch>
                        <Route path='/project/addItem' component={AddItem} />
                        <Route path='/project/searchItem' component={SearchItem} /> 
                        <Route exact path='/' component={HomePage} />
                        <Redirect to='/' />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
