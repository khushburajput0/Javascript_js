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