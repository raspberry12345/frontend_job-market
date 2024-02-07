


if (document.getElementById("email") != null) {
    const email = document.getElementById("email")
    
}
if (document.getElementById("1") != null) {
    const firstBtn = document.getElementById("1")

    firstBtn.addEventListener("click", (e)=>{
    
        fetchfunction(e.target.value)
    })
}
if (document.getElementById("2") != null) {
    const secondBtn = document.getElementById("2")
    secondBtn.addEventListener("click", (e)=>{
    
        fetchfunction(e.target.value)
    })
}
if (document.getElementById("3") != null) {
    const thirdBtn = document.getElementById("3")
    thirdBtn.addEventListener("click", (e)=>{
    
        fetchfunction(e.target.value)
    })
}
if (document.getElementById("4") != null) {
    const fourthBtn = document.getElementById("4")
    fourthBtn.addEventListener("click", (e)=>{
    
        fetchfunction(e.target.value)
    })
    
}
if (document.getElementById("5") != null) {
    const fifthBtn = document.getElementById("5")
    fifthBtn.addEventListener("click", (e)=>{
    
        fetchfunction(e.target.value)
    })
}

const fetchfunction = function(index) {
    fetch('http://localhost:8080/api/favorite?id='+index+"&email="+email.innerText.replace(" ", ""),{
        
        mode:'no-cors',
        method: 'get',
        url: `http://localhost:8080`,
        credentials: 'include'
    } )
    
}












