import koa from "koa"
import route from "./routes/index"
import koaSwagger from 'koa2-swagger-ui'
import swagger from './util/swagger'


const app = new koa()

app.use(swagger.routes(), swagger.allowedMethods())
app.use(koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
        url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    },
}))
app.use(route.list.home.routes())
app.use(route.getNewsData.routes())
app.listen(5000)