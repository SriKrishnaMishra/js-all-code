```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

<div class="container">


  <h1 > color changer </h1>
  <div class = "button_div">
 <div class="red"> <span class="button" id ="red"> red </span> </div> 
  <div class = "blue"> <span class="button" id ="blue"> blue </span> </div>
  <div class = "pink" > <span class="button" id ="pink"> pink  </span> </div>
 <div class="green"> <span class="button" id ="green"> green </span> </div>
</div>
  <h2> 
  that code is to change the color in the theme</h2>
</div>
  
  <script src="script.js"></script>
</body>

</html>
```
/////////// css /////


```css
html {
  height: 100%;
  width: 100%;
}

.button_div{

  flex-direction: row;
  display: flex;
}

.red {
  background-color: red;
  height: 200x;
  width: 100px;
  margin: 5px; 
  padding: 30px;
}
.blue {
  background-color: blue;
  height: 200x;
  width: 100px;
  margin: 5px;
  padding: 30px;
}
.pink {
  background-color: pink;
  height: 200x;
  width: 100px;
  margin: 05px; 
  padding: 30px;
}
.green {
  background-color: green;
  height: 200x;
  width: 100px;
    margin: 05px;  
  padding: 30px; 
} 

````
///////////// js   //////////
``` javascript 
const button = document.querySelectorAll('.button')

const body = document.querySelector("body")

button.forEach(function (button) {
console.log(button);
button.addEventListener('click',function(e) {

  console.log(e)
  console.log(e.target)
  if(e.target.id === "red") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "blue") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "pink") {
    body.style.backgroundColor = e.target.id;
  }

  if(e.target.id === "green") {
    body.style.backgroundColor = e.target.id;
  }

})
});




```