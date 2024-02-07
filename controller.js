const firstBtn = document.getElementById("1")
const secondBtn = document.getElementById("2")
const thirdBtn = document.getElementById("3")
const fourthBtn = document.getElementById("4")
const fifthBtn = document.getElementById("5")

const fetchfunction = function(index) {
    fetch('http://localhost:8080/api/favorite?id='+index,{
        
    mode: 'no-cors',
        method: 'get',
        url: `http://localhost:8080`,
        credentials: 'include'
    } )
    
}



firstBtn.addEventListener("click", (e)=>{
    
    fetchfunction(e.target.value)
})

secondBtn.addEventListener("click", (e)=>{
    
    fetchfunction(e.target.value)
})

thirdBtn.addEventListener("click", (e)=>{
    
    fetchfunction(e.target.value)
})

fourthBtn.addEventListener("click", (e)=>{
    
    fetchfunction(e.target.value)
})

fifthBtn.addEventListener("click", (e)=>{
    
    fetchfunction(e.target.value)
})

