import express from 'express';
import path from 'path'
import React from 'react';
import {renderToString} from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import login from './Api/login';
import checkToken from './Api/CheckToken';
import bodyParser from 'body-parser';
import getArticlesBrief from './Api/getArticlesBrief';
import deleteArticleById from './Api/deleteArticleById';

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'assets')));
app.use(bodyParser.json())

app.get('/cms/checktoken', (req, res) => {
  checkToken(req.get("Authorization"), (isValid) => {
    if(isValid) res.send({isValid: isValid})
    else return res.send("Token is not valid")  
  })
})

app.get('/cms/news/brief', (req, res) => {
  console.log('okey')
  getArticlesBrief((articles) => {
    if(articles) res.send(articles)
    else return res.status(404).send("Not good")
  })
})

app.delete('/cms/news/:id', (req, res) => {
  console.log('in delete', req.params.id)
  deleteArticleById(req.params.id, (message)=> {
    console.log('message hey', message)
    if(message) res.send(message)
    else return res.status(404).send("delete article failed")
  })
})

app.post('/admin/login', (req, res) => {
  login(req.body, (response) => {
    if(response.token){
      return res.send({
        email: response.email,
        token: response.token
      })
    }else {
      console.log('error : ', response.error)
      return res.status(401).send(response.error)
    }
  })
})

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let appString;
      if (renderProps) {
        appString = renderToString(<RouterContext {...renderProps}/>);
      } else {
        appString = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      return res.render('index', { markup: appString });
    }
  );
});

const port = 3000;
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
