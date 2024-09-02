console.log("This is to do list app");

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(listContainer);

// const btn = document.getElementsByClassName("btn");
const myTask  =  document.getElementById("myTask")


function addTask(){
   if (inputBox.value === ""){
     return alert("You must write something!!");
   }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    myTask.appendChild(li);

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span);
   }
   inputBox.value="";
   saveData()
}
  

console.log(listContainer);

listContainer.addEventListener("click" , function(e){
      console.log(e.target);
      
      if(e.target.tagName === "LI"){
         e.target.classList.toggle("checked");
         console.log(e.target);
         
         saveData();
      }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
      }
   });

function saveData() {
   localStorage.setItem("Data" , myTask.innerHTML);
}
function showData(){
   myTask.innerHTML = localStorage.getItem("Data");
}

showData();