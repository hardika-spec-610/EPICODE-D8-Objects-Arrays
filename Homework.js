/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("EXERCISE 1 \n")
let positiveNum = [1, 2, 3, 4, 5]
console.log("first 5 positivenumber: ", positiveNum);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("EXERCISE 2 \n")
let personalInfo = { name: "Hardika", surname: "Moradiya", email: "hardika.moradiya@gmail.com", age: 26 };
console.log("personal information", personalInfo)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("EXERCISE 3 \n")
personalInfo.drivingLicense = false;
console.log("add the deiving license property", personalInfo)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("EXERCISE 4 \n")
delete personalInfo.age;
console.log("remove the age property", personalInfo)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("EXERCISE 5 \n")
let personalInfo2 = { name: "Nikunj", surname: "Dobariya", email: "nikunj.dobariya@gmail.com" };
if (personalInfo.email === personalInfo2.email) {
    console.log("The email address is same");
}
else {
    console.log("The email address is not same");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("EXERCISE 6 \n")
let totalShoppingCart = 70;
if (totalShoppingCart > 50) {
    console.log("You are eligible for free shipping");
}
else {
    console.log("You have to pay shipping cost 10.")
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("EXERCISE 7 \n")
let discountAmount = totalShoppingCart - (totalShoppingCart * (20 / 100));
if (discountAmount > 50) {
    console.log("You are eligible for free shipping");
}
else {
    console.log("You have to pay shipping cost 10.")
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("EXERCISE 8 \n")
let car1 = { brand: "Skoda rapid", model: "1.2 TSI", licensePlate: "HN BL 2912" };
console.log("car1: ", car1)

let car2 = {};
car2 = Object.assign(car2, car1);
car2.brand = "Audi"
car2.licensePlate = "AB CD 1234"
console.log("car2: ", car2)

let car3 = {};
car3 = Object.assign(car3, car1);
car3.brand = "BMW"
car3.licensePlate = "EF GH 1234"
console.log("car3: ", car3)

let car4 = {};
car4 = Object.assign(car4, car1);
car4.brand = "VW"
car4.licensePlate = "IJ GH 1234"
console.log("car4: ", car4)

let car5 = {};
car5 = Object.assign(car5, car1);
car5.brand = "Mercedes"
car5.licensePlate = "KL GH 1234"
console.log("car5: ", car5)

let car6 = {};
car6 = Object.assign(car6, car1);
car6.brand = "Fiat"
car6.licensePlate = "MN GH 1234"
console.log("car6: ", car6)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("EXERCISE 9 \n")
let carsForRent = [car1, car2, car3, car4, car5, car6];
console.log("car's array", carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("EXERCISE 10 \n")
carsForRent.splice(0, 1);
console.log("remove the first element ", carsForRent)
carsForRent.pop();
console.log("remove the last element ", carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("EXERCISE 11 \n")
console.log("type of the car variable", typeof car1)
console.log("type of the car variable", typeof car1.licensePlate)
console.log("type of the car variable", typeof car1.brand)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("EXERCISE 12 \n")
let carsForSale = [];
carsForSale[0] = car1;
carsForSale[1] = car2;
carsForSale[2] = car3;
console.log("insert the car in empty array:", carsForSale)

let totalCars = carsForSale.length + carsForRent.length;
console.log(carsForSale.length)
console.log(carsForRent.length)
console.log("total number of cars present in stock:", totalCars)


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("EXERCISE 13 \n")
for (let i = 0; i < carsForSale.length; i++) {
    let allData = carsForSale[i];
    console.log(allData);
}
