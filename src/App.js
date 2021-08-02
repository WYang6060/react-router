import React from 'react';
import Menu from './components/Menu';
import Error from './components/Error';
import Brand from './components/Brand';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Switch>
                    <Route path="/error">
                        <Error />
                    </Route>
                    <Route path="/:brand">
                        <Brand />
                    </Route>
                    <Route path="/">
                        Please select brand...
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
