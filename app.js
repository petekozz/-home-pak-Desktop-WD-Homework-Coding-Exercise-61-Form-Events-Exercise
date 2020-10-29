const form = document.querySelector('form');
const ul = document.querySelector('#list');
 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = document.querySelector('#product');
    const qty = document.querySelector('#qty');
    addLi(product.value, qty.value);
    product.value = '';
    qty.value = '';
});
 
 
const addLi = (product, qty) => {
    const li = document.createElement('li');
    li.innerText = (`${qty} ${product}`);
    ul.appendChild(li);
}