import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpensDashboardPage from '../components/ExpensDashboardPage';
import AddExpensPage from '../components/AddExpensPage';
import EditExpensPage from '../components/EditExpensPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensPage} />
        <Route path="/edit/:id" component={EditExpensPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;