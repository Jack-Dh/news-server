import list from "./list/index"
import getNewsData from './config/getNewsData'
/**
 * @swagger
 * /logger/apps:
 *   get:
 *     summary: 获取有日志记录的应用
 *     description: 获取有日志记录的应用
 *     tags:
 *       - Logger
 *     parameters:
 *       - name: appName
 *         in: query
 *         required: true
 *         description: 应用名称
 *         type: string
 *       - name: userId
 *         in: query
 *         required: true
 *         description: 用户id
 *         type: string
 *     responses:
 *       200:
 *         description: 成功获取
 */

export default { getNewsData, list }