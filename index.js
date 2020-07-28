// Function - method
// Variables - properties
// If object has one or more methods - it has behaviour


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

function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}
const circle = new Circle(1)
circle.draw()
