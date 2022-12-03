/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/ethereum */ \"@web3modal/ethereum\");\n/* harmony import */ var _web3modal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/react */ \"@web3modal/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__, _web3modal_react__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n// 1. Get projectID at https://cloud.walletconnect.com\nif (false) {}\nconst projectId = \"c73771ec4df730b9a5398690ac979cd0\";\nconsole.log(\"process.env.NEXT_PUBLIC_BOT_URL\", process.env.NEXT_PUBLIC_BOT_URL);\nconsole.log(\"process.env.NEXT_PUBLIC_PROJECT_ID\", \"c73771ec4df730b9a5398690ac979cd0\");\n// 2. Configure wagmi client\nconst chains = [\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.arbitrum\n];\nconst { provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)(chains, [\n    (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.walletConnectProvider)({\n        projectId\n    })\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors: (0,_web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.modalConnectors)({\n        appName: \"web3Modal\",\n        chains\n    }),\n    provider\n});\n// 3. Configure modal ethereum client\nconst ethereumClient = new _web3modal_ethereum__WEBPACK_IMPORTED_MODULE_1__.EthereumClient(wagmiClient, chains);\n// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\devData\\\\discordBotSignPage\\\\react\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\devData\\\\discordBotSignPage\\\\react\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3modal_react__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n                projectId: projectId,\n                theme: \"dark\",\n                accentColor: \"default\",\n                ethereumClient: ethereumClient\n            }, void 0, false, {\n                fileName: \"D:\\\\devData\\\\discordBotSignPage\\\\react\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0RjtBQUNoRDtBQUU2QjtBQUNuRDtBQUV0QixzREFBc0Q7QUFDdEQsSUFBSSxLQUFtQyxFQUNyQyxFQUEwRTtBQUM1RSxNQUFNWSxTQUFTLEdBQUdKLGtDQUFrQztBQUNwREssT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxtQkFBbUIsQ0FBQztBQUMvRUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLEVBQUVOLGtDQUFrQyxDQUFDO0FBRXJGLDRCQUE0QjtBQUM1QixNQUFNUSxNQUFNLEdBQUc7SUFBQ1osZ0RBQWE7SUFBRUEsZ0RBQWE7SUFBRUEsaURBQWM7SUFBRUEsaURBQWM7Q0FBQztBQUM3RSxNQUFNLEVBQUVpQixRQUFRLEdBQUUsR0FBR2hCLHNEQUFlLENBQUNXLE1BQU0sRUFBRTtJQUFDZCwwRUFBcUIsQ0FBQztRQUFFVSxTQUFTO0tBQUUsQ0FBQztDQUFDLENBQUM7QUFDcEYsTUFBTVUsV0FBVyxHQUFHaEIsbURBQVksQ0FBQztJQUMvQmlCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxVQUFVLEVBQUV2QixvRUFBZSxDQUFDO1FBQUV3QixPQUFPLEVBQUUsV0FBVztRQUFFVCxNQUFNO0tBQUUsQ0FBQztJQUM3REssUUFBUTtDQUNULENBQUM7QUFFRixxQ0FBcUM7QUFDckMsTUFBTUssY0FBYyxHQUFHLElBQUkxQiwrREFBYyxDQUFDc0IsV0FBVyxFQUFFTixNQUFNLENBQUM7QUFFOUQsc0VBQXNFO0FBQ3ZELFNBQVNXLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBRTlELHFCQUNFOzswQkFDRSw4REFBQ3RCLDhDQUFXO2dCQUFDdUIsTUFBTSxFQUFFUixXQUFXOzBCQUM5Qiw0RUFBQ00sU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ2hCOzBCQUVkLDhEQUFDMUIsdURBQVM7Z0JBQ1JTLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJtQixLQUFLLEVBQUMsTUFBTTtnQkFDWkMsV0FBVyxFQUFDLFNBQVM7Z0JBQ3JCTixjQUFjLEVBQUVBLGNBQWM7Ozs7O29CQUM5Qjs7b0JBQ0QsQ0FDSjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1leGFtcGxlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXRoZXJldW1DbGllbnQsIG1vZGFsQ29ubmVjdG9ycywgd2FsbGV0Q29ubmVjdFByb3ZpZGVyIH0gZnJvbSAnQHdlYjNtb2RhbC9ldGhlcmV1bSdcclxuaW1wb3J0IHsgV2ViM01vZGFsIH0gZnJvbSAnQHdlYjNtb2RhbC9yZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknXHJcbmltcG9ydCAnLi4vc3R5bGVzLmNzcydcclxuXHJcbi8vIDEuIEdldCBwcm9qZWN0SUQgYXQgaHR0cHM6Ly9jbG91ZC53YWxsZXRjb25uZWN0LmNvbVxyXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQpXHJcbiAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBwcm92aWRlIE5FWFRfUFVCTElDX1BST0pFQ1RfSUQgZW52IHZhcmlhYmxlJylcclxuY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRFxyXG5jb25zb2xlLmxvZyhcInByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JPVF9VUkxcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQk9UX1VSTClcclxuY29uc29sZS5sb2coXCJwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lEXCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQpXHJcblxyXG4vLyAyLiBDb25maWd1cmUgd2FnbWkgY2xpZW50XHJcbmNvbnN0IGNoYWlucyA9IFtjaGFpbi5tYWlubmV0LCBjaGFpbi5wb2x5Z29uLCBjaGFpbi5vcHRpbWlzbSwgY2hhaW4uYXJiaXRydW1dXHJcbmNvbnN0IHsgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhjaGFpbnMsIFt3YWxsZXRDb25uZWN0UHJvdmlkZXIoeyBwcm9qZWN0SWQgfSldKVxyXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9yczogbW9kYWxDb25uZWN0b3JzKHsgYXBwTmFtZTogJ3dlYjNNb2RhbCcsIGNoYWlucyB9KSxcclxuICBwcm92aWRlclxyXG59KVxyXG5cclxuLy8gMy4gQ29uZmlndXJlIG1vZGFsIGV0aGVyZXVtIGNsaWVudFxyXG5jb25zdCBldGhlcmV1bUNsaWVudCA9IG5ldyBFdGhlcmV1bUNsaWVudCh3YWdtaUNsaWVudCwgY2hhaW5zKVxyXG5cclxuLy8gNC4gV3JhcCB5b3VyIGFwcCB3aXRoIFdhZ21pUHJvdmlkZXIgYW5kIGFkZCA8V2ViM01vZGFsIC8+IGNvbXBvZW5udFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9XYWdtaUNvbmZpZz5cclxuXHJcbiAgICAgIDxXZWIzTW9kYWxcclxuICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgIGFjY2VudENvbG9yPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgZXRoZXJldW1DbGllbnQ9e2V0aGVyZXVtQ2xpZW50fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJFdGhlcmV1bUNsaWVudCIsIm1vZGFsQ29ubmVjdG9ycyIsIndhbGxldENvbm5lY3RQcm92aWRlciIsIldlYjNNb2RhbCIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsIkVycm9yIiwicHJvamVjdElkIiwiY29uc29sZSIsImxvZyIsIk5FWFRfUFVCTElDX0JPVF9VUkwiLCJjaGFpbnMiLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJwcm92aWRlciIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsImV0aGVyZXVtQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiLCJhY2NlbnRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethereum":
/*!**************************************!*\
  !*** external "@web3modal/ethereum" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethereum");;

/***/ }),

/***/ "@web3modal/react":
/*!***********************************!*\
  !*** external "@web3modal/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/react");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();