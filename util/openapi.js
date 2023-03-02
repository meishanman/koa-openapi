import Router from 'koa-router'; //引入路由函数
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
            description: '这些是描述API'
        },
    },
    apis: ['./routes/*.js'], // 写有注解的router的存放地址
};

const openapiSpec = swaggerJSDoc(options)

export const router = new Router()

// 通过路由获取生成的注解文件
router.get('/openapi', async function (ctx) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = openapiSpec;
})

// 配置swagger-ui
import {koaSwagger} from 'koa2-swagger-ui';

export const ui =  koaSwagger({
    // routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
        url: '/openapi', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    },
})
