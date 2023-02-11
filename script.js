/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
 
    //print student with marks over 50
    arr.map(obj => {
        if(obj.marks > 50){
          console.log(obj);
        }
      });
}

function PrintStudentsbyForEach() {
   //print student with marks over 50
      arr.forEach(element => {
        if(element.marks > 50){
          console.log(element);
        }
      });
}

function addData() {
  // add student
     const obj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(obj);
    console.log(arr);
}

function removeFailedStudent() {
   //remove student whose marks is less than 50
    for(let i = 0; i <= arr.length; i++){
        if(arr[i].marks <= 50){
          arr.splice(i, i + 1);
        }
      }
      console.log(arr);
}

function concatenateArray() {
  // concatenate another array having info of three students
    let ids = arr.length;
    let arr1 = [
      { id: ids + 1, name: "Sia", age: "19", marks: 60 },
      { id: ids + 2, name: "Jai", age: "18", marks: 56 },
      { id: ids + 3, name: "Vaani", age: "23", marks: 95 },
    ];
    let array = arr.concat(arr1);
    console.log(array);
  
}
