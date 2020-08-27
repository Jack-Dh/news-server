const router = require("koa-router")({
    prefix: '/home'
})
import news from "../../modules/module_news_list"
import { root } from "cheerio"
router.get("/", async(ctx, next) => {
        ctx.body = "this is listPage"
    })
    // #region
    /**
     * @swagger
     * /security/login:
     *   post:
     *     description: 用户登入
     *     tags: [用户鉴权模块]
     *     produces:
     *       - application/x-www-form-urlencoded
     *     parameters:
     *       - name: password
     *         description: 用户密码
     *         in: formData
     *         required: true
     *         type: string
     *       - name: name
     *         description: 用户名
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: 登入成功
     */
    // #endregion
    //查询文章标题
router.get("/newsTitle", async(ctx, next) => {
    try {
        let _ = await news.queryTitle()
        ctx.body = { code: 200, data: _ }
    } catch (error) {
        ctx.error(error)
    }
})

//查询文章内容
router.get("/newsContent/byId", async(ctx, next) => {
    try {
        if (ctx.query.id) {
            let _ = await news.queryContent(ctx.query.id)
            return ctx.body = {
                code: 200,
                data: _.length > 0 ? _[0].content : []
            }
        }
        return ctx.body = { code: 400, msg: "查询参数不能为空" }

    } catch (error) {
        ctx.error(error)
    }
})





export default router