const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router') // koa 路由中间件
const static = require('koa-static')
const path = require('path')

const router = new Router(); // 实例化路由
const app = new Koa();

router.get('/',async (ctx)=>{
    await ctx.render('index')  
})
console.log(__dirname)
app.use(static(
    path.join(__dirname, './static')
))
app.use(views('./src/views', { map: {html: 'ejs' }}));  
app.use(router.routes());

app.listen(3000, () => {
    console.log("server listen 3000")
});