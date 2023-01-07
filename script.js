/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((cvalue) => {
    if (cvalue.profession === "developer") console.log(cvalue.name);
  });
   }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function (element) {
    if (element.profession === "developer") console.log(element.name);
  });
   }
}

function addData() {
  //Write your code here
  arr.push(function)
  {id:4,name:"susan",age:"20",profession:"intern"}
   }
}

function removeAdmin() {
  //Write your code here
  function removeAdmin() {
    //Write your code here
    let newArray = arr.filter((obj) => {
      if (element.profession === !"profession") console.log(element.name);
    });
  }
}

function concatenateArray() {
  //Write your code here
}
