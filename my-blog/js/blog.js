// back button
const backButton = document.querySelector('.backButton');

backButton.addEventListener('click', function(){

document.location.href = './index.html'
});

//display posts  
const blogPage = document.querySelector(".blog");
function post(){
  
let information = localStorage.getItem("saveData");
let bloggerArray = JSON.parse(information) || [];
for (let i = 0; i < bloggerArray.length; i++) {
  const div = document.createElement("div")
  div.setAttribute('class', 'post')
  let html = `
  <h4>${bloggerArray[i].username}</h4>
  <p>${bloggerArray[i].title}</p>
  <p>${bloggerArray[i].content}</p>
  `
  div.innerHTML = html
  blogPage.appendChild(div)
}

}

post();