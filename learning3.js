

// let anobject = { age:30, firstName: "Ovie" }

// const{ age, name } = anobject
// console.log(age)

let anObject = {
    person: { age: 30 },
    firstName: "Ovie"

}

const{ person } = anObject
const { age } = person

console.log(person)
console.log(age)