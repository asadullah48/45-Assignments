// Task # 16
let guestList = ["Mahira", "Rehana", "Erum"];
console.log("Great News! we have found a bigger table for more guests.\n\n");
guestList.unshift("Imran");
guestList.splice(2, 0, "Samreen");
guestList.push("Fatima");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! I would like to invite you for dinner on Monday. \n\n`);
}
export {};
