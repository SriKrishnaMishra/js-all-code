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
 
  
 <h1> Hello BMI Calculator</h1>
  <div class = "container">

    <form>
    <p> <label> Height in CM: </label><input type="text" id="height"/> </p>
     <p> <label> weight in KG: </label><input type="text" id="weight"/> </p>

    <button>
      Calculate
    </button>
    <div id ="result"> </div>
    <div id="weight-guide">

    <h3 >BMI weight-guide</h3>
  <p> under weight = Less than 18.5</p>
    <p> Normal weight = 18.5 than 24.5</p>
    <p> Over weight = 24.5 than 39.5</p>
       </div>
      </form>
  </div>
  <script src="script.js"></script>
</body>

</html>

/////////// csss /////

``` css

html {
  height: 100%;
  width: 100%;
}

body {

  background-color:#a6adc9;
}

button {
 text-align:center;
}

``` 


//////// js //////
``` js 
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {

  e.preventDefault();


const height = parseInt(document.querySelector('#height').value)

const weight = parseInt(document.querySelector('#weight').value)
  
  const result =document.querySelector('#result')


if(height === '' || height < 0 || isNaN(height)) {

  result.innerHTML = `please give a valid height ${height}`;

}
else if( weight === '' || weight < 0 || isNaN(weight)) {

    result.innerHTML = `please give a valid weight ${weight}`;

  }
else {

 const bmi= (weight / ((height * height) / 10000)).toFixed(2);

result.innerHTML = `<span> ${bmi} </span>`;
}

});

``` 