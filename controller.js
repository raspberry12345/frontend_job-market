

let email1 =""
if (document.getElementById("email") != null) {
    email1 = document.getElementById("email")
    
    
}
// merken-btn
if (document.getElementById("1") != null) {
    const firstBtn = document.getElementById("1")
    
    firstBtn.addEventListener("click", (e)=>{
        
        
        
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchFavoriteFunction(e.target.value)
        }
        
    })
}
if (document.getElementById("2") != null) {
    const secondBtn = document.getElementById("2")
    secondBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchFavoriteFunction(e.target.value)
        }
    })
}
if (document.getElementById("3") != null) {
    const thirdBtn = document.getElementById("3")
    thirdBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchFavoriteFunction(e.target.value)
        }
    })
}
if (document.getElementById("4") != null) {
    const fourthBtn = document.getElementById("4")
    fourthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchFavoriteFunction(e.target.value)
        }
    })
    
}
if (document.getElementById("5") != null) {
    const fifthBtn = document.getElementById("5")
    fifthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            
            e.target.innerText = 'Gemerkt'
            fetchFavoriteFunction(e.target.value)
        }
    })
}
// bewerben-btn
if (document.querySelector(".a1") != null) {
    const firstBtn = document.querySelector(".a1")
    
    firstBtn.addEventListener("click", (e)=>{
        
        
        
        if (e.target.innerText === "Bewerben" ) {
            e.target.innerText = 'Beworben'
            fetchApplicationFunction(e.target.value)
        }
        
    })
}
if (document.querySelector(".a2") != null) {
    const secondBtn = document.querySelector(".a2")
    secondBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Bewerben" ) {
            console.log("hallo")
            e.target.innerText = 'Beworben'
            fetchApplicationFunction(e.target.value)
        }
    })
}
if (document.querySelector(".a3") != null) {
    const thirdBtn = document.querySelector(".a3")
    thirdBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Bewerben" ) {
            e.target.innerText = 'Beworben'
            fetchApplicationFunction(e.target.value)
        }
    })
}
if (document.querySelector(".a4") != null) {
    const fourthBtn = document.querySelector(".a4")
    fourthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Bewerben" ) {
            e.target.innerText = 'Beworben'
            fetchApplicationFunction(e.target.value)
        }
    })
    
}
if (document.querySelector(".a5") != null) {
    const fifthBtn = document.querySelector(".a5")
    fifthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Bewerben" ) {
            
            e.target.innerText = 'Beworben'
            fetchApplicationFunction(e.target.value)
        }
    })
}
//funktioniert
const fetchFavoriteFunction = function(index) {
   const requestData = {
    id: "",
    employee_email: email1.innerText,
    internship_id: index
}; 
   fetch('http://localhost:8082/favorites/create',{
         
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
       
    } )
    
}

const fetchApplicationFunction = function(index) {
    const requestData = {
     id: "",
     cv: "",
     application: "",

     employee_email: email1.innerText,
     internship_id: index,
     created_at: ""
 }; 
    fetch('http://localhost:8082/applications/create',{
          
         method: 'POST',
         headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(requestData),
        
     } )
     
 }












