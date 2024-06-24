// QUESTION # 45
// Write a functions about a car
function CarInfo(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Store additional options in the car object
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with repuired information and additional options
let myCar = CarInfo('Toyota', 'civic', { colour: 'Black', year: '2023' });
console.log("returned object");
console.log(myCar);
console.log("\n \t \t Alhamdullilah I have done my 45 questions of Assignment.");
export {};
