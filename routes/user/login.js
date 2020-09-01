const router = require("koa-router")({ prefix: "/user" })
import axios from "axios"


/**
 * @swagger
 * /user/login:
 *   get:
 *     description: 获取用户openID
 *     tags: [获取用户信息模块]
 *     produces:
 *       - application/x-www-form-urlencoded
 *     parameters:
 *       - name: js_code
 *         in: params
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: code:200<br/>session_key:xxxxxx<br/>openid:xxxxxx<br/>
 */
router.get("/login", async(ctx, next) => {
    try {
        let code = ctx.request.query.js_code
        if (code) {
            return await axios.get("https://api.weixin.qq.com/sns/jscode2session", {
                params: {
                    appid: "wxb27092837a1163b9",
                    grant_type: "authorization_code",
                    secret: "6ea887423c3c2b07b65a25224518521a",
                    js_code: code
                }
            }).then(res => {
                if (res.data.errcode) {
                    switch (res.data.errcode) {
                        case -1:
                            ctx.body = { errcode: res.data.errcode, msg: "系统繁忙，此时请开发者稍候再试" }
                        case 40029:
                            ctx.body = { errcode: res.data.errcode, msg: "code无效" }
                        case 45011:
                            ctx.body = { errcode: res.data.errcode, msg: "频率限制，每个用户每分钟100次" }
                        default:
                            ctx.body = { errcode: res.data.errcode, msg: "网络异常，稍后重试" }
                    }
                } else {
                    return ctx.body = { code: 200, msg: "请求成功", data: res.data }
                }

            })
        }
        return ctx.body = { code: 400, msg: "请输入code" }
    } catch (error) {
        throw Error(error)
    }

})
export default router