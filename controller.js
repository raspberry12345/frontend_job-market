

let email1 =""
if (document.getElementById("email") != null) {
    email1 = document.getElementById("email")
    
    
}

if (document.getElementById("1") != null) {
    const firstBtn = document.getElementById("1")

    firstBtn.addEventListener("click", (e)=>{
        
        
        
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchfunction(e.target.value)
        }
        
    })
}
if (document.getElementById("2") != null) {
    const secondBtn = document.getElementById("2")
    secondBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchfunction(e.target.value)
        }
    })
}
if (document.getElementById("3") != null) {
    const thirdBtn = document.getElementById("3")
    thirdBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchfunction(e.target.value)
        }
    })
}
if (document.getElementById("4") != null) {
    const fourthBtn = document.getElementById("4")
    fourthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            e.target.innerText = 'Gemerkt'
            fetchfunction(e.target.value)
        }
    })
    
}
if (document.getElementById("5") != null) {
    const fifthBtn = document.getElementById("5")
    fifthBtn.addEventListener("click", (e)=>{
        if (e.target.innerText === "Merken" ) {
            
            e.target.innerText = 'Gemerkt'
            fetchfunction(e.target.value)
        }
    })
}
//funktioniert
const fetchfunction = function(index) {
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












