

// Selecting all the required classes from HTML to change 
var body = document.body
var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var logo = document.querySelector('.logo-link')
var header = document.querySelector('.title')


//document.querySelector(".sun").innerHTML = "Sun";
//document.querySelector(".moon").innerHTML = "moon";


// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change', function(){

  //   conditions to apply when checkbox is checked

  if(this.checked == true){
    box.setAttribute('style','background-color:white;')
    ball.setAttribute('style','transform:translatex(100%);')
    body.setAttribute('style','background-image:linear-gradient(to right, #abbaab, #ffffff); color:darkgray; transition: all 1s ease;')
    logo.setAttribute('style', 'color:black; transition: 1s')
    header.setAttribute('style', 'color:black; transition: 1s')
  }

  //   conditions to apply when checkbox is unchecked

  if(this.checked == false){
    box.setAttribute('style','background-color:white; color:black;')
    ball.setAttribute('style','transform:translatex(0%);')
    body.setAttribute('style','background-image:linear-gradient(to right, #000000, #444049); color: rgb(200, 199, 204); transition: all 1s ease;') 
    logo.setAttribute('style', 'color:#e8985c; transition: 1s')
    header.setAttribute('style', 'color:white; transition: 1s')
    }
})