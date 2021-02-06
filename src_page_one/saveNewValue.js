export function setNewDayAndTime(key, newDay, newTime) {
    let meetingInfo = JSON.parse(localStorage.getItem(key));
    meetingInfo.day = newDay;
    meetingInfo.time = newTime;
    localStorage.setItem(key, JSON.stringify(meetingInfo));
}