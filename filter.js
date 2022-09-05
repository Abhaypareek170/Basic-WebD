var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//edit Button
for(let i=0;i<itemList.length;i++){
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    itemList[i].appendChild(editBtn);
}

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description))
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function onFiter(e){
 const text = e.target.value.toLowerCase();
 const items = item.getElementsByTagName('li')
 
 Array.from(items).forEach(function(item)){
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text)!= -1 || description.toLowerCase().indexOf(text)!= -1){
        item.style.display = "block";

    }
    else{
        item.style.display = "none"
    }



}



}
