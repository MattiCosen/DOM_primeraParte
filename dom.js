// Examinando el objeto document //
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Soy un texto desde js';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// getElelemntById //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hola';
// headerTitle.innerText = 'Adios';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hola h3</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GetElementByClassName //
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hola 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Esto da error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

//const arrListItems = Array.from(items);
//console.log(arrListItems);
//arrListItems.forEach(item => {
//    item.style.backgroundColor = "#ccc";
//
//})

// GetElelementsById //
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hola! 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Esto da error
// //items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//const arrListItems = Array.from(items);
//console.log(arrListItems);
//arrListItems.forEach(item => {
//    item.style.backgroundColor = "#ccc";
//
//})

// QuerySelector //
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Hola mundoooo!'

// const submit = document.querySelector('input[type="submit"]');
// submit.value="Enviar"

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const ultimoItem = document.querySelector('.list-group-item:last-child');
// ultimoItem.style.color = 'blue';

// const segundoItem = document.querySelector('.list-group-item:nth-child(2)');
// segundoItem.style.color = 'coral';

// QuerySelectorAll //
// var titulos = document.querySelectorAll('.title');

// console.log(titulos);
// titulos[0].textContent = 'Hola!';

const imp = document.querySelectorAll("li:nth-child(odd)")
imp.forEach(item => {
    item.style.backgroundColor = "yellow"
})

const par = document.querySelectorAll("li:nth-child(even)")
par.forEach(item => {
    item.style.backgroundColor = "red"
})