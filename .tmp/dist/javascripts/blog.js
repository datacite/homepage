/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/javascripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/javascripts/blog.js":
/*!************************************!*\
  !*** ./source/javascripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var xmlhttp = new XMLHttpRequest();\nvar url = \"https://api.datacite.org/pages?tag=featured\";\n\nxmlhttp.onreadystatechange = function () {\n  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {\n    formatBlog(xmlhttp.responseText);\n  }\n};\n\nxmlhttp.open(\"GET\", url, true);\nxmlhttp.send();\n\nfunction formatBlog(response) {\n  var response = JSON.parse(response);\n  var div = document.getElementById('bloglist');\n\n  for (var i in response.data) {\n    div.innerHTML += '<div class=\\\"col-md-4 col-sm-4 svc-item\\\">' + '<div class=\\\"thumbnail\\\">' + '<a href=\\\"' + response.data[i].id + '\\\">' + '<img src=\\\"https://blog.datacite.org' + response.data[i].attributes['image-url'] + '\\\" /></a><br /></div>' + '<h4>' + response.data[i].attributes.title + '</h4>' + '<p>' + response.data[i].attributes.description + '</p>' + '<p class=\\\"read-more\\\">' + '<a href=\\\"' + response.data[i].id + '\\\">Read more</a></p>' + '</div></div>';\n\n    if (i == 2) {\n      break;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvamF2YXNjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qYXZhc2NyaXB0cy9ibG9nLmpzPzkxODciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnZhciB1cmwgPSBcImh0dHBzOi8vYXBpLmRhdGFjaXRlLm9yZy9wYWdlcz90YWc9ZmVhdHVyZWRcIjtcblxueG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQgJiYgeG1saHR0cC5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGZvcm1hdEJsb2coeG1saHR0cC5yZXNwb25zZVRleHQpO1xuICAgIH1cbn07XG54bWxodHRwLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbnhtbGh0dHAuc2VuZCgpO1xuXG5mdW5jdGlvbiBmb3JtYXRCbG9nKHJlc3BvbnNlKSB7XG5cdHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXHR2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2dsaXN0Jyk7XG5cblx0Zm9yICh2YXIgaSBpbiByZXNwb25zZS5kYXRhKXtcblx0XHRkaXYuaW5uZXJIVE1MICs9ICc8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBjb2wtc20tNCBzdmMtaXRlbVxcXCI+J1xuXHRcdFx0XHRcdFx0KyAnPGRpdiBjbGFzcz1cXFwidGh1bWJuYWlsXFxcIj4nXG5cdFx0XHRcdFx0XHQrICc8YSBocmVmPVxcXCInXG5cdFx0XHQgXHRcdFx0KyByZXNwb25zZS5kYXRhW2ldLmlkXG5cdFx0XHRcdFx0XHQrICdcXFwiPidcblx0XHRcdFx0XHRcdCsgJzxpbWcgc3JjPVxcXCJodHRwczovL2Jsb2cuZGF0YWNpdGUub3JnJ1xuXHRcdFx0XHRcdFx0KyByZXNwb25zZS5kYXRhW2ldLmF0dHJpYnV0ZXNbJ2ltYWdlLXVybCddXG5cdFx0XHRcdFx0XHQrICdcXFwiIC8+PC9hPjxiciAvPjwvZGl2Pidcblx0XHRcdFx0XHRcdCsgJzxoND4nXG5cdFx0XHRcdFx0XHQrIHJlc3BvbnNlLmRhdGFbaV0uYXR0cmlidXRlcy50aXRsZVxuXHRcdFx0XHRcdFx0KyAnPC9oND4nXG5cdFx0XHRcdFx0XHQrICc8cD4nXG5cdFx0XHRcdFx0XHQrIHJlc3BvbnNlLmRhdGFbaV0uYXR0cmlidXRlcy5kZXNjcmlwdGlvblxuXHRcdFx0XHRcdFx0KyAnPC9wPidcblx0XHRcdFx0XHRcdCsgJzxwIGNsYXNzPVxcXCJyZWFkLW1vcmVcXFwiPidcblx0XHRcdFx0XHRcdCsgJzxhIGhyZWY9XFxcIidcblx0XHRcdCBcdFx0XHQrIHJlc3BvbnNlLmRhdGFbaV0uaWRcblx0XHRcdFx0XHRcdCsgJ1xcXCI+UmVhZCBtb3JlPC9hPjwvcD4nXG5cdFx0XHRcdFx0XHQrICc8L2Rpdj48L2Rpdj4nXG5cdFx0aWYgKGkgPT0gMikge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/javascripts/blog.js\n");

/***/ })

/******/ });