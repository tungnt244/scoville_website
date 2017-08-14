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
import FMSManager from './FMS/FMSManager';
import FMSForm from './FMS/FMSForm';

var routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path='admin' component={CMSLayout}>
            <IndexRoute component={AdminLogin}/>
            <Route path='login' component={AdminLogin}/>
            <Route path='cms' component={CMSManager}/>
            <Route path='cms/editor' component={CMSEditor}/>
            <Route path='cms/editor/:id' component={CMSEditor}/>

            {/* <Route path='admin/cms' component={CMSLayout}>
                <IndexRoute component={CMSManager}/>
                <Route path='editor' component={CMSEditor}/>
            </Route> */}

            <Route path='users' component={UMSManager}>
                {/* <IndexRoute component={UMSManager}/> */}
            </Route>
            <Route path='users/:id' component={UMSUser}/>
            <Route path='users/create' component={UMSUser}/>


            {/* <Route path='admin/users' component={CMSLayout}>
                <IndexRoute component={UMSManager}/>
                <Route path='create' component={UMSUser}/>
            </Route> */}

            <Route path='forms' component={FMSManager}>
                {/* <IndexRoute component={FMSManager}/> */}
                
            </Route>
            <Route path='forms/:id' component={FMSForm}/>

            {/* <Route path='admin/forms' component={CMSLayout}>
                <IndexRoute component={FMSManager}/>
                <Route path=':id' component={FMSForm}/>
            </Route> */}


            
            
        </Route>
        <Route path='news' component={CMSArticles}/>
        <Route path="news/:id" component={CMSSingleArticle}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;