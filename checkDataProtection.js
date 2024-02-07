const form = document.getElementById("form")

const checkbox = document.getElementById("checkbox")

const email = document.querySelector(".email")
const warning = document.getElementById("warning")





form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (email.value.trim().length === 0|| email.value == null) {
        warning.innerText = "Bitte geben Sie ihre Emailadresse ein!"
    
    }else{
        if (checkbox.checked) {
            
            
            const formData = new FormData(form)
            fetch("createMember.php",{
                method: "post",
                
                body: formData
            }).then(function(response) {
                
                return response.status
            }).then(function (txt) {
                warning.innerText = " "
                if(txt === 200){
                    window.location.replace("dsgvo.html")
                }
                
               
            })
            
        }else{
            warning.innerText = "Datenverarbeitung zustimmen"
            
        }
    }
    
})