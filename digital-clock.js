//////////////////////////////////////////////////////////////////// html   ///////////////////////////////////

  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="digital-box">

    <div id ="banner"> <span> Your local time </span> </span> </div>
    <div id="clock"> </div>
  </div>

  
  <script src="script.js"></script>
</body>

</html>




///////////////////////////////////////////////////////////////////////////////////////////// css ////////////////////////////////////////////

html {
  height: 100%;
  width: 100%;
}
body {

  text-align:center;
  margin:150px;
  padding:20px;
}

.digital-box {

  height: 60px;
  width:120px;
  background-color: #c8ff00;
  padding:20px;
  border-radius:10px;
  margin:2px;

}
/////////////////////////////////////////// js /////////////////////////////////////////////////////

document.getElementById('clock') // both are same

// document.querySelector("#clock") // both are same


setInterval(function () {
  let data = new Date();
  clock.innerHTML = data.toLocaleTimeString();
}, 1000);
