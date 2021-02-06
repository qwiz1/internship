const form = document.getElementById('event-form');
const btnSetEvent = document.getElementById('set-event');
const ID = () => Math.random().toString(36).substr(2, 4);

function checkForRepeat(day, time) {
  return Object.values(localStorage)
    .map((raw) => JSON.parse(raw))
    .some((meeting) => meeting.day === day && meeting.time === time);
}

function showAlert() {
  const box = document.createElement('div');
  const desc = document.createElement('p');
  box.classList.add('alert-container');
  box.append(desc);
  desc.innerText = 'Failed to create an event. Time slot is already booked.';

  document.querySelector('body').append(box);
  setTimeout(() => {
    box.remove();
  }, 4000);
}

function createEvent() {
  const inputs = form.elements;
  const obj = {};
  Array.from(inputs)
    .filter((input) => input.type !== 'button')
    .forEach((input) => { obj[input.id] = input.value; });

  if (obj.name) {
    if (checkForRepeat(obj.day, obj.time)) {
      showAlert();
      return;
    }
    localStorage.setItem(`${ID()}_${obj.name}`, JSON.stringify(obj));
    window.location.href = 'index.html';
  }
}


btnSetEvent.addEventListener('click', createEvent);


