/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src_page_one/cleanTable.js":
/*!************************************!*\
  !*** ./src_page_one/cleanTable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cleanTable)\n/* harmony export */ });\nfunction cleanTable() {\n  document.querySelectorAll('.cell')\n    .forEach((cell) => cell.remove());\n}\n\n\n//# sourceURL=webpack://internship/./src_page_one/cleanTable.js?");

/***/ }),

/***/ "./src_page_one/dragAndDrop.js":
/*!*************************************!*\
  !*** ./src_page_one/dragAndDrop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onDragOver\": () => (/* binding */ onDragOver),\n/* harmony export */   \"onDrop\": () => (/* binding */ onDrop),\n/* harmony export */   \"addEventToEmptyZone\": () => (/* binding */ addEventToEmptyZone),\n/* harmony export */   \"onDragStart\": () => (/* binding */ onDragStart),\n/* harmony export */   \"addEventsOnFullCells\": () => (/* binding */ addEventsOnFullCells)\n/* harmony export */ });\n/* harmony import */ var _saveNewValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveNewValue */ \"./src_page_one/saveNewValue.js\");\n\n\nconst row = document.getElementsByClassName('row');\n\nfunction onDragOver(event) {\n  event.preventDefault();\n}\n\nfunction onDrop(event) {\n  const id = event.dataTransfer.getData('text');\n  const draggableElement = document.getElementById(id);\n  const dropZone = event.target;\n  const newTime = dropZone.parentElement.id;\n  const newNameOfDay = dropZone.getAttribute('data-day');\n\n  if (dropZone.classList.value !== 'dropzone') return;\n\n  dropZone.appendChild(draggableElement);\n  (0,_saveNewValue__WEBPACK_IMPORTED_MODULE_0__.default)(id, newNameOfDay, newTime);\n}\n\nfunction addEventToEmptyZone() {\n  Array.from(row)\n    .filter((cells) => cells.id)\n    .forEach((cell) => Array.from(cell.children)\n      .filter((cellContent) => !cellContent.textContent)\n      .forEach((cellContent) => {\n        cellContent.classList.add('dropzone');\n        cellContent.addEventListener('dragover', onDragOver);\n        cellContent.addEventListener('drop', onDrop);\n      }));\n}\n\nfunction onDragStart(event) {\n  event.target.parentElement.classList.add('dropzone');\n  event.target.parentElement.addEventListener('dragover', onDragOver);\n  event.target.parentElement.addEventListener('drop', onDrop);\n  event.dataTransfer.setData('text/plain', event.target.id);\n}\n\nfunction addEventsOnFullCells() {\n  document.querySelectorAll('.draggable')\n    .forEach((droppable) => droppable.addEventListener('dragstart', onDragStart));\n}\n\n\n//# sourceURL=webpack://internship/./src_page_one/dragAndDrop.js?");

/***/ }),

/***/ "./src_page_one/index.js":
/*!*******************************!*\
  !*** ./src_page_one/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop */ \"./src_page_one/dragAndDrop.js\");\n/* harmony import */ var _showMeetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMeetings */ \"./src_page_one/showMeetings.js\");\n\n\n\nconst sort = document.getElementById('sort');\n\n(0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.addEventToEmptyZone)();\n\nsort.addEventListener('change', () => {\n  (0,_showMeetings__WEBPACK_IMPORTED_MODULE_1__.default)(sort.value);\n});\n(0,_showMeetings__WEBPACK_IMPORTED_MODULE_1__.default)(sort.value);\n\n(0,_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.addEventsOnFullCells)();\n\n\n//# sourceURL=webpack://internship/./src_page_one/index.js?");

/***/ }),

/***/ "./src_page_one/saveNewValue.js":
/*!**************************************!*\
  !*** ./src_page_one/saveNewValue.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setNewDayAndTime)\n/* harmony export */ });\nfunction setNewDayAndTime(key, newDay, newTime) {\n  const meetingInfo = JSON.parse(localStorage.getItem(key));\n  meetingInfo.day = newDay;\n  meetingInfo.time = newTime;\n  localStorage.setItem(key, JSON.stringify(meetingInfo));\n}\n\n\n//# sourceURL=webpack://internship/./src_page_one/saveNewValue.js?");

/***/ }),

/***/ "./src_page_one/showMeetings.js":
/*!**************************************!*\
  !*** ./src_page_one/showMeetings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMeetings)\n/* harmony export */ });\n/* harmony import */ var _cleanTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanTable */ \"./src_page_one/cleanTable.js\");\n\n\nconst dayNambering = {\n  mon: 1,\n  tue: 2,\n  wed: 3,\n  thu: 4,\n  fri: 5,\n};\nfunction fillInCell(id, name, day, time, participants) {\n  const indexOfDay = dayNambering[day];\n  const row = document.getElementById(time);\n  const cell = document.createElement('div');\n  cell.classList.add('cell', 'draggable');\n  cell.id = id;\n  cell.draggable = 'true';\n\n  const infoConteiner = document.createElement('div');\n  const title = document.createElement('h3');\n  const pElem = document.createElement('p');\n\n  const btn = document.createElement('button');\n  btn.classList.add('btn-remove');\n  btn.type = 'button';\n  btn.innerText = 'x';\n\n  btn.addEventListener('click', (e) => {\n    localStorage.removeItem(cell.id);\n    e.target.parentElement.remove();\n  });\n\n  infoConteiner.classList.add('info');\n\n  title.innerText = name;\n  pElem.innerText = `Participants: ${participants}`;\n\n  infoConteiner.append(title, pElem);\n  cell.append(infoConteiner, btn);\n  row.children[indexOfDay].append(cell);\n}\n\nfunction showMeetings(memb) {\n  (0,_cleanTable__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const meetings = [];\n  Object.keys(localStorage).forEach((key) => {\n    const meeting = JSON.parse(localStorage.getItem(key));\n    meeting.id = key;\n    meetings.push(meeting);\n  });\n  meetings.filter((meeting) => memb === 'all' || memb === meeting.participants)\n    .forEach((meeting) => fillInCell(\n      meeting.id,\n      meeting.name,\n      meeting.day,\n      meeting.time,\n      meeting.participants,\n    ));\n}\n\n\n//# sourceURL=webpack://internship/./src_page_one/showMeetings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src_page_one/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;