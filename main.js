const readline = require('readline");

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout });

let events = []

function mainMenu() {

console.log(\n=== Event Scheduler ===);

console.log(1. Add Event);

console.log(2. View Events);

console.log(3. Delete Event);

console.log(4. Exit);

ri. question("Choose an option (1-4): ", (choice) => {

switch (choice) {

case '1'

addEvent();

break;

case '2':

viewEvents();

break;

case '3':

deleteEvent():

break;

case '4"

console.log(" Exiting Event Scheduler. Goodbye!");

rl.close();

break;

default:

console.log("X Invalid choice. Try again.");

mainMenu();

}

}):

} function addEvent() {

rl.question("Enter event title:", (title) => {

rl. question("Enter event date (YYYY-MM-DD): ", (date) => {

ri. question("Enter event time (HH:MM): ", (time) => {

const datetime = new Date($(date)T$(time):00);

if (isNaN(datetime.getTime())) {

console.log("X Invalid date/time format.");

} else {

events.push({ title, datetime });

mainMenu();

});

});

function viewEvents() {

if (events.length === 0) {

console.log(" Event added successfully!"); } }); } } else { console.log("\n 17 Scheduled Events:"); events .sort((a, b) => a.datetime-b.datetime)}}

console.log(" No events scheduled.");

forEach((event, index) => {

console.log($(index + 1). $(event.title) at $(event.datetime.toLocaleString())); });

mainMenu();

function deleteEvent() {

viewEvents();

if (events.length === 0) {

mainMenu();

retum:

const index = parseInt(num) -1;

if (index >= 0 && index < events.length) {

r.question("Enter the event number to delete: ", (num) => { const removed = events.splice(index, 1)[0]; console.log(Deleted event: ${removed.title}'): } else { console.log("X Invalid event number."); }

mainMenu();

});

} // Start the app

mainMenu();

