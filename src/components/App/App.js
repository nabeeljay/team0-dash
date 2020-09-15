import React from 'react';
import Dashboard from'../Dashboard/Dashboard.js';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Products from '../componentsUtils/Products.js';
import Test from '../Test.js';
import Prof from '../Prof/Prof.js';
import Doc from '../../componentsUtils/Doc.js';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <div className="dash">
                        <Dashboard />
                        {/* <Front /> */}
                    </div>
                </Route>
                <Route exact path="/prof">
                    <div className="prof">
                        <Prof />
                    </div>
                </Route>
                <Route path="/products">
                    <div className="products">
                        <Products />
                    </div>
                </Route>
                <Route path="/test">
                    <div className="test">
                        <Test />
                    </div>
                </Route>
                <Route path="/doc">
                    <div className="test">
                        <Doc />
                    </div>
                </Route>

            </Switch>
        </Router>
    )
}

export default App
