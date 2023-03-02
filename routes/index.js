import Router from "koa-router";

const router = new Router()

/**
 * @openapi
 * definitions:
 *   user:
 *     properties:
 *       nick_name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: integer
 */
/**
 * @openapi
 * definitions:
 *   login:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
/**
 * @openapi
 * definitions:
 *   register:
 *     properties:
 *       email:
 *         type: string
 *       nickname:
 *         type: string
 *       password:
 *         type: string
 *       password2:
 *         type: string
 */

/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *       - user
 *     description: 返回所有用户信息
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 用户数组
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.get('/user', (ctx, next)=>{
    ctx.body="这是GET用户信息"
})

/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *       - logout
 *     description: 创建一个用户
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: 用户名字
 *         description: 用户对象
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: 创建成功
 */
router.post('/user', (ctx, next)=>{
    ctx.body="这是POST用户信息"
})

export default router;
