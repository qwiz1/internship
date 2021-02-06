import cleanTable from './cleanTable';

const dayNambering = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
};
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
  });

  infoConteiner.classList.add('info');

  title.innerText = name;
  pElem.innerText = `Participants: ${participants}`;

  infoConteiner.append(title, pElem);
  cell.append(infoConteiner, btn);
  row.children[indexOfDay].append(cell);
}

export default function showMeetings(memb) {
  cleanTable();
  const meetings = [];
  Object.keys(localStorage).forEach((key) => {
    const meeting = JSON.parse(localStorage.getItem(key));
    meeting.id = key;
    meetings.push(meeting);
  });
  meetings.filter((meeting) => memb === 'all' || memb === meeting.participants)
    .forEach((meeting) => fillInCell(
      meeting.id,
      meeting.name,
      meeting.day,
      meeting.time,
      meeting.participants,
    ));
}
