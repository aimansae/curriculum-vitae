//functions

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(){
    return baseSalary + (overtime*rate)
}

console.log(getWage())

//OOP

let employee = {
    baseSalary:20.000,
    overtime : 10,
    rate : 30,
    getWage: function(){
        return this.baseSalary + (this.overtime*this.rate)
    }
    };

console.log(employee.getWage());    


//Object is collection of key, value paird
//objects Literals is {};: >> 
//create a variable with let always
// if object member is a function it is a >> method>>
// if other member it is a >> property used to hold values>>

let circle = {
    radius: 1, // radius= property
    location:{ //location= property
        x:1,
        y:1

    },
    draw: function(){ //draw = method
        console.log('draw'); 
    }

}; 


//to access members use . notaion
circle.draw();

//to create another circle object if there are method is not good to duplicate

//use Factories

function createCircle(radius){
    return {
        radius: radius, //or just radious
        design: function(){
            console.log('design')
        }


};

}

const newCircle = createCircle(1)
newCircle.design();

//Constructor Fucntion first letter uppercase

function Circle(radius){
    this.radius = radius;
    this.design = function(){
        console.log('design')
    }

}
//new creates an empty object
const another = new Circle(1);


