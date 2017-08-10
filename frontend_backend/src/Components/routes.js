import React, {Component} from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import AdminLogin from './AdminLogin';
import CMSLayout from './CMS/CMSLayout';
import CMSManager from './CMS/CMSManager';
import CMSEditor from './CMS/CMSEditor';
import CMSArticles from './CMS/CMSArticles';
import CMSSingleArticle from './CMS/CMSSingleArticle';
import UMSManager from './UMS/UMSManager';
import UMSUser from './UMS/UMSUser';

var routes = (
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