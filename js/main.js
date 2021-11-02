/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

//const content = ['első', 'második', 'harmadik'];
//let listContainer = document.querySelector('#listContainer');
//let ul = document.createElement('ul');
//listContainer.appendChild(ul);

/*const generateList = content.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);

    console.log(listContainer.innerHTML);
}
)*/

const content = ['első', 'második', 'harmadik'];

const generateList = (content =>     
    '<ul>' + content.map(item => ('<li>' + item + '</li>')).reduce((a, b) => a + b) + '</ul>'
);

console.log(generateList(content));