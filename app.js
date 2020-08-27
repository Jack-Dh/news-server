import koa from "koa"
import route from "./routes/index"
const koaSwagger = require('koa2-swagger-ui')
const app = new koa()

const swagger = require('./util/swagger')

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