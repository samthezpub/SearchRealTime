Array.prototype.contains = function(v) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === v) return true;
    }
    return false;
  };
  
  Array.prototype.unique = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (!arr.contains(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  }



const COUNTRIES = ["Украина", "Россия", "Африка", "Швейцария", "Казахстан", "Китай", "Швеция", "Греция", "Румыния"];

var input = document.getElementById("country");
var symbArray = [];
function SliceArray() {
    for (let i = 0; i < COUNTRIES.length; i++) {
        let miniArray = [];
        for (let j = 0; j < COUNTRIES[i].length; j++) {
            miniArray.push(COUNTRIES[i][j].toLocaleLowerCase());
        }
        symbArray.push(miniArray);
    }
    console.log(symbArray);
    symbArray = symbArray.unique();
    console.log(symbArray);
    return symbArray;
}

// function CheckArrays(symbArray) {
//     for (let i = 0; i < symbArray.length; i++) {
//         if (condition) {
            
//         }
        
//     }
// }

function DisplayArray() {
    var countriesContainer = document.querySelector("#countriesContainer");
    countriesContainer.textContent = "";
        
    for (let i = 0; i < COUNTRIES.length; i++) {
        
        let p = document.createElement("p");
        p.textContent =  COUNTRIES[i];
        countriesContainer.appendChild(p);
    }
    
}

function Change(inputVal) {
    console.log(inputVal);
    DisplayArray();
    SliceArray();
}
