const searchBtn = document.getElementById("searchNavBtn")
const showFavoriteBtn = document.getElementById("showFavoriteBtn")
const showApplicationBtn = document.getElementById("showApplicationBtn")
const applicationDocuments = document.getElementById("applicationDocuments")

const searchContainer = document.querySelector(".main-section")
const showAllInserat = document.querySelector(".showAllInserat")
const applicant = document.querySelector(".applicant")
const adjustment = document.querySelector(".adjustment")

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
    applicationDocuments.style.backgroundColor = "white"
    applicationDocuments.style.color = "#3498db"
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
    applicationDocuments.style.backgroundColor = "white"
    applicationDocuments.style.color = "#3498db"
    //set Btn to normal state

    searchContainer.style.display = 'none'
    showAllInserat.style.display = 'block'
    applicant.style.display = 'none'
    adjustment.style.display = 'none'

    //main-content
    fetch('http://localhost:8082/favorites/getFavoritesById'+"?email="+email, {
        method: 'GET',
        
      })
      .then(response =>  response.json())
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
    applicationDocuments.style.backgroundColor = "white"
    applicationDocuments.style.color = "#3498db"
    //set Btn to normal state

    searchContainer.style.display = 'none'
    
    showAllInserat.style.display = 'none'
    applicant.style.display = 'block'
    adjustment.style.display = 'none'
})

applicationDocuments.addEventListener("click", ()=>{
    //show active button
    applicationDocuments.style.backgroundColor = "#27ae60"
    applicationDocuments.style.color = "white"
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