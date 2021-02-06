import setNewDayAndTime from './saveNewValue';

const row = document.getElementsByClassName('row');

export function onDragOver(event) {
  event.preventDefault();
}

export function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropZone = event.target;
  const newTime = dropZone.parentElement.id;
  const newNameOfDay = dropZone.getAttribute('data-day');

  if (dropZone.classList.value !== 'dropzone') return;

  dropZone.appendChild(draggableElement);
  setNewDayAndTime(id, newNameOfDay, newTime);
}

export function addEventToEmptyZone() {
  Array.from(row)
    .filter((cells) => cells.id)
    .forEach((cell) => Array.from(cell.children)
      .filter((cellContent) => !cellContent.textContent)
      .forEach((cellContent) => {
        cellContent.classList.add('dropzone');
        cellContent.addEventListener('dragover', onDragOver);
        cellContent.addEventListener('drop', onDrop);
      }));
}

export function onDragStart(event) {
  event.target.parentElement.classList.add('dropzone');
  event.target.parentElement.addEventListener('dragover', onDragOver);
  event.target.parentElement.addEventListener('drop', onDrop);
  event.dataTransfer.setData('text/plain', event.target.id);
}

export function addEventsOnFullCells() {
  document.querySelectorAll('.draggable')
    .forEach((droppable) => droppable.addEventListener('dragstart', onDragStart));
}
