// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties. 
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name 
// 3. However, some students have the same first name ! 
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication) 
 
// TODO: 
// - Update the data strucure and the functions to manage those new properties 
const STUDENTS_DATA = [ 
  // i added the last name and batch field 
  { firstName: "An", age: 20 }, 
  { firstName: "Bình", age: 22 }, 
  { firstName: "Cẩm", age: 21 }, 
  { firstName: "An", age: 19 }, // Duplicate first name ! 
]; 
 
/** 
 * Update 1 student age, given his/her first name 
 * @param {string} firstName - the student first name 
 * @param {age} newAge  - the student new age 
 */ 
 
function addLnameAndBatch(fname, age, lname, batch) { 
  let student = STUDENTS_DATA.find( 
    (s) => s.firstName === fname && s.age === age 
  ); 
  if (student) { 
    student.lastName = lname; 
    student.batch = batch; 
  } 
  else{ 
    console.log("Student is not found"); 
  } 
} 
 
function updateStudentAge(firstName, lastName, batch, newAge) { 
  let student = STUDENTS_DATA.find( 
    (stewie) => 
      stewie.firstName === firstName && stewie.lastName === lastName && stewie.batch === batch 
  ); 
  if (student) { 
    student.age = newAge; 
  } 
  else{ 
    console.log("Student not found"); 
  } 
} 
 
console.log("Before adding last name and batch", STUDENTS_DATA); 
addLnameAndBatch("An", 19, "Ling", 10); 
console.log("After adding last name and batch", STUDENTS_DATA); 
 
// 1 - Update An age to 30 
updateStudentAge("An", "Ling", 10, 30); 
 
// 2 - Print the updated data 
console.log(STUDENTS_DATA);