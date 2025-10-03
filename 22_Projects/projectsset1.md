# Project related to DOM

## Project Link
[Click here] (http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Khushbu")

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = 'red';
    // }
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id;
    // }
    const color=e.target.id;
    switch(color){
      case 'grey': body.style.backgroundColor = 'grey';
      break;

      case 'white': body.style.backgroundColor = 'red';
      break;

      case 'blue': body.style.backgroundColor = 'blue';
      break;

      case 'yellow': body.style.backgroundColor = 'yellow';
      break;
    }
  });
});

```


## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  let BMI;
  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    BMI=(weight / ((height * height)/10000)).toFixed(2);
    //show the result
    results.innerHTML=`<span>${BMI}</span>`;
  }

  if(BMI){
  switch(true){
    case (BMI < 18.6):
    console.log("Underweight");
    results.innerHTML+=`<br>category:UnderWeight`;
    break;

    case (BMI >= 18.6 && BMI <=24.9):
    console.log("Normal Weight");
    results.innerHTML+=`<br>category:NormalWeight`;
    break;

    case (BMI >24.9):
    console.log("Over Weight");
    results.innerHTML+=`<br>category:OverWeight`;
    break;
  }
}
  
});
```