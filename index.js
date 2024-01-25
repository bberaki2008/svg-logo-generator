const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Rectangle, Circle, Square} = require('./assets/shapes');

//write validation or comment
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What are the three text characters for your logo?',
      name: 'logoName',
    },
    {
      type: 'input',
      message: 'What color do you like for your logo text?',
      name: 'logoTextColor',
    },
    {
      type: 'input',
      message: 'What background color do you like for your logo?',
      name: 'logoBackgroundColor',
    },
    {
      type: 'list',
      message: 'What shape do you like for your logo',
      name: 'logoShape',
      choices: ["Circle", "Triangle", "Square"]
    },

  ])
  .then((response) => {
    switch (`${response.logoShape}`){
      case 'Square':
        const square =new Square(response.logoName, response.logoTextColor, response.logoBackgroundColor)
        fs.writeFile("logo.svg", square.generateSquare(), (err)=>{
          if (err){ console.error(err)}
        });
        break;
      case 'Circle':
        const circle =new Circle(response.logoName, response.logoTextColor, response.logoBackgroundColor)
        fs.writeFile("logo.svg", circle.generateCircle(), (err)=>{
          if (err){ console.error(err)}
        });
        break;
      case 'Triangle':
        const  triangle= new Triangle(response.logoName, response.logoTextColor, response.logoBackgroundColor)
        fs.writeFile("logo.svg", triangle.generateTriangle(), (err)=>{
          if (err){ console.error(err)}
        });
        break;
    }
  }); 

