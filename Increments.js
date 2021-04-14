let div = document.getElementById("displayChange");
let btn = document.getElementById("increment");
let Zero = 0;
 
 function performIncrement(){     
    div.innerHTML = Zero;
    Zero += 1
   
 }

let button = document.getElementById("decrement");

 function performDecrement(){
    div.innerHTML = Zero;
    Zero -= 1;
}