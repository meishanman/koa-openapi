import Koa from 'koa';

const app = new Koa()

import * as openapi from './util/openapi.js';
app.use(openapi.ui)
app.use(openapi.router.routes())

import router from './routes/index.js';
app.use(router.routes())

app.listen(4000, ()=>{
    console.log('server is running, port is 4000')
})
