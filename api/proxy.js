import createProxyMiddleware from "http-proxy-middleware"

export default function (req, res) {
    let target= ""

    if(req.url.startWith("/bot")){
        target="https://bot.loopss.me"
    }

    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite:{
            '^/bot/':'/'
        }
    })(req, res)
}