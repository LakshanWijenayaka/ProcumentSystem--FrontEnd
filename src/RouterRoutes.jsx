import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from "./Template/Home";
import Employees from "./Employees/Employee_registration";
import SupplierAdd from "./Suppliers/JSX/Supplier_Registration";


const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/employees" component={withRouter(Employees)}/>
        <Route exact path="/suppliers" component={withRouter(SupplierAdd)}/>
    </Switch>
);

export default RouterRoutes;