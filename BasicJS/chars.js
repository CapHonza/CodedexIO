const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

let waldoIndex = "";

if (characters.includes("Waldo")) {
  waldoIndex = characters.indexOf("Waldo");
  console.log("Found Waldo at index " + waldoIndex);
} else {
  console.log("Not Found");
}