let cohort5 = [
    {gender: "male", firstName: "Ovie"},
    {gender: "female", firstName: "Ibk"},
    {gender: "female", firstName: "Dammy"},
    {gender: "male", firstName: "Billy"},
    {gender: "male", firstName: "British"},
    {gender: "male", firstName: "sk"}
]

let maleStudents = cohort5.filter(student => student.gender === "male")

maleStudents.forEach(student => console.log(student.firstName))