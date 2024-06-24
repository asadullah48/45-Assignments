"use strict";
// Task # 17
let guestList = ["Mahira", "Rehana", "Erum"];
console.log("Great News! we have found a bigger table for more guests.\n\n");
guestList.unshift("Imran");
guestList.splice(2, 0, "Samreen");
guestList.push("Fatima");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! I would like to invite you for dinner on Monday. \n\n`);
}
console.log("Sorry we can't arrange a bigger table so only two guests are invited for dinner.\n\n");
while (guestList.length > 2) {
    let removeGuests = guestList.pop();
    console.log(removeGuests, "\n Sorry you are not invited to dinner");
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! You are still invited to dinner. \n\n`);
}
guestList.splice(0, 2);
console.log(guestList);
