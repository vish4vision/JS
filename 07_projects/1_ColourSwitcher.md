# Colour Switcher

### HTML File

```html 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="beige"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>


```

## CSS File

``` css

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#beige {
  background: beige;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}

```

## Javascript File

### using if syntax

``` javascript 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) =>{
  // console.log(button);
  button.addEventListener('click',function (e) {
    // console.log(e);
    // console.log(e.target.id);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'beige'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id 
    }

  });
});

```


### using switch syntax

``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target.id)
    const color = e.target.id;

    // Using switch case :

    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'beige':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});

```

### using if-else syntax

```javascript 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target.id)
    const color = e.target.id;

    // using if-else statements

    if(color === 'grey'){
      body.style.backgroundColor = color
    }
    else if(color === 'beige'){
      body.style.backgroundColor = color
    }
    else if(color === 'blue'){
      body.style.backgroundColor = color
    }
    else if(color === 'yellow'){
      body.style.backgroundColor = color
    }
    else{
      body.style.backgroundColor = white
    }


  });
});



```