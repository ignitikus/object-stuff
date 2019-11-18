function getFirstName(person) {
  return person.firstName
}

function getLastName(person) {
  return person.lastName
}

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`
}

function setFirstName(person, name) {
  return person.firstName = name
}

function setAge(person, age) {
  return person.age = age
}

function giveBirthday(person) {
  if(person.age === undefined){
    return person.age = 1
  }
  return person.age += 1
}

function marry(person1, person2) {
  person1.married = true;
  person1.spouseName = getFullName(person2);
  person2.married = true
  person2.spouseName = getFullName(person1);
  
}

function divorce(person1, person2) {
  person1.married = false;
  delete person1.spouseName;
  person2.married = false;
  delete person2.spouseName;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} 