let cohort5 = [
    {gender: "male", firstName: "Ovie"},
    {gender: "female", firstName: "Ibk"},
    {gender: "female", firstName: "Dammy"},
    {gender: "male", firstName: "Billy"},
    {gender: "male", firstName: "British"},
    {gender: "male", firstName: "sk"}
]

cohort5.map(student => student['grade'] = 'A')
console.log(cohort5)