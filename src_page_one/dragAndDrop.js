import {setNewDayAndTime} from './saveNewValue.js'
const row = document.getElementsByClassName('row');

export function addEventToEmptyZone() {
    for (let elem of row) {
        if (elem.id) {
            for (let i of elem.children) {
                if (!i.textContent) {
                    i.classList.add('dropzone');
                    i.addEventListener('dragover', onDragOver);
                    i.addEventListener('drop', onDrop);
                }
            }
        }
    }
}

// addEventToEmptyZone();


export function addEventsOnFullCells() {
    const droppable = document.querySelectorAll('.draggable');

    for (let elem of droppable) {
        elem.addEventListener('dragstart', onDragStart)
    }
}
// addEventsOnFullCells()

export function onDragStart(event) {
    event.target.parentElement.classList.add('dropzone');
    event.target.parentElement.addEventListener('dragover', onDragOver);
    event.target.parentElement.addEventListener('drop', onDrop);
    event.dataTransfer.setData('text/plain', event.target.id);
}

export function onDragOver(event) {
    event.preventDefault();
}

export function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;
    const newTime = dropZone.parentElement.id;
    const newNameOfDay = dropZone.getAttribute('data-day');

    if(dropZone.classList.value !== 'dropzone') return;

    dropZone.appendChild(draggableElement);
    setNewDayAndTime(id, newNameOfDay, newTime);
}


