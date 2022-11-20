(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(721);
/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(998);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);
([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// 1. Get projectID at https://cloud.walletconnect.com
if (false) {}
const projectId = "123123";
// 2. Configure wagmi client
const chains = [
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygon,
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.optimism,
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.arbitrum
];
const { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)(chains, [
    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__/* .walletConnectProvider */ .Tg)({
        projectId
    })
]);
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({
    autoConnect: true,
    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__/* .modalConnectors */ .b6)({
        appName: "web3Modal",
        chains
    }),
    provider
});
// 3. Configure modal ethereum client
const ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__/* .EthereumClient */ .J0(wagmiClient, chains);
// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
                client: wagmiClient,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__/* .Web3Modal */ .Eg, {
                projectId: projectId,
                theme: "dark",
                accentColor: "default",
                ethereumClient: ethereumClient
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 585:
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core");;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/coinbaseWallet");;

/***/ }),

/***/ 630:
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/metaMask");;

/***/ }),

/***/ 848:
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/connectors/walletConnect");;

/***/ }),

/***/ 186:
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/core/providers/jsonRpc");;

/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/core");;

/***/ }),

/***/ 127:
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ui");;

/***/ }),

/***/ 998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,721], () => (__webpack_exec__(505)));
module.exports = __webpack_exports__;

})();