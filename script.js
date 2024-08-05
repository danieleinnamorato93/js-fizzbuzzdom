//MILESTONE #1
//Preparazione: Verifica collegamento JS/Recupero l'elemento di interesse del Dom 
/*console.log('JS OK')
const container = document.getElementById('container');
//Creo un ciclo for che stampi in console i numeri da 1 a 100, con variazioni del nome per multipli di 3, di 5 e di entrambi  ;
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');

    } else if(i % 3 === 0) {
        console.log('Fizz');

    } else if(i % 5 === 0) {
        console.log('Buzz');
    }
     else {
        console.log(i) ;
    }

}*/


//Milestone #2/ Milestone #3
// Creo elementi da inserire nel contenitore con JS / aggiungo elementi al contenitore /applico stili differenti agli elementi aggiunti al DOM 

const container = document.getElementById('container');

    for (let i = 1; i <= 100; i++) {
      let div = document.createElement('div');
      div.classList.add('box');

      if (i % 3 === 0 && i % 5 === 0) {
        div.textContent = "FizzBuzz";
        div.classList.add('fizzbuzz');
      } else if (i % 3 === 0) {
        div.textContent = "Fizz";
        div.classList.add('fizz');
      } else if (i % 5 === 0) {
        div.textContent = "Buzz";
        div.classList.add('buzz');
      } else {
        div.textContent = i;
      }

      container.appendChild(div);
    }