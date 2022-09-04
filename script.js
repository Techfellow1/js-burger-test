// events

document.getElementById('buttonclick').addEventListener('click', function () {
  document.body.classList.toggle('bodyClass');
});

document.getElementById('buttonclick').addEventListener ('mouseover', function(){
    buttonclick.style.background = 'red';
});

document.getElementById('buttonclick').addEventListener ('mouseout', function(){
    buttonclick.style.background = 'yellow';
});


document.getElementById('username').addEventListener('focus', function(){
     username.style.border = '2px solid red';
})

document.getElementById('username').addEventListener('keydown', function(){
     console.log('Hello2');
})

// burger bar

let toggleButton = document.getElementById('burger');
let navigation = document.getElementById('nav');

toggleButton.addEventListener('click', function () {
      navigation.classList.add('active');
}) 