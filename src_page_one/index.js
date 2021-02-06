import {addEventToEmptyZone, addEventsOnFullCells} from './dragAndDrop.js'
import {showMeetings} from './showMeetings.js'

const sort = document.getElementById('sort');

addEventToEmptyZone();

sort.addEventListener('change', () => {
    showMeetings(sort.value);
});

showMeetings(sort.value);

addEventsOnFullCells();


