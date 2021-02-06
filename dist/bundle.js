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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanTable\": () => (/* binding */ cleanTable)\n/* harmony export */ });\nfunction cleanTable() {\r\n    const cells = document.querySelectorAll('.cell');\r\n    if (cells) {\r\n        for (let key of cells) {\r\n            key.remove();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://internship/./src_page_one/cleanTable.js?");

/***/ }),

/***/ "./src_page_one/dragAndDrop.js":
/*!*************************************!*\
  !*** ./src_page_one/dragAndDrop.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventToEmptyZone\": () => (/* binding */ addEventToEmptyZone),\n/* harmony export */   \"addEventsOnFullCells\": () => (/* binding */ addEventsOnFullCells),\n/* harmony export */   \"onDragStart\": () => (/* binding */ onDragStart),\n/* harmony export */   \"onDragOver\": () => (/* binding */ onDragOver),\n/* harmony export */   \"onDrop\": () => (/* binding */ onDrop)\n/* harmony export */ });\n/* harmony import */ var _saveNewValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveNewValue.js */ \"./src_page_one/saveNewValue.js\");\n\r\nconst row = document.getElementsByClassName('row');\r\n\r\nfunction addEventToEmptyZone() {\r\n    for (let elem of row) {\r\n        if (elem.id) {\r\n            for (let i of elem.children) {\r\n                if (!i.textContent) {\r\n                    i.classList.add('dropzone');\r\n                    i.addEventListener('dragover', onDragOver);\r\n                    i.addEventListener('drop', onDrop);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// addEventToEmptyZone();\r\n\r\n\r\nfunction addEventsOnFullCells() {\r\n    const droppable = document.querySelectorAll('.draggable');\r\n\r\n    for (let elem of droppable) {\r\n        elem.addEventListener('dragstart', onDragStart)\r\n    }\r\n}\r\n// addEventsOnFullCells()\r\n\r\nfunction onDragStart(event) {\r\n    event.target.parentElement.classList.add('dropzone');\r\n    event.target.parentElement.addEventListener('dragover', onDragOver);\r\n    event.target.parentElement.addEventListener('drop', onDrop);\r\n    event.dataTransfer.setData('text/plain', event.target.id);\r\n}\r\n\r\nfunction onDragOver(event) {\r\n    event.preventDefault();\r\n}\r\n\r\nfunction onDrop(event) {\r\n    const id = event.dataTransfer.getData('text');\r\n    const draggableElement = document.getElementById(id);\r\n    const dropZone = event.target;\r\n    const newTime = dropZone.parentElement.id;\r\n    const newNameOfDay = dropZone.getAttribute('data-day');\r\n\r\n    if(dropZone.classList.value !== 'dropzone') return;\r\n\r\n    dropZone.appendChild(draggableElement);\r\n    (0,_saveNewValue_js__WEBPACK_IMPORTED_MODULE_0__.setNewDayAndTime)(id, newNameOfDay, newTime);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://internship/./src_page_one/dragAndDrop.js?");

/***/ }),

/***/ "./src_page_one/index.js":
/*!*******************************!*\
  !*** ./src_page_one/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop.js */ \"./src_page_one/dragAndDrop.js\");\n/* harmony import */ var _showMeetings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showMeetings.js */ \"./src_page_one/showMeetings.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst sort = document.getElementById('sort');\r\n\r\n(0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__.addEventToEmptyZone)();\r\n\r\nsort.addEventListener('change', () => {\r\n    (0,_showMeetings_js__WEBPACK_IMPORTED_MODULE_1__.showMeetings)(sort.value);\r\n});\r\n\r\n(0,_showMeetings_js__WEBPACK_IMPORTED_MODULE_1__.showMeetings)(sort.value);\r\n(0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__.addEventsOnFullCells)();\r\n// function showMeetings(memb) {\r\n//     cleanTable();\r\n//     const meetings = [];\r\n//     let eventKeys = Object.keys(localStorage);\r\n//     for (let key of eventKeys) {\r\n//         let tempObj = {};\r\n//         tempObj[key] = JSON.parse(localStorage.getItem(key));\r\n//         meetings.push(tempObj)\r\n//     }\r\n\r\n//     for (let i of meetings) {\r\n//         for (let uniqID in i) {\r\n//             let info = i[uniqID];\r\n//             if (memb === info.participants) {\r\n//                 fillInCell(uniqID, info.name, info.day, info.time, info.participants);\r\n//             }\r\n//             if (memb === 'all') {\r\n//                 fillInCell(uniqID, info.name, info.day, info.time, info.participants);\r\n//             }\r\n//         }\r\n//     }\r\n// }\r\n// showMeetings(sort.value);\r\n\r\n\r\n// function fillInCell(id, name, day, time, participants) {\r\n\r\n//     const indexOfDay = dayNambering[day];\r\n//     const row = document.getElementById(time);\r\n//     const cell = document.createElement('div');\r\n//     cell.classList.add('cell', 'draggable');\r\n//     cell.id = id;\r\n//     cell.draggable = 'true';\r\n\r\n//     const infoConteiner = document.createElement('div');\r\n//     const title = document.createElement('h3');\r\n//     const pElem = document.createElement('p');\r\n\r\n//     const btn = document.createElement('button');\r\n//     btn.classList.add('btn-remove');\r\n//     btn.type = 'button';\r\n//     btn.innerText = 'x';\r\n\r\n//     btn.addEventListener('click', (e) => {\r\n//         localStorage.removeItem(cell.id);\r\n//         e.target.parentElement.remove();\r\n//     })\r\n\r\n//     infoConteiner.classList.add('info');\r\n\r\n//     title.innerText = name;\r\n//     pElem.innerText = `Participants: ${participants}`;\r\n\r\n//     infoConteiner.append(title, pElem);\r\n//     cell.append(infoConteiner, btn);\r\n//     row.children[indexOfDay].append(cell);\r\n// }\r\n\r\n\r\n\r\n// function cleanTable() {\r\n//     const cells = document.querySelectorAll('.cell');\r\n//     if (cells) {\r\n//         for (let key of cells) {\r\n//             key.remove();\r\n//         }\r\n//     }\r\n// }\r\n\r\n\r\n// drag and drop \r\n\r\n// function addEventToEmptyZone() {\r\n//     for (let elem of row) {\r\n//         if (elem.id) {\r\n//             for (let i of elem.children) {\r\n//                 if (!i.textContent) {\r\n//                     i.classList.add('dropzone');\r\n//                     i.addEventListener('dragover', onDragOver);\r\n//                     i.addEventListener('drop', onDrop);\r\n//                 }\r\n//             }\r\n//         }\r\n//     }\r\n// }\r\n\r\n// addEventToEmptyZone();\r\n\r\n\r\n\r\n\r\n// const droppable = document.querySelectorAll('.draggable');\r\n\r\n// function addEventsOnFullCells() {\r\n//     for (let elem of droppable) {\r\n//         elem.addEventListener('dragstart', onDragStart)\r\n//     }\r\n// }\r\n// addEventsOnFullCells()\r\n\r\n// function onDragStart(event) {\r\n//     event.target.parentElement.classList.add('dropzone');\r\n//     event.target.parentElement.addEventListener('dragover', onDragOver);\r\n//     event.target.parentElement.addEventListener('drop', onDrop);\r\n\r\n//     event.dataTransfer.setData('text/plain', event.target.id);\r\n// }\r\n\r\n// function onDragOver(event) {\r\n//     event.preventDefault();\r\n// }\r\n\r\n// function onDrop(event) {\r\n//     const id = event.dataTransfer.getData('text');\r\n//     const draggableElement = document.getElementById(id);\r\n//     const dropZone = event.target;\r\n//     const newTime = dropZone.parentElement.id;\r\n//     const newNameOfDay = dropZone.getAttribute('data-day');\r\n\r\n//     if(dropZone.classList.value !== 'dropzone') return;\r\n\r\n//     dropZone.appendChild(draggableElement);\r\n//     setNewDayAndTime(id, newNameOfDay, newTime);\r\n// }\r\n\r\n// //set new value to localstorage\r\n\r\n// function setNewDayAndTime(key, newDay, newTime) {\r\n//     let meetingInfo = JSON.parse(localStorage.getItem(key));\r\n//     meetingInfo.day = newDay;\r\n//     meetingInfo.time = newTime;\r\n//     localStorage.setItem(key, JSON.stringify(meetingInfo));\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://internship/./src_page_one/index.js?");

/***/ }),

/***/ "./src_page_one/saveNewValue.js":
/*!**************************************!*\
  !*** ./src_page_one/saveNewValue.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setNewDayAndTime\": () => (/* binding */ setNewDayAndTime)\n/* harmony export */ });\nfunction setNewDayAndTime(key, newDay, newTime) {\r\n    let meetingInfo = JSON.parse(localStorage.getItem(key));\r\n    meetingInfo.day = newDay;\r\n    meetingInfo.time = newTime;\r\n    localStorage.setItem(key, JSON.stringify(meetingInfo));\r\n}\n\n//# sourceURL=webpack://internship/./src_page_one/saveNewValue.js?");

/***/ }),

/***/ "./src_page_one/showMeetings.js":
/*!**************************************!*\
  !*** ./src_page_one/showMeetings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMeetings\": () => (/* binding */ showMeetings)\n/* harmony export */ });\n/* harmony import */ var _cleanTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanTable.js */ \"./src_page_one/cleanTable.js\");\n\r\n\r\n\r\nconst dayNambering = {\r\n    mon: 1,\r\n    tue: 2,\r\n    wed: 3,\r\n    thu: 4,\r\n    fri: 5,\r\n};\r\n\r\nfunction showMeetings(memb) {\r\n    (0,_cleanTable_js__WEBPACK_IMPORTED_MODULE_0__.cleanTable)();\r\n    const meetings = [];\r\n    let eventKeys = Object.keys(localStorage);\r\n    for (let key of eventKeys) {\r\n        let tempObj = {};\r\n        tempObj[key] = JSON.parse(localStorage.getItem(key));\r\n        meetings.push(tempObj)\r\n    }\r\n\r\n    for (let i of meetings) {\r\n        for (let uniqID in i) {\r\n            let info = i[uniqID];\r\n            if (memb === info.participants) {\r\n                fillInCell(uniqID, info.name, info.day, info.time, info.participants);\r\n            }\r\n            if (memb === 'all') {\r\n                fillInCell(uniqID, info.name, info.day, info.time, info.participants);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction fillInCell(id, name, day, time, participants) {\r\n\r\n    const indexOfDay = dayNambering[day];\r\n    const row = document.getElementById(time);\r\n    const cell = document.createElement('div');\r\n    cell.classList.add('cell', 'draggable');\r\n    cell.id = id;\r\n    cell.draggable = 'true';\r\n\r\n    const infoConteiner = document.createElement('div');\r\n    const title = document.createElement('h3');\r\n    const pElem = document.createElement('p');\r\n\r\n    const btn = document.createElement('button');\r\n    btn.classList.add('btn-remove');\r\n    btn.type = 'button';\r\n    btn.innerText = 'x';\r\n\r\n    btn.addEventListener('click', (e) => {\r\n        localStorage.removeItem(cell.id);\r\n        e.target.parentElement.remove();\r\n    })\r\n\r\n    infoConteiner.classList.add('info');\r\n\r\n    title.innerText = name;\r\n    pElem.innerText = `Participants: ${participants}`;\r\n\r\n    infoConteiner.append(title, pElem);\r\n    cell.append(infoConteiner, btn);\r\n    row.children[indexOfDay].append(cell);\r\n}\n\n//# sourceURL=webpack://internship/./src_page_one/showMeetings.js?");

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