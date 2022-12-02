import {createProxyMiddleware} from "http-proxy-middleware"

export default function (app) {
    target="https://bot.loopss.me"
    app.use('/ticket', createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite:{
            '^/ticket':''
        }
    }))
}