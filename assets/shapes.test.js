const {Triangle, Rectangle, Circle, Square} = require('./shapes');
 
// //check if it generates Triangle shaped svg
// describe('Traingle', () => {
//   it('should return a Triangle shape with SVG text inside', () => {
//     let bgcolor = 'green';
//     let logName = "SVG";
//     let textColor = "white";    
//     const triangle =new Triangle(logName,textColor, bgcolor);

//     let text =`<text x="150" y="130" font-size="60" font-weight="600" text-anchor="middle" fill="${textColor}">${logName}</text>`;

//     expect(triangle.generateTriangle()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${bgcolor}"/>${text}`);
//   });
// });

// //check if it generates Circle shaped svg
// describe('Circle', () => {
//   it('should return a Circle shape with SVG text inside', () => {
//     let bgcolor = 'green';
//     let logName = "SVG";
//     let textColor = "white";    
//     const circle =new Circle(logName,textColor, bgcolor);

//     let text =`<text x="150" y="130" font-size="60" font-weight="600" text-anchor="middle" fill="${textColor}">${logName}</text>`;

//     expect(circle.generateCircle()).toEqual(`<circle cx="50%" cy="50%" r ="100" height="100%" width="100%" fill="${bgcolor}"/>${text}`);
//   });
// });

//check if it generates Square shaped svg
describe('Square', () => {
  it('should return a Square shape with SVG text inside', () => {
    let bgcolor = 'green';
    let logName = "SVG";
    let textColor = "white";    
    const square =new Square(logName,textColor, bgcolor);

    let text =`<text x="150" y="130" font-size="60" font-weight="600" text-anchor="middle" fill="${textColor}">${logName}</text>`;

    expect(square.generateSquare()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="50" y="50" height="200" width="200" fill="${bgcolor}"/>"/>${text}</svg>`);
  });
});
