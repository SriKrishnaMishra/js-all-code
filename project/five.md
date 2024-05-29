``` html 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h2> Krishna js playlist</h2>
    <button id = "start"> Start</button>
    <button id="stop"> stop </button>
    <script src="script.js"></script>
</body>
</html>


```

``` javascript
// generate a random color

const randomColor = function() {

    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {

color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};


let intervalId;
const startchangeingcolor = function() {

  if(!intervalId) {
     intervalId = setInterval(changeBgcolor, 1000);
  }
function changeBgcolor() {
    document.body.style.backgroundColor = randomColor(); 
}
};
const stopchangeingcolor = function() {

    clearInterval(intervalId);
     intervalId = NULL;
}

document.querySelector("#start").addEventListener 
("click", startchangeingcolor)

document.querySelector("#stop").addEventListener 
("click", stopchangeingcolor)


```