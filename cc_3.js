// Task 1: Product Price Management
let prices = [100, 150, 200, 250, 300];  // Declare prices array
prices.push(350);  // Add a new price
prices.shift();  // Remove the first price
console.log("Updated Prices:", prices);  // Log updated prices

//Task 2
let orders = [2,3,1,4,8]
orders[2] += 5
let order_len = orders.length
console.log(orders, order_len)

//Task 3
let employee = {
    name:"John", 
    role:"System administrator", 
    performanceScore:10, 
    isActive:true,
}
employee.performanceScore = 7
Object.defineProperty(employee, "promotionEligible", {value:true})
console.log(employee)