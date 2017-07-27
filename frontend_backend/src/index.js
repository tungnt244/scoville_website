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

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'assets')));
app.use(bodyParser.json())

app.get('/cms/checktoken', (req, res) => {
  let isValidToken = checkToken(req.get("Authorization"))
  if(isValidToken) res.send("valid_token")
  else return res.send("token is not valid")
})

app.post('/admin/login', (req, res) => {
  let token = login(req.body)
  if(token){
    return res.send({
      user: "admin",
      token: token
    })
  }
  return res.send("it's not okey")
})

app.get('/hello', (req, res) => {
  console.log('hello there')
})

app.get('*', (req, res) => {
  console.log('hello')
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

const port = 8080;
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
