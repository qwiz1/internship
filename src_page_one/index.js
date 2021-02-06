import { addEventToEmptyZone, addEventsOnFullCells } from './dragAndDrop';
import showMeetings from './showMeetings';

const sort = document.getElementById('sort');

addEventToEmptyZone();

sort.addEventListener('change', () => {
  showMeetings(sort.value);
  addEventsOnFullCells();
  addEventToEmptyZone();
});
showMeetings(sort.value);

addEventsOnFullCells();
