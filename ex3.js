document.addEventListener("DOMContentLoaded" , () =>{//function = () =>//نفس الشيء
    // document.querySelectorAll("button").forEach((button) =>{
    //    button.onclick = () =>{
    //       document.querySelector("h1").style.color = button.dataset.color;//اسم بالتاج نفس
    //    }
    
    // })
    // document.querySelector("select").onchange =  function(){
    //    document.querySelector("h1").style.color = this.value;

    // };
    // document.querySelector("form").onsubmit = function(){
    //    var menu = document.querySelector("#tasks");
    //    menu.innerHTML += "<li>obada</li>";
    // }
   
    document.querySelector("form").onsubmit = function(){
       var task = document.querySelector("#task");

       
       var li = document.createElement("li");
       
       li.innerHTML = task.value;
       
       var list = document.querySelector("#tasks");
       
       list.append(li);

       return false;
     
    }
  
 
});