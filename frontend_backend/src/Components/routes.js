import React, {Component} from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layout';
import NotFoundPage from './NotFoundPage';
import HomePage from './FrontEnd/HomePage';
import NewsLayout from './FrontEnd/NewsLayout';
import NewsList from './FrontEnd/NewsList';
import NewsPage from './FrontEnd/NewsPage';
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
        <Route path='news' component={NewsLayout}>
            <IndexRoute component={NewsList}/>
            <Route path=':id' component={NewsPage}/>
        </Route>
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
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;