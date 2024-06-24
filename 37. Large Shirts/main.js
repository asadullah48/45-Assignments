"use strict";
// Task # 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = `large`, text = `I love typescript`) {
    console.log(`creating a ${size} shirt with the message ${text}`);
}
make_shirt(); // Default large and message
make_shirt(`medium`); // Default message and medium size
make_shirt(`Small`, `Dive into Coding`); // Custom message small size
