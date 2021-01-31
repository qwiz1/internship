let eventKeys = Object.keys(localStorage);

function showEvents() {
    for (let key of eventKeys) {
        let meetings = JSON.parse(localStorage.getItem(key));
        fillInItem(meetings.name, meetings.day, meetings.time, meetings.participants);
    }
}
showEvents();

function fillInItem(name, day, time, participants) {
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



