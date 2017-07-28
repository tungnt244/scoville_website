import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import CMSLayout from './components/CMSLayout';
import CMSManager from './components/CMSManager';
import CMSEditor from './components/CMSEditor';
import CMSArticles from './components/CMSArticles';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='admin/login' component={AdminLogin}/>
        <Route path='admin/cms' component={CMSLayout}>
            <IndexRoute component={CMSManager}/>
            <Route path='editor' component={CMSEditor}/>
        </Route>
        <Route path="news/:id" component={CMSArticles}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;