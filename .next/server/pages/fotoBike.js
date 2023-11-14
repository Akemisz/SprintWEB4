"use strict";
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
exports.id = "pages/fotoBike";
exports.ids = ["pages/fotoBike"];
exports.modules = {

/***/ "./components/fotoBike.jsx":
/*!*********************************!*\
  !*** ./components/fotoBike.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FotoBikeNext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction FotoBikeNext() {\n    const { 0: fotoFrente , 1: setFotoFrente  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: fotoDireita , 1: setFotoDireita  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: fotoEsquerda , 1: setFotoEsquerda  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: fotoTras , 1: setFotoTras  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleUploadFotos = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"https://private-e2250-biancaleandrobarreto.apiary-mock.com/questions\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                },\n                body: JSON.stringify({\n                    fotoFrente,\n                    fotoDireita,\n                    fotoEsquerda,\n                    fotoTras\n                })\n            });\n            if (response.ok) {\n                // Upload de fotos realizado com sucesso, redirecione ou faça algo aqui\n                console.log(\"Upload de fotos realizado com sucesso!\");\n            } else {\n                // Tratar erro no upload de fotos\n                console.error(\"Erro no upload de fotos\");\n            }\n        } catch (error) {\n            console.error(\"Erro de rede:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"cadastro\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cadastroHeader\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"technology portocycle header.png\",\n                            alt: \"logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cadastroCard\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleUploadFotos,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"FOTO BIKE\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Agora vamos tirar algumas fotos da sua bike. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 60\n                                    }, this),\n                                    \"Scaneie o QR CODE para iniciar a captura de fotos\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"imgCard\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"qrcode.jpg\",\n                                    alt: \"imagen\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"obs\",\n                                children: \"OBS: o QR code acima \\xe9 meremante ilustrativo, e atua como um prototipo de solu\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"decoration\",\n                                    href: \"/plataforma\",\n                                    children: \"CONFIRMAR\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\components\\\\fotoBike.jsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZvdG9CaWtlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRXpCLFNBQVNFLFlBQVksR0FBRztJQUNyQyxNQUFNLEtBQUNDLFVBQVUsTUFBRUMsYUFBYSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxNQUFNLEtBQUNJLFdBQVcsTUFBRUMsY0FBYyxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLEtBQUNNLFlBQVksTUFBRUMsZUFBZSxNQUFJUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNwRCxNQUFNLEtBQUNRLFFBQVEsTUFBRUMsV0FBVyxNQUFJVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUU1QyxNQUFNVSxpQkFBaUIsR0FBRyxPQUFPQyxDQUFDLEdBQUs7UUFDckNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFFbkIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsc0VBQXNFLEVBQUU7Z0JBQ25HQyxNQUFNLEVBQUUsTUFBTTtnQkFDZEMsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxxQkFBcUI7aUJBQ3RDO2dCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO29CQUNuQmpCLFVBQVU7b0JBQ1ZFLFdBQVc7b0JBQ1hFLFlBQVk7b0JBQ1pFLFFBQVE7aUJBQ1QsQ0FBQzthQUNILENBQUM7WUFFRixJQUFJSyxRQUFRLENBQUNPLEVBQUUsRUFBRTtnQkFDZix1RUFBdUU7Z0JBQ3ZFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO2FBQ3ZELE1BQU07Z0JBQ0wsaUNBQWlDO2dCQUNqQ0QsT0FBTyxDQUFDRSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMxQztTQUNGLENBQUMsT0FBT0EsS0FBSyxFQUFFO1lBQ2RGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRUEsS0FBSyxDQUFDLENBQUM7U0FDdkM7S0FDRjtJQUVELHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQUNDLEVBQUUsRUFBQyxVQUFVOzs4QkFDaEIsOERBQUNELEtBQUc7b0JBQUNFLFNBQVMsRUFBQyxnQkFBZ0I7OEJBQzdCLDRFQUFDQyxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsR0FBRztrQ0FDVCw0RUFBQ0MsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLGtDQUFrQzs0QkFBQ0MsR0FBRyxFQUFDLE1BQU07Ozs7O2dDQUFHOzs7Ozs0QkFDdkQ7Ozs7O3dCQUNBOzhCQUVOLDhEQUFDUCxLQUFHO29CQUFDRSxTQUFTLEVBQUMsY0FBYzs4QkFDM0IsNEVBQUNNLE1BQUk7d0JBQUNDLFFBQVEsRUFBRXZCLGlCQUFpQjs7MENBQy9CLDhEQUFDd0IsSUFBRTswQ0FBQyxXQUFTOzs7OztvQ0FBSzswQ0FDbEIsOERBQUNDLEdBQUM7O29DQUFDLCtDQUM0QztrREFBQSw4REFBQ0MsSUFBRTs7Ozs0Q0FBRztvQ0FBQSxtREFFckQ7Ozs7OztvQ0FBSTswQ0FFSiw4REFBQ1osS0FBRztnQ0FBQ0UsU0FBUyxFQUFDLFNBQVM7MENBQ3hCLDRFQUFDRyxLQUFHO29DQUFDQyxHQUFHLEVBQUMsWUFBWTtvQ0FBQ0MsR0FBRyxFQUFDLFFBQVE7Ozs7O3dDQUFHOzs7OztvQ0FDakM7MENBRUosOERBQUNJLEdBQUM7Z0NBQUNULFNBQVMsRUFBQyxLQUFLOzBDQUFDLDRGQUFpRjs7Ozs7b0NBQUk7MENBQ3hHLDhEQUFDVyxRQUFNO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTswQ0FDbkIsNEVBQUNYLEdBQUM7b0NBQUNELFNBQVMsRUFBQyxZQUFZO29DQUFDRSxJQUFJLEVBQUMsYUFBYTs4Q0FBQyxXQUU3Qzs7Ozs7d0NBQUk7Ozs7O29DQUNHOzs7Ozs7NEJBQ0o7Ozs7O3dCQUdIOzs7Ozs7Z0JBQ0Y7cUJBQ0wsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dEFJLy4vY29tcG9uZW50cy9mb3RvQmlrZS5qc3g/NTExZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3RvQmlrZU5leHQoKSB7XHJcbiAgY29uc3QgW2ZvdG9GcmVudGUsIHNldEZvdG9GcmVudGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmb3RvRGlyZWl0YSwgc2V0Rm90b0RpcmVpdGFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmb3RvRXNxdWVyZGEsIHNldEZvdG9Fc3F1ZXJkYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZvdG9UcmFzLCBzZXRGb3RvVHJhc10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZEZvdG9zID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3ByaXZhdGUtZTIyNTAtYmlhbmNhbGVhbmRyb2JhcnJldG8uYXBpYXJ5LW1vY2suY29tL3F1ZXN0aW9ucycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZm90b0ZyZW50ZSxcclxuICAgICAgICAgIGZvdG9EaXJlaXRhLFxyXG4gICAgICAgICAgZm90b0VzcXVlcmRhLFxyXG4gICAgICAgICAgZm90b1RyYXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gVXBsb2FkIGRlIGZvdG9zIHJlYWxpemFkbyBjb20gc3VjZXNzbywgcmVkaXJlY2lvbmUgb3UgZmHDp2EgYWxnbyBhcXVpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBkZSBmb3RvcyByZWFsaXphZG8gY29tIHN1Y2Vzc28hJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVHJhdGFyIGVycm8gbm8gdXBsb2FkIGRlIGZvdG9zXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyB1cGxvYWQgZGUgZm90b3MnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZSByZWRlOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cImNhZGFzdHJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRhc3Ryb0hlYWRlclwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJ0ZWNobm9sb2d5IHBvcnRvY3ljbGUgaGVhZGVyLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZGFzdHJvQ2FyZFwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVVwbG9hZEZvdG9zfT5cclxuICAgICAgICAgICAgPGgyPkZPVE8gQklLRTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEFnb3JhIHZhbW9zIHRpcmFyIGFsZ3VtYXMgZm90b3MgZGEgc3VhIGJpa2UuIDxiciAvPlxyXG4gICAgICAgICAgICAgIFNjYW5laWUgbyBRUiBDT0RFIHBhcmEgaW5pY2lhciBhIGNhcHR1cmEgZGUgZm90b3NcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nQ2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInFyY29kZS5qcGdcIiBhbHQ9XCJpbWFnZW5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J29icyc+T0JTOiBvIFFSIGNvZGUgYWNpbWEgw6kgbWVyZW1hbnRlIGlsdXN0cmF0aXZvLCBlIGF0dWEgY29tbyB1bSBwcm90b3RpcG8gZGUgc29sdcOnw6NvPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWNvcmF0aW9uXCIgaHJlZj1cIi9wbGF0YWZvcm1hXCI+XHJcbiAgICAgICAgICAgICAgICBDT05GSVJNQVJcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3RvQmlrZU5leHQiLCJmb3RvRnJlbnRlIiwic2V0Rm90b0ZyZW50ZSIsImZvdG9EaXJlaXRhIiwic2V0Rm90b0RpcmVpdGEiLCJmb3RvRXNxdWVyZGEiLCJzZXRGb3RvRXNxdWVyZGEiLCJmb3RvVHJhcyIsInNldEZvdG9UcmFzIiwiaGFuZGxlVXBsb2FkRm90b3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uU3VibWl0IiwiaDIiLCJwIiwiYnIiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/fotoBike.jsx\n");

/***/ }),

/***/ "./pages/fotoBike.jsx":
/*!****************************!*\
  !*** ./pages/fotoBike.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_fotoBike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fotoBike */ \"./components/fotoBike.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \" NextAI \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\pages\\\\fotoBike.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\pages\\\\fotoBike.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_fotoBike__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\pages\\\\fotoBike.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\juume\\\\Desktop\\\\sprint_web_4-main\\\\pages\\\\fotoBike.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3RvQmlrZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDckI7QUFFNUIsaUVBQWUsSUFBSTtJQUNmLHFCQUNJLDhEQUFDRSxLQUFHOzswQkFDQSw4REFBQ0Qsa0RBQUk7MEJBQ0QsNEVBQUNFLE9BQUs7OEJBQUMsVUFBUTs7Ozs7NkJBQVE7Ozs7O3lCQUNwQjswQkFDUCw4REFBQ0gsNERBQVk7Ozs7eUJBQWdCOzs7Ozs7aUJBQzNCLENBQ1Q7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRBSS8uL3BhZ2VzL2ZvdG9CaWtlLmpzeD9mYTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3RvQmlrZU5leHQgZnJvbSAnLi4vY29tcG9uZW50cy9mb3RvQmlrZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4gTmV4dEFJIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvdG9CaWtlTmV4dD48L0ZvdG9CaWtlTmV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJGb3RvQmlrZU5leHQiLCJIZWFkIiwiZGl2IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/fotoBike.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/fotoBike.jsx"));
module.exports = __webpack_exports__;

})();