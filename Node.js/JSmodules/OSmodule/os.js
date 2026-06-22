const os = require("os");

const upTime = os.uptime();

const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;
const hours = Math.floor(upTime / 3600);
const minutes = Math.floor((upTime % 3600) / 60);
const seconds = Math.floor(upTime % 60);

const humanTime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`
console.log(`I have been awake for ${humanTime}`);

if (upTime > SECONDS_IN_A_WEEK) {
    console.log("I should take some rest and be turned off!");
} else {
    console.log("We are okay! Let´s run some code or Path of Exile!");
}