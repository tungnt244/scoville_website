import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import CMSLayout from './components/CMS/CMSLayout';
import CMSManager from './components/CMS/CMSManager';
import CMSEditor from './components/CMS/CMSEditor';
import CMSArticles from './components/CMS/CMSArticles';
import CMSSingleArticle from './components/CMS/CMSSingleArticle';
import UMSManager from './components/UMS/UMSManager';
import UMSUser from './components/UMS/UMSUser';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='admin/login' component={AdminLogin}/>
        <Route path='admin/cms' component={CMSLayout}>
            <IndexRoute component={CMSManager}/>
            <Route path='editor' component={CMSEditor}/>
        </Route>
        <Route path='admin/users' component={CMSLayout}>
            <IndexRoute component={UMSManager}/>
            <Route path='create' component={UMSUser}/>
        </Route>
        <Route path='admin/users/:id' component={UMSUser}/>
        <Route path='admin/cms/editor/:id' component={CMSEditor}/>
        <Route path='news' component={CMSArticles}/>
        <Route path="news/:id" component={CMSSingleArticle}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;