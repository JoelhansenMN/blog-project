const form = document.querySelector('.form');
const user = document.querySelector('input[id="username"]');
const title = document.querySelector('input[id="title"]');
const content = document.querySelector('textarea[id="content"]');

//for redirections
//document.location.href = './blog.html'

let information = localStorage.getItem("saveData");
let bloggerArray = JSON.parse(information) || [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let formContent = {
    username: user.value,
    title: title.value,
    content: content.value.trim(),
  }
  bloggerArray.push(formContent);
  localStorage.setItem('saveData', JSON.stringify(bloggerArray));
  console.log('Yay!');

  document.location.href = './blog.html';
});