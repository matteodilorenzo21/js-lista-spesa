// JS SCRIPT RUN CHECK
console.log('JS RUNNING')

const displayList = document.getElementById('shopping-list');

const shoppingList = ['Pane', 'Latte', 'Formaggio', 'Uova', 'Salsa', 'Merdendine', 'Biscotti', 'Fragole', 'Anguria'];


/*let i = 0;
while (i < shoppingList.length) {
    displayList.innerHTML += `<p class="fs-5 pt-1"><input type="checkbox"> ${shoppingList[i]}</p>`
    i++;
}*/


for (let i = 0; i < shoppingList.length; i++) {
    displayList.innerHTML += `<p class="fs-5 pt-1"><input type="checkbox"> ${shoppingList[i]}</p>`;
}

