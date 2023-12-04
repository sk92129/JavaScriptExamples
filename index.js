


let person = {
    firstName:  'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-45-6789'
}

let job = {
    jobTitle : 'JavaScript Developer',
    location: 'USA'
}

let employee = {
    ...person,
    ...job
}

console.log(employee);


