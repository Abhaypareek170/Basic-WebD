// console.dir(document);
//console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//getElementById
// console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title')
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
headerTitle.style.borderBottom = 'solid 3px #000'

//GetElementByClassName
var items = document.getElementsByClassName('list-group-item')
console.log(items)
for(var i=0;i<items.length;i++){
    items[i].style.color = 'solid black'
}items[2].style.backgroundColor = 'green'
