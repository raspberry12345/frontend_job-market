const form = document.getElementById("form")

const branche = document.getElementById("branche")
const berufsbezeichnung = document.getElementById("berufsbezeichnung")
const bezirk = document.getElementById("bezirk")
const anforderungen = document.getElementById("anforderungen")
const aufgabenbereich = document.getElementById("aufgabenbereich")
const benefits = document.getElementById("benefits")
const bezahlung = document.getElementById("bezahlung")




if (document.getElementById("email") != null) {
  const email = document.getElementById("email")
}



form.addEventListener("submit", (e)=>{
    e.preventDefault()
       


    
    
    
    console.log()
    const formData = new FormData(form)
    const url = 'http://localhost:8080/api/praktikum';
    
    formData.append("email", email.innerText)
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
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});
    
})