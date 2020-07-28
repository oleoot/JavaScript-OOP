// Function - method
// Variables - properties
// If object has one or more methods - it has behaviour
// Value types - primitives (Number, String, Boolean, Symbol, undefinde, null)
// Reference types - objects (object, function, array)
// Primitives are copied by their value
// Reference types are copied by their reference(относяться к одному месту в памяти)







// Object literals =============================================
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log("Draw")
//     }
// }
// circle.draw()

// Factory function ===================================================

// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw: function () {
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)
// circle.draw()


// Constructor function ===================================================

// function Circle(radius) {
//     this.radius = radius
//     this.draw = function () {
//         console.log('draw')
//     }
// }
// const circle = new Circle(1)
// circle.draw()




//Primitives ====================================================================================

// let x = 10;
// let y = x;

// x = 20

// console.log(x, y)

// Reference type =================================================================================

// let x = {
//     value: 10
// }
// let y = x

// x.value = 20

// console.log(x, y)



//Primitives ====================================================================================

// let number = 10

// function increase(number) {
//     number++;
// }

// increase(number)

// console.log(number)


// Reference type =================================================================================

// let obj = {
//     value: 10
// }

// function increase(obj) {
//     obj.value++;
// }

// increase(obj)

// console.log(obj)
