const form = document.getElementById("form")


let email
if (document.getElementById("email") != null) {
  email = document.getElementById("email")
}



form.addEventListener("submit", (e)=>{
    e.preventDefault()
       


    
    
    
    console.log()
    const formData = new FormData(form)
    const url = 'http://localhost:8080/internships/create';
    
    formData.append("employer_email", email.innerText)
    formData.append("id", "")
    formData.append("created_at", "")
    //funktioniert
fetch(url, {
  method: 'POST',
  headers: {      "Content-Type": "application/json",      // 'Content-Type': 'application/x-www-form-urlencoded',  
  },
  
  body: JSON.stringify(Object.fromEntries(formData))
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})

.catch(error => {
  console.error('Error:', error);
});
    
})