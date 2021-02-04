const form = document.getElementById('event-form');
const btnSetEvent = document.getElementById('set-event');
// -------
const ID = () => {
    return Math.random().toString(36).substr(2, 4);
};
// -------
let eventKeys = Object.keys(localStorage);
btnSetEvent.addEventListener('click', createEvent)


function createEvent() {
    const el = form.elements;
    const obj = {};

    for (let i of el) {
        if (i.type != 'button') {
            obj[i.id] = i.value;

        }
    }

    if (obj.name) {
        if (checkForRepeat(obj.day, obj.time)) {
            showAlert();
            return;
        }
        localStorage.setItem(ID() + '_' +obj.name, JSON.stringify(obj));
        window.location.href = 'index.html';
    }
    console.log(obj);
    return obj;
}

function checkForRepeat(day, time) {
    for (let key of eventKeys) {
        let meetings = JSON.parse(localStorage.getItem(key));
        if (meetings.day === day && meetings.time === time) {
            return true;
        }
    }
}

function showAlert() {
    const box = document.createElement('div');
    const desc = document.createElement('p');
    box.classList.add('alert-container');
    box.append(desc);
    desc.innerText = 'Failed to create an event. Time slot is already booked.' 

    document.querySelector('body').append(box);
    setTimeout(() => {
        box.remove()
    }, 4000)
}