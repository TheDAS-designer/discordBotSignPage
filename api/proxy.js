import createProxyMiddleware from "http-proxy-middleware"

export default function (req, res) {
    let target= ""
    console.log("req.url:", req.url)

    if(req.url.startsWith("/bot")){
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