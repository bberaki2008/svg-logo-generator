class Shapes{
    constructor(logoName, logoTextColor, logoBackgroundColor){
        this.logoName = logoName;
        this.logoTextColor = logoTextColor;
        this.logoBackgroundColor = logoBackgroundColor;
    }
    setText(){
        return `<text x="150" y="130" font-size="60" font-weight="600" text-anchor="middle" fill="${this.logoTextColor}">${this.logoName}</text>`
    }
}

class Circle extends Shapes{
    generateCircle() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle cx="50%" cy="50%" r ="100" height="100%" width="100%" fill="${this.logoBackgroundColor}"/>
        ${super.setText()}
        </svg>`
    }
} 

class Rectangle extends Shapes{
    generateRectangle() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="50" y="50" height="200" width="250" fill="${this.logoBackgroundColor}"/>
        ${super.setText()}
        </svg>`
    }
}

class  Triangle extends Shapes{
    generateTriangle() {
        return`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.logoBackgroundColor}"/>
        ${super.setText()}
        </svg>`
    }
}

class  Square extends Shapes{
    generateSquare() {
        return`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="50" y="50" height="200" width="200" fill="${this.logoBackgroundColor}"/>
        ${super.setText()}
        </svg>`
    }
}

module.exports = {Circle, Rectangle, Triangle, Square}