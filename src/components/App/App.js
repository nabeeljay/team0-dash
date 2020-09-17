import React from 'react';
import Dashboard from'../DashBoard/Dashboard.js';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Products from '../../componentsUtils/Products/Products.js';
import Test from '../Test/Test.js';
import Prof from '../Prof/Prof.js';
import Doc from '../../componentsUtils/Docs/Doc.js';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Dashboard}/>
                <Route exact path="/prof" component={Prof}/>
                <Route path="/products" component={Products} />
                <Route path="/test" component={Test} />
                <Route path="/doc" component={Doc} />
            </Switch>
        </Router>
    )
}

export default App
