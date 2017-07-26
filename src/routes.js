import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import Demo from './components/Demo';
import Editor from './components/Editor';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Demo}/>
        <Route path='edit' component={Editor}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;