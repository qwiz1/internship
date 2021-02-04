const sort = document.getElementById('sort');
const table = document.getElementById('table');
const row = document.getElementsByClassName('row');
const dayNambering = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
};

sort.addEventListener('change', () => {
    showMeetings(sort.value);
});

function showMeetings(memb) {
    cleanTable();
    const meetings = [];
    let eventKeys = Object.keys(localStorage);
    for (let key of eventKeys) {
        let tempObj = {};
        tempObj[key] = JSON.parse(localStorage.getItem(key));
        meetings.push(tempObj)
    }

    for (let i of meetings) {
        for (let uniqID in i) {
            let info = i[uniqID];
            if (memb === info.participants) {
                fillInCell(uniqID, info.name, info.day, info.time, info.participants);
            }
            if (memb === 'all') {
                fillInCell(uniqID, info.name, info.day, info.time, info.participants);
            }
        }
    }
}
showMeetings(sort.value);


function fillInCell(id, name, day, time, participants) {

    const indexOfDay = dayNambering[day];
    const row = document.getElementById(time);
    const cell = document.createElement('div');
    cell.classList.add('cell', 'draggable');
    cell.id = id;
    cell.draggable = 'true';

    const infoConteiner = document.createElement('div');
    const title = document.createElement('h3');
    const pElem = document.createElement('p');

    const btn = document.createElement('button');
    btn.classList.add('btn-remove');
    btn.type = 'button';
    btn.innerText = 'x';

    btn.addEventListener('click', (e) => {
        localStorage.removeItem(cell.id);
        e.target.parentElement.remove();
    })

    infoConteiner.classList.add('info');

    title.innerText = name;
    pElem.innerText = `Participants: ${participants}`;

    infoConteiner.append(title, pElem);
    cell.append(infoConteiner, btn);
    row.children[indexOfDay].append(cell);
}


function cleanTable() {
    const cells = document.querySelectorAll('.cell');
    if (cells) {
        for (let key of cells) {
            key.remove();
        }
    }
}


// drag and drop 

function addEventToEmptyZone() {
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

addEventToEmptyZone();




const droppable = document.querySelectorAll('.draggable');

function addEventsOnFullCells() {
    for (let elem of droppable) {
        elem.addEventListener('dragstart', onDragStart)
    }
}
addEventsOnFullCells()

function onDragStart(event) {
    event.target.parentElement.classList.add('dropzone');
    event.target.parentElement.addEventListener('dragover', onDragOver);
    event.target.parentElement.addEventListener('drop', onDrop);

    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;
    const newTime = dropZone.parentElement.id;
    const newNameOfDay = dropZone.getAttribute('data-day');

    dropZone.appendChild(draggableElement);
    setNewDayAndTime(id, newNameOfDay, newTime);
}

//set new value to localstorage

function setNewDayAndTime(key, newDay, newTime) {
    let meetingInfo = JSON.parse(localStorage.getItem(key));
    meetingInfo.day = newDay;
    meetingInfo.time = newTime;
    localStorage.setItem(key, JSON.stringify(meetingInfo));
}

