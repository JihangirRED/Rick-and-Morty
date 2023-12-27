// Запросы. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
let API = "https://rickandmortyapi.com/api/character";
let API2 = "http://localhost:8000/characters";
let block1 = document.querySelector(".block-1");
let list = document.querySelector(".list");
let block2 = document.querySelector(".block-2");
let list2 = document.querySelector(".list2");

async function getCharacters() {
  const res = await fetch(API);
  const data = await res.json();
  list.innerHTML = "";
  data.results.forEach((elem) => {
    list.innerHTML += `
    <div>
    <img src="${elem.image}" alt="${elem.name}"/>
    <h5 class="characters">${elem.name}</h5>
    </div>
    `;
  });
}
getCharacters();
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

async function morty() {
  const res = await fetch(API);
  const data = await res.json();
  data.results.forEach((elem) => {
    fetch(API2, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(elem),
    });
  });
}
morty();

async function getCharacters2() {
  const res = await fetch(API2);
  const data = await res.json();
  list2.innerHTML = "";
  data.forEach((elem) => {
    list2.innerHTML += `
      <div>
      <img src="${elem.image}" alt="${elem.name}"/>
      <h5 class="characters">${elem.name}</h5>
      </div>
      `;
  });
}
getCharacters2();

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.



/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
