var numbers = [34,243,43,5,656]

// for(var i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }

max  = numbers[0];

for(var i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max= numbers[i];
    }
}

console.log(max)

var car1 = {
    brand:"Mercedes",
    model:"E200",
    year:2015,
    price:35000
}

var car2={
    brand:"BMW",
    model:"X6",
    year:2014,
    price:2500
}

var cars = [car1,car2,{brand:"Mercedes",model:"S500",year:2011,price:33000}]

for(var i=0;i<cars.length;i++){
    console.log(cars[i].brand+"-"+cars[i].model)
}

var maxPrice=cars[0].price;
for(var i=0;i<cars.length;i++){
    if(cars[i].price>maxPrice){
        maxPrice=cars[i].price;
    }
}

console.log("max price: "+maxPrice)



var std1 = {
    fullname:"Hikmet Abbasov",
    age:17,
    point:67,
    groupNo:"P123"
}

var std2={
    fullname:"Tofiq Qulamov",
    age:30,
    point:77,
    groupNo:"P121"
}

var std3={
    fullname:"Nermin Abbasova",
    age:27,
    point:87,
    groupNo:"P123"
}

var std4={
    fullname:"Memmed Memmedov",
    age:33,
    point:97,
    groupNo:"P123"
}

var students = [
    std1,
    std2,
    std3,
    std4
]

for(var i=0;i<students.length;i++){
    if(students[i].groupNo=="P123"){
        console.log(students[i].fullname+" - "+students[i].point)
    }
}

var names = ["Hikmet","Abbas","Nermin"]

var points=[45,10,56]

var maxPoint=students[0];
for(var i=0;i<students.length;i++){
    if(students[i].point>maxPoint){
        maxPoint= students[i].point
    }
}




