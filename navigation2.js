const searchBtn = document.getElementById("searchNavBtn")
const showFavoriteBtn = document.getElementById("showFavoriteBtn")
const showApplicationBtn = document.getElementById("showApplicationBtn")
const applicationDocumentsBtn = document.getElementById("applicationDocumentsBtn")

const searchContainer = document.querySelector(".main-section")
const showAllInserat = document.querySelector(".showAllfavorite")
const applicant = document.querySelector(".applications")
const adjustment = document.querySelector(".applicationDocuments")
const url = new URL('http://localhost:8080/api/favorite')
if (document.getElementById("email") != null) {
  let email = document.getElementById("email").innerText
  email = email.replace(" ", "")
  url.searchParams.append('email', email )
}

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

    //main-content
    fetch(url, {
        method: 'GET'
        
      })
      .then(response =>  response.text())
      .then(data => {
        console.log(data);
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
})