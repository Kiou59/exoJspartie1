// // exo 1

 console.log('_Hello Word_');

// // exo 2
 document.body.innerHTML+='Hello Word'

// // exo3
//creation d'une bailse avecJS
 const HelloWordh1=document.createElement('h1');
 document.body.appendChild(HelloWordh1);
 HelloWordh1.innerHTML=''
 console.log(HelloWordh1.Text)


// exo 4
//injecter des donné dans une balise existante
const grettingContent = document.querySelector("#gretting");
grettingContent.innerHTML='hello word';
console.log(grettingContent)

//exo 5

var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];
var reverseStudents=students.reverse()
var nbrStudents = students.length

for(let i=0;i<1;i++){
    console.log(students[i])
}
students.forEach(student => {
    console.log(student)
});

//exo 6
let listOfStudents = document.querySelector('#studentsList');


students.forEach(student => {
    studentName = document.createElement('li');
    // studentName.id=student
    studentName.innerHTML=student
    listOfStudents.appendChild(studentName)
    
    
    
});

//exo7
function loadStyle(event){
    event.target.className = "dynamicStyle";

}
document.querySelector("main").addEventListener("click", loadStyle)

//ex 8

function calc(event){
    
    document.querySelector('#result').innerHTML=parseInt(document.querySelector('#first').value) +parseInt (document.querySelector('#second').value)
}
document.querySelector('#add').addEventListener('click',calc)

let values=[]
let valueconc=0

function adition(event){
   
    valueconc=0
    values.push(parseInt(document.querySelector('#valeur').value))
    document.querySelector('#valueLenght').innerHTML=values.length
    values.forEach(function(value){
        valueconc+=value
    })
    valueMoy= valueconc/values.length
    document.querySelector('#moyenne').innerHTML=valueMoy
    console.log(valueconc)

}
document.querySelector('#ajout').addEventListener('click',adition)

// exo 9
exo9Grid=document.querySelector('#exo9')
document.querySelector('#generate').addEventListener('click',function(event){
    let template = document.querySelector('#template').value

for(let r=0;r<template;r++){
row=document.createElement('div')
row.id='r'
row.className='row'
exo9Grid.appendChild(row)
    for(let c=0;c<template;c++){
        console.log(c)
        col=document.createElement('div')
        col.id='c'
        col.className='col'
        if(r%2===0 && c%2===0){
            col.style.backgroundColor="white"
            row.appendChild(col)
        }else if(r%2===0 && c%2!= 0){
            col.style.backgroundColor="black" 
            row.appendChild(col)
        }else if(r%2!=0 && c%2!= 0){
            col.style.backgroundColor="white" 
            row.appendChild(col)
    }else  if(r%2!=0 && c%2===0){
        col.style.backgroundColor="black"
        row.appendChild(col)}
}}
})

// exo 10

let listOfStudentsReverse = document.querySelector('#reverse');
document.querySelector('#len').innerHTML="Nombre d'apprenants  "+nbrStudents


reverseStudents.forEach(student => {
    studentName = document.createElement('li');
    // studentName.id=student
    studentName.innerHTML=student
    listOfStudentsReverse.appendChild(studentName)
    
    
    
});