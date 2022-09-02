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
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// for(var i=0;i<items.length;i++){
//     items[i].style.color = 'solid black'
// }items[2].style.backgroundColor = 'green'

//GetElementByTagName
// var items = document.getElementsByTagName('li')
// console.log(items)
// for(var i=0;i<items.length;i++){
//     items[i].style.color = 'solid black'
// }items[2].style.backgroundColor = 'green'
//QuerySelector
// var secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor = 'green'
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility = 'hidden'

// //QuerySelectorAll
// var secondItem2 = document.querySelectorAll('.list-group-item:nth-child(2)');

// var odd = document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green'
// }
// console.log(odd)

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

var item1 = document.querySelector('li');console.log(item1)
var item = document.querySelector('ul')
var newLi = document.createElement('li')

newLi.className= 'hello2'
newLi.id = 'hello1';
newLi.textContent = 'HEllo'
item.insertBefore(newLi,item1);
