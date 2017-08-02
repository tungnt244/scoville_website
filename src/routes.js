import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import Editor from './components/Editor';
import HomePage from './components/HomePage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='edit' component={Editor}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;