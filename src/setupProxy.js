import {createProxyMiddleware} from "http-proxy-middleware"

module.exports = function (app) {
    console.log("app:", app)
    target="https://bot.loopss.me"
    app.use('/ticket', createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite:{
            '^/ticket':''
        }
    }))
}