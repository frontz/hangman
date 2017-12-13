//słowa do wylosowania
var words = ['telewizor', 'matematyka', 'odkurzacz', 'planeta', 'pantera',  'fortepian', 'geometria', 'kalendarz', 'drukarka', 'wersalka'];

//wylosowane słowo
var chosenWord = words[Math.floor((Math.random() * words.length))];

var play = true;

var letters = [];

//zwiększenie liter
chosenWord = chosenWord.toUpperCase();

//rozbicie na litery i stworzenie tablicy
var splitWord = chosenWord.split('');

console.log(splitWord);


//litera wybrana przez gracza
var letter;

var count = 10;

// document.getElementById('chosen').textContent = chosenWord;

//określenie pustej tablicy zapełnianej podkreślnikami i odgadniętymi literami
var divinedWord = [];

  //pętla zapełniająca tablicę divineWord podkreślnikiem
  for(var i = 0; i < chosenWord.length; i++) {
    divinedWord.push('_');
}

document.getElementById('divine').textContent = divinedWord.join(' ');



choseLetter();




//funkcja sprawdzająca czy wybrana litera znajduje się w wylosowanym słowie, jeśli tak to wkłada ją w odpowiednie miejsce
function putLetter() {
       
   if (play == true) {

    document.getElementById('divine').textContent = divinedWord.join(' ');
    
    for(var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            divinedWord[i] = letter;
            
    console.log(divinedWord); 
    
    } 

    
    document.getElementById('divine').textContent = divinedWord.join(' ');

    }

    
    

    counter();

    document.getElementById('count').textContent = count;


    //jeśli nie ma w tablicy znaku '_' to znaczy, że wszystkie litery zostały odgadnięte
    if(divinedWord.indexOf('_') == -1) {
        document.getElementById('result').textContent = 'Wygrałeś!';
        
    }

}

}



//funkcja odliczająca nietrafione słowa, jeśli nie ma jej w słowie i nie ma jej w tablicy liter już wybranych...
function counter() {
      
    if ((chosenWord.indexOf(letter)) == -1 && count >= 1 && letters.indexOf(letter) == -1) {
          count -= 1;
          //wybrana nietrafiona litera zostaje dołożona do już wybranych i nie powoduje ponownej dekrementacji licznika...
          letters.push(letter);
          console.log('Wybrane litery: ' + letters);  
    }
    if (count == 0) {
        document.getElementById('result').textContent = 'Wiszisz!';
        play = false;
    }
}


//funkcja wybierająca litery
function choseLetter() {

    

    document.getElementById('a').addEventListener('click', function () {
        if (play == true) {
        letter = 'A';
        document.getElementById('a').textContent = '';
        putLetter();
        }
    });

    document.getElementById('b').addEventListener('click', function () {
        if (play == true) {
        letter = 'B';
        document.getElementById('b').textContent = '';
        putLetter();
        }
    });

    document.getElementById('c').addEventListener('click', function () {
        if (play == true) {
        letter = 'C';
        document.getElementById('c').textContent = '';
        putLetter();
        }
    });

    document.getElementById('d').addEventListener('click', function () {
        if (play == true) {
        letter = 'D';
        document.getElementById('d').textContent = '';
        putLetter();
        }
    });

    document.getElementById('e').addEventListener('click', function () {
        if (play == true) {
        letter = 'E';
        document.getElementById('e').textContent = '';
        putLetter();
        }
    });

    document.getElementById('f').addEventListener('click', function () {
        if (play == true) {
        letter = 'F';
        document.getElementById('f').textContent = '';
        putLetter();
        }
    });

    document.getElementById('g').addEventListener('click', function () {
        if (play == true) {
        letter = 'G';
        document.getElementById('g').textContent = '';
        putLetter();
        }
    });

    document.getElementById('h').addEventListener('click', function () {
        if (play == true) {
        letter = 'H';
        document.getElementById('h').textContent = '';
        putLetter();
        }
    });

    document.getElementById('i').addEventListener('click', function () {
        if (play == true) {
        letter = 'I';
        document.getElementById('i').textContent = '';
        putLetter();
        }
    });

    document.getElementById('j').addEventListener('click', function () {
        if (play == true) {
        letter = 'J';
        document.getElementById('j').textContent = '';
        putLetter();
        }
    });

    document.getElementById('k').addEventListener('click', function () {
        if (play == true) {
        letter = 'K';
        document.getElementById('k').textContent = '';
        putLetter();
        }
    });

    document.getElementById('l').addEventListener('click', function () {
        if (play == true) {
        letter = 'L';
        document.getElementById('l').textContent = '';
        putLetter();
        }
    });

    document.getElementById('m').addEventListener('click', function () {
        if (play == true) {
        letter = 'M';
        document.getElementById('m').textContent = '';
        putLetter();
        }
    });

    document.getElementById('n').addEventListener('click', function () {
        if (play == true) {
        if (play == true) {
        letter = 'N';
        document.getElementById('n').textContent = '';
        putLetter();
        }
    }
    });

    document.getElementById('o').addEventListener('click', function () {
        if (play == true) {
        letter = 'O';
        document.getElementById('o').textContent = '';
        putLetter();
        }
    });

    document.getElementById('p').addEventListener('click', function () {
        if (play == true) {
        letter = 'P';
        document.getElementById('p').textContent = '';
        putLetter();
        }
    });

    document.getElementById('q').addEventListener('click', function () {
        if (play == true) {
        letter = 'Q';
        document.getElementById('q').textContent = '';
        putLetter();
        }
    });
    
    document.getElementById('r').addEventListener('click', function () {
        if (play == true) {
        letter = 'R';
        document.getElementById('r').textContent = '';
        putLetter();
        }
    });

    document.getElementById('s').addEventListener('click', function () {
        if (play == true) {
        letter = 'S';
        document.getElementById('s').textContent = '';
        putLetter();
        }
    });

    document.getElementById('t').addEventListener('click', function () {
        if (play == true) {
        letter = 'T';
        document.getElementById('t').textContent = '';
        putLetter();
        }
    });

    document.getElementById('u').addEventListener('click', function () {
        if (play == true) {
        letter = 'U';
        document.getElementById('u').textContent = '';
        putLetter();
        }
    });

    document.getElementById('v').addEventListener('click', function () {
        if (play == true) {
        letter = 'V';
        document.getElementById('v').textContent = '';
        putLetter();
        }
    });

    document.getElementById('w').addEventListener('click', function () {
        if (play == true) {
        letter = 'W';
        document.getElementById('w').textContent = '';
        putLetter();
        }
    });

    document.getElementById('x').addEventListener('click', function () {
        if (play == true) {
        letter = 'X';
        document.getElementById('x').textContent = '';
        putLetter();
        }
    });

    document.getElementById('y').addEventListener('click', function () {
        if (play == true) {
        letter = 'Y';
        document.getElementById('y').textContent = '';
        putLetter();
        }
    });

    document.getElementById('z').addEventListener('click', function () {
        if (play == true) {
        letter = 'Z';
        document.getElementById('z').textContent = '';
        putLetter();
        }
    });
    
    
}
