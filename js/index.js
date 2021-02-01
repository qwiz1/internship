// const rows = document.querySelectorAll('.row');
const sort = document.getElementById('sort');

const table = document.getElementById('table');
// table.addEventListener('click', whatElement)

// function move(e) {
//     console.log(e.target);    
// }

// function whatElement(event) {
//     if (event.target.classList.value === 'cell') {
//         console.log(event.target)
//         event.target.addEventListener('mousemove', move);
        
//     } else if (event.target.classList.value === 'info') {
//         console.log(event.target.parentElement)
//         event.target.parentElement.addEventListener('mousemove', move);

//     }

// }

sort.addEventListener('change', () => {
    showEvents(sort.value);
})

function showEvents(memb) {
    cleanTable();
    const meetings = [];
    let eventKeys = Object.keys(localStorage);
    for (let key of eventKeys) {
        meetings.push(JSON.parse(localStorage.getItem(key)));
    }

    for (let key of meetings) {
        if (memb === key.participants) {
            fillInCell(key.name, key.day, key.time, key.participants);
        }
        if (memb === 'all') {
            fillInCell(key.name, key.day, key.time, key.participants);
        }
    }
}
showEvents(sort.value);

function fillInCell(name, day, time, participants) {

    const dayNambering = {
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
    };

    const indexOfDay = dayNambering[day];
    const row = document.getElementById(time);

    const cell = document.createElement('div');
    cell.classList.add('cell');

    const infoConteiner = document.createElement('div');
    const title = document.createElement('h3');
    const pElem = document.createElement('p');

    const btn = document.createElement('button');
    btn.classList.add('btn-remove');
    btn.type = 'button';
    btn.innerText = 'x';

    btn.addEventListener('click', (e) => {
        localStorage.removeItem(title.textContent)
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

