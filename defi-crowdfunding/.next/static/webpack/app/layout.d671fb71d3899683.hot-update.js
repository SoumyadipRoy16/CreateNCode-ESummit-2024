"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/AppLayout.tsx":
/*!**********************************!*\
  !*** ./components/AppLayout.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppLayout),\n/* harmony export */   providerOptions: () => (/* binding */ providerOptions)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_Wallet_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,Wallet!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/wallet.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_Wallet_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,Wallet!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./components/button.tsx\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"(app-pages-browser)/../node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coinbase/wallet-sdk */ \"(app-pages-browser)/../node_modules/@coinbase/wallet-sdk/dist/index.js\");\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"(app-pages-browser)/../node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/../node_modules/process/browser.js\");\n/* __next_internal_client_entry_do_not_use__ providerOptions,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// Web3Modal instance setup\nconst providerOptions = {\n    coinbasewallet: {\n        package: _coinbase_wallet_sdk__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        options: {\n            appName: \"Web 3 Modal Demo\",\n            infuraId: process.env.INFURA_KEY\n        }\n    },\n    walletconnect: {\n        package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        options: {\n            infuraId: process.env.INFURA_KEY\n        }\n    }\n};\nconst web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({\n    providerOptions\n});\nfunction AppLayout(param) {\n    let { children } = param;\n    _s();\n    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [library, setLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Connect to the wallet\n    const connectWallet = async ()=>{\n        try {\n            const provider = await web3Modal.connect();\n            const library = new ethers__WEBPACK_IMPORTED_MODULE_7__.Web3Provider(provider);\n            setProvider(provider);\n            setLibrary(library);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    // Disconnect from the wallet\n    const disconnectWallet = ()=>{\n        web3Modal === null || web3Modal === void 0 ? void 0 : web3Modal.clearCachedProvider(); // Clears cached provider on disconnect\n        setConnected(false);\n        setWalletAddress(\"\");\n        setProvider(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-slate-900 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm transition-colors duration-300\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-6 py-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/\",\n                                        className: \"text-xl font-bold text-white\",\n                                        children: \"DeFi Crowdfunding\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hidden md:flex space-x-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/\",\n                                                className: \"text-white/80 hover:text-white transition-colors\",\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/campaigns\",\n                                                className: \"text-white/80 hover:text-white transition-colors\",\n                                                children: \"Campaigns\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/governance\",\n                                                className: \"text-white/80 hover:text-white transition-colors\",\n                                                children: \"Governance\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/staking\",\n                                                className: \"text-white/80 hover:text-white transition-colors\",\n                                                children: \"Staking\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/profile\",\n                                                className: \"text-white/80 hover:text-white transition-colors\",\n                                                children: \"Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-4\",\n                                children: !connected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    variant: \"outline\",\n                                    className: \"flex items-center space-x-2\",\n                                    onClick: connectWallet,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_Wallet_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Connect Wallet\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenu, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenuTrigger, {\n                                            asChild: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                variant: \"outline\",\n                                                className: \"flex items-center space-x-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_Wallet_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                        className: \"h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: [\n                                                            walletAddress.slice(0, 6),\n                                                            \"...\",\n                                                            walletAddress.slice(-4)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_Wallet_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                        className: \"h-4 w-4 ml-2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenuContent, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenuLabel, {\n                                                    children: \"Wallet Connected\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenuSeparator, {}, void 0, false, {\n                                                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenuItem, {\n                                                    onClick: disconnectWallet,\n                                                    children: \"Disconnect Wallet\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-6 py-8\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subhamrakshit/Desktop/CreateNCode-ESummit-2024/defi-crowdfunding/components/AppLayout.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(AppLayout, \"mak+z9Barv5bOqWAxm6JkbngXuA=\");\n_c = AppLayout;\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDZjtBQUNzQjtBQUNqQjtBQUNBO0FBQ0Y7QUFDcUI7QUFDSTtBQVNsQjtBQUV2QywyQkFBMkI7QUFFcEIsTUFBTWUsa0JBQWtCO0lBQzdCQyxnQkFBZ0I7UUFDZEMsU0FBU1YsNERBQWlCQTtRQUMxQlcsU0FBUztZQUNQQyxTQUFTO1lBQ1RDLFVBQVVDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtRQUNsQztJQUNGO0lBQ0FDLGVBQWU7UUFDYlAsU0FBU1Qsb0VBQWFBO1FBQ3RCVSxTQUFTO1lBQ1BFLFVBQVVDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtRQUNsQztJQUNGO0FBQ0QsRUFBRTtBQUVILE1BQU1FLFlBQVksSUFBSXBCLGtEQUFTQSxDQUFDO0lBQzlCVTtBQUNGO0FBR2UsU0FBU1csVUFBVSxLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUNoQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzdCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQzhCLGVBQWVDLGlCQUFpQixHQUFHL0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0MsU0FBU0MsV0FBVyxHQUFHakMsK0NBQVFBO0lBR3RDLHdCQUF3QjtJQUN4QixNQUFNa0MsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1WLFVBQVVXLE9BQU87WUFDeEMsTUFBTUosVUFBVSxJQUFJMUIsZ0RBQTZCLENBQUM2QjtZQUNsREksWUFBWUo7WUFDWkYsV0FBV0Q7UUFDYixFQUFFLE9BQU9RLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBR0EsNkJBQTZCO0lBQzdCLE1BQU1FLG1CQUFtQjtRQUN2QmpCLHNCQUFBQSxnQ0FBQUEsVUFBV2tCLG1CQUFtQixJQUFJLHVDQUF1QztRQUN6RWQsYUFBYTtRQUNiRSxpQkFBaUI7UUFDakJRLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQzVDLGlEQUFJQTt3Q0FBQzhDLE1BQUs7d0NBQUlGLFdBQVU7a0RBQStCOzs7Ozs7a0RBR3hELDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUM1QyxpREFBSUE7Z0RBQUM4QyxNQUFLO2dEQUFJRixXQUFVOzBEQUFtRDs7Ozs7OzBEQUM1RSw4REFBQzVDLGlEQUFJQTtnREFBQzhDLE1BQUs7Z0RBQWFGLFdBQVU7MERBQW1EOzs7Ozs7MERBQ3JGLDhEQUFDNUMsaURBQUlBO2dEQUFDOEMsTUFBSztnREFBY0YsV0FBVTswREFBbUQ7Ozs7OzswREFDdEYsOERBQUM1QyxpREFBSUE7Z0RBQUM4QyxNQUFLO2dEQUFXRixXQUFVOzBEQUFtRDs7Ozs7OzBEQUNuRiw4REFBQzVDLGlEQUFJQTtnREFBQzhDLE1BQUs7Z0RBQVdGLFdBQVU7MERBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3ZGLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWixDQUFDakIsMEJBQ0EsOERBQUN4QiwyQ0FBTUE7b0NBQUM0QyxTQUFRO29DQUFVSCxXQUFVO29DQUE4QkksU0FBU2Y7O3NEQUN6RSw4REFBQ2hDLDhGQUFNQTs0Q0FBQzJDLFdBQVU7Ozs7OztzREFDbEIsOERBQUNLO3NEQUFLOzs7Ozs7Ozs7Ozt5REFHUiw4REFBQ3pDLHVFQUFZQTs7c0RBQ1gsOERBQUNDLDhFQUFtQkE7NENBQUN5QyxPQUFPO3NEQUMxQiw0RUFBQy9DLDJDQUFNQTtnREFBQzRDLFNBQVE7Z0RBQVVILFdBQVU7O2tFQUNsQyw4REFBQzNDLDhGQUFNQTt3REFBQzJDLFdBQVU7Ozs7OztrRUFDbEIsOERBQUNLOzs0REFBTXBCLGNBQWNzQixLQUFLLENBQUMsR0FBRzs0REFBRzs0REFBSXRCLGNBQWNzQixLQUFLLENBQUMsQ0FBQzs7Ozs7OztrRUFDMUQsOERBQUNqRCwrRkFBV0E7d0RBQUMwQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHM0IsOERBQUNsQyw4RUFBbUJBOzs4REFDbEIsOERBQUNDLDRFQUFpQkE7OERBQUM7Ozs7Ozs4REFDbkIsOERBQUNFLGdGQUFxQkE7Ozs7OzhEQUN0Qiw4REFBQ0QsMkVBQWdCQTtvREFBQ29DLFNBQVNQOzhEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVMzRCw4REFBQ1c7Z0JBQUtSLFdBQVU7MEJBQ2JsQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0E1RXdCRDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3N1YmhhbXJha3NoaXQvRGVza3RvcC9DcmVhdGVOQ29kZS1FU3VtbWl0LTIwMjQvZGVmaS1jcm93ZGZ1bmRpbmcvY29tcG9uZW50cy9BcHBMYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBXYWxsZXQsIENoZXZyb25Eb3duIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBDb2luYmFzZVdhbGxldFNESyBmcm9tIFwiQGNvaW5iYXNlL3dhbGxldC1zZGtcIjtcbmltcG9ydCBXYWxsZXRDb25uZWN0IGZyb20gXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2luYmFzZVdhbGxldFNESyB9IGZyb20gXCJAY29pbmJhc2Uvd2FsbGV0LXNka1wiO1xuaW1wb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVMYWJlbCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51U2VwYXJhdG9yLFxufSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcblxuLy8gV2ViM01vZGFsIGluc3RhbmNlIHNldHVwXG5cbmV4cG9ydCBjb25zdCBwcm92aWRlck9wdGlvbnMgPSB7XG4gIGNvaW5iYXNld2FsbGV0OiB7XG4gICAgcGFja2FnZTogQ29pbmJhc2VXYWxsZXRTREssIFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGFwcE5hbWU6IFwiV2ViIDMgTW9kYWwgRGVtb1wiLFxuICAgICAgaW5mdXJhSWQ6IHByb2Nlc3MuZW52LklORlVSQV9LRVkgXG4gICAgfVxuICB9LFxuICB3YWxsZXRjb25uZWN0OiB7XG4gICAgcGFja2FnZTogV2FsbGV0Q29ubmVjdCwgXG4gICAgb3B0aW9uczoge1xuICAgICAgaW5mdXJhSWQ6IHByb2Nlc3MuZW52LklORlVSQV9LRVkgXG4gICAgfVxuICB9XG4gfTtcblxuY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCh7XG4gIHByb3ZpZGVyT3B0aW9ucyAvLyByZXF1aXJlZFxufSk7XG4gXG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTsgXG4gIGNvbnN0IFtsaWJyYXJ5LCBzZXRMaWJyYXJ5XSA9IHVzZVN0YXRlKCk7XG5cblxuICAvLyBDb25uZWN0IHRvIHRoZSB3YWxsZXRcbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xuICAgICAgY29uc3QgbGlicmFyeSA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG4gICAgICBzZXRQcm92aWRlcihwcm92aWRlcik7XG4gICAgICBzZXRMaWJyYXJ5KGxpYnJhcnkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuICAvLyBEaXNjb25uZWN0IGZyb20gdGhlIHdhbGxldFxuICBjb25zdCBkaXNjb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuICAgIHdlYjNNb2RhbD8uY2xlYXJDYWNoZWRQcm92aWRlcigpOyAvLyBDbGVhcnMgY2FjaGVkIHByb3ZpZGVyIG9uIGRpc2Nvbm5lY3RcbiAgICBzZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIHNldFdhbGxldEFkZHJlc3MoXCJcIik7XG4gICAgc2V0UHJvdmlkZXIobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MCBib3JkZXItYiBib3JkZXItd2hpdGUvMTAgYmctc2xhdGUtOTAwLzgwIGJhY2tkcm9wLWJsdXItc20gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNiBweS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC04XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIERlRmkgQ3Jvd2RmdW5kaW5nXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYW1wYWlnbnNcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5DYW1wYWlnbnM8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nb3Zlcm5hbmNlXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84MCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCI+R292ZXJuYW5jZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0YWtpbmdcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5TdGFraW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlByb2ZpbGU8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICB7IWNvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCIgb25DbGljaz17Y29ubmVjdFdhbGxldH0+XG4gICAgICAgICAgICAgICAgICA8V2FsbGV0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q29ubmVjdCBXYWxsZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8V2FsbGV0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt3YWxsZXRBZGRyZXNzLnNsaWNlKDAsIDYpfS4uLnt3YWxsZXRBZGRyZXNzLnNsaWNlKC00KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVMYWJlbD5XYWxsZXQgQ29ubmVjdGVkPC9Ecm9wZG93bk1lbnVMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXtkaXNjb25uZWN0V2FsbGV0fT5EaXNjb25uZWN0IFdhbGxldDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC02IHB5LThcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIldhbGxldCIsIkNoZXZyb25Eb3duIiwiQnV0dG9uIiwiV2ViM01vZGFsIiwiZXRoZXJzIiwiQ29pbmJhc2VXYWxsZXRTREsiLCJXYWxsZXRDb25uZWN0IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVMYWJlbCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJwcm92aWRlck9wdGlvbnMiLCJjb2luYmFzZXdhbGxldCIsInBhY2thZ2UiLCJvcHRpb25zIiwiYXBwTmFtZSIsImluZnVyYUlkIiwicHJvY2VzcyIsImVudiIsIklORlVSQV9LRVkiLCJ3YWxsZXRjb25uZWN0Iiwid2ViM01vZGFsIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImxpYnJhcnkiLCJzZXRMaWJyYXJ5IiwiY29ubmVjdFdhbGxldCIsInByb3ZpZGVyIiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNldFByb3ZpZGVyIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlzY29ubmVjdFdhbGxldCIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwidmFyaWFudCIsIm9uQ2xpY2siLCJzcGFuIiwiYXNDaGlsZCIsInNsaWNlIiwibWFpbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AppLayout.tsx\n"));

/***/ })

});