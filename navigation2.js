const searchBtn = document.getElementById("searchNavBtn")
const showFavoriteBtn = document.getElementById("showFavoriteBtn")
const showApplicationBtn = document.getElementById("showApplicationBtn")
const applicationDocumentsBtn = document.getElementById("applicationDocumentsBtn")

const searchContainer = document.querySelector(".main-section")
const showAllInserat = document.querySelector(".showAllfavorite")
const applicant = document.querySelector(".applications")
const adjustment = document.querySelector(".applicationDocuments")
let email2;

function deleteFavorite(){
  
  fetch('http://localhost:8082/favorites/delete/'+event.target.value,{
    method: 'Delete'
  })
  event.target.parentElement.remove()
}
function deleteApplication(){
  
  fetch('http://localhost:8082/applications/delete/'+event.target.value,{
    method: 'Delete'
  })
  event.target.parentElement.remove()
}

function dropDomFavorite(){
  if (document.querySelectorAll(".dbOutput") != null) {
    
    while (applicant.firstChild != null) {
      applicant.lastChild.remove()
    }
    
    
  }
}

function dropDomApplication(){
  if (document.querySelectorAll(".dbOutput") != null) {
    
    while (showAllInserat.firstChild != null) {
      showAllInserat.lastChild.remove()
    }
    
    
  }
}

if (document.getElementById("email") != null) {
  email2 = document.getElementById("email").innerText  
}
const url = new URL('http://localhost:8082/favorites/getFavoritesById/'+email2)
searchBtn.addEventListener("click", ()=>{
    //show active button
    searchBtn.style.backgroundColor = "#27ae60"
    searchBtn.style.color = "white"
    //show active button

    //set Btn to normal state
    showFavoriteBtn.style.backgroundColor = "white"
    showFavoriteBtn.style.color = "#3498db"
    showApplicationBtn.style.backgroundColor = "white"
    showApplicationBtn.style.color = "#3498db"
    applicationDocumentsBtn.style.backgroundColor = "white"
    applicationDocumentsBtn.style.color = "#3498db"
    //set Btn to normal state


    searchContainer.style.display = 'block'
    showAllInserat.style.display = 'none'
    applicant.style.display = 'none'
    adjustment.style.display = 'none'

    //delete favorite-dom
    dropDomFavorite()
    //delete application-dom
    dropDomApplication()
})

showFavoriteBtn.addEventListener("click", ()=>{
    //show active button
    showFavoriteBtn.style.backgroundColor = "#27ae60"
    showFavoriteBtn.style.color = "white"
    //show active button

    //set Btn to normal state
    searchBtn.style.backgroundColor = "white"
    searchBtn.style.color = "#3498db"
    showApplicationBtn.style.backgroundColor = "white"
    showApplicationBtn.style.color = "#3498db"
    applicationDocumentsBtn.style.backgroundColor = "white"
    applicationDocumentsBtn.style.color = "#3498db"
    //set Btn to normal state

    searchContainer.style.display = 'none'
    showAllInserat.style.display = 'block'
    applicant.style.display = 'none'
    adjustment.style.display = 'none'

    //delete application-dom
    dropDomApplication()
    

    //main-content
    fetch(url, {
        method: 'GET'
        
      })
      .then(response =>  response.json())
      .then(data => {
        
        for (let index = 0; index < data.length; index++) {
          const newDiv = document.createElement("div")
          const newH2 = document.createElement("h2")
          const newP1 = document.createElement("p")
          const newP2 = document.createElement("p")
          const newP3 = document.createElement("p")
          const newP4 = document.createElement("p")
          const newP5 = document.createElement("p")
          const newP6 = document.createElement("p")
          const newP7 = document.createElement("p")
          const newP8 = document.createElement("p")
          const button = document.createElement("button")
          
          newDiv.classList.add("dbOutput")
          newH2.classList.add("jobTitle")
          newP1.classList.add("strong")
          newP3.classList.add("strong")
          newP5.classList.add("strong")
          newP7.classList.add("strong")
          newH2.innerText = data[index]['internshipEntity']['job_title']
          newP1.innerText = "Anforderungen"
          newP2.innerText = data[index]['internshipEntity']['requirements']
          newP3.innerText = "Aufgabenbereich"
          newP4.innerText = data[index]['internshipEntity']['responsibility']
          newP5.innerText = "Benefits"
          newP6.innerText = data[index]['internshipEntity']['benefits']
          newP7.innerText = "Bezahlung"
          newP8.innerText = data[index]['internshipEntity']['salary'] + " Brutto/Monat"
          button.innerHTML = "Löschen"
          button.value = data[index]['id']
          button.setAttribute("onclick", "deleteFavorite()")
          newDiv.appendChild(newH2)
          newDiv.appendChild(newP1)
          newDiv.appendChild(newP2)
          newDiv.appendChild(newP3)
          newDiv.appendChild(newP4)
          newDiv.appendChild(newP5)
          newDiv.appendChild(newP6)
          newDiv.appendChild(newP7)
          newDiv.appendChild(newP8)
          newDiv.appendChild(button)
          showAllInserat.appendChild(newDiv)
          
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
          
      
})

showApplicationBtn.addEventListener("click", ()=>{
    //show active button
    showApplicationBtn.style.backgroundColor = "#27ae60"
    showApplicationBtn.style.color = "white"
    //show active button

    //set Btn to normal state
    searchBtn.style.backgroundColor = "white"
    searchBtn.style.color = "#3498db"
    showFavoriteBtn.style.backgroundColor = "white"
    showFavoriteBtn.style.color = "#3498db"
    applicationDocumentsBtn.style.backgroundColor = "white"
    applicationDocumentsBtn.style.color = "#3498db"
    //set Btn to normal state

    searchContainer.style.display = 'none'
    
    showAllInserat.style.display = 'none'
    applicant.style.display = 'block'
    adjustment.style.display = 'none'

    //delete favorite-dom
    dropDomFavorite()

    //main-content
    fetch('http://localhost:8082/applications/getApplicationsById/'+email2, {
      method: 'GET'
      
    })
    .then(response =>  response.json())
    .then(data => {
      
      console.log(data)
      for (let index = 0; index < data.length; index++) {
        const newDiv = document.createElement("div");
        const newH2 = document.createElement("h2");
        const newP1 = document.createElement("p");
        const newP2 = document.createElement("p")
        const newP3 = document.createElement("p")
        const newP4 = document.createElement("p")
        const newP5 = document.createElement("p")
        const newP6 = document.createElement("p")
        const newP7 = document.createElement("p")
        const newP8 = document.createElement("p")
        const button = document.createElement("button")
        

        newDiv.classList.add("dbOutput")
        newH2.classList.add("jobTitle")
        newP1.classList.add("strong")
        newP3.classList.add("strong")
        newP5.classList.add("strong")
        newP7.classList.add("strong")
        newH2.innerText = data[index]['internshipEntity']['job_title']
        newP1.innerText = "Anforderungen"
        newP2.innerText = data[index]['internshipEntity']['requirements']
        newP3.innerText = "Aufgabenbereich"
        newP4.innerText = data[index]['internshipEntity']['responsibility']
        newP5.innerText = "Benefits"
        newP6.innerText = data[index]['internshipEntity']['benefits']
        newP7.innerText = "Bezahlung"
        newP8.innerText = data[index]['internshipEntity']['salary'] + " Brutto/Monat"
        button.innerHTML = "Löschen"
        button.value = data[index]['id']
        button.setAttribute("onclick", "deleteApplication()")
        newDiv.appendChild(newH2)
        newDiv.appendChild(newP1)
        newDiv.appendChild(newP2)
        newDiv.appendChild(newP3)
        newDiv.appendChild(newP4)
        newDiv.appendChild(newP5)
        newDiv.appendChild(newP6)
        newDiv.appendChild(newP7)
        newDiv.appendChild(newP8)
        newDiv.appendChild(button)
        
        applicant.appendChild(newDiv)
        
      }
      
    })
    .catch(error => {
      console.error('Error:', error)
    });
        
    
})

applicationDocumentsBtn.addEventListener("click", ()=>{
    //show active button
    applicationDocumentsBtn.style.backgroundColor = "#27ae60"
    applicationDocumentsBtn.style.color = "white"
    //show active button

    //set Btn to normal state
    searchBtn.style.backgroundColor = "white"
    searchBtn.style.color = "#3498db"
    showFavoriteBtn.style.backgroundColor = "white"
    showFavoriteBtn.style.color = "#3498db"
    showApplicationBtn.style.backgroundColor = "white"
    showApplicationBtn.style.color = "#3498db"
    //set Btn to normal state

    searchContainer.style.display = 'none'
    
    showAllInserat.style.display = 'none'
    applicant.style.display = 'none'
    adjustment.style.display = 'block'

    //delete favorite-dom
    dropDomFavorite()

    //delete application-dom
    dropDomApplication()
})