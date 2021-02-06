
import {cleanTable} from './cleanTable.js'

const dayNambering = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
};

export function showMeetings(memb) {
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