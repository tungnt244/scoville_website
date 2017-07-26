import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import Editor from './components/Editor';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='login' component={AdminLogin}/>
        <Route path='edit' component={Editor}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;