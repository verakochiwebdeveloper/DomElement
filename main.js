// Получаем форму и таблицу из DOM
const plantForm = document.getElementById('plantForm');
const plantTable = document.getElementById('plantTable');

// Массив для хранения объектов растений
let plants = [];

// Обработчик события отправки формы
plantForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const subclass = document.getElementById('subclass').value;

    let newPlant;
    if (subclass === 'Fern') {
        newPlant = new Fern(name, /* другие свойства */);
    } else if (subclass === 'Spruce') {
        newPlant = new Spruce(name, /* другие свойства */);
    }

    plants.push(newPlant);
    localStorage.setItem('plantsData', JSON.stringify(plants));
    
    displayPlants();
});

// Функция отображения данных в таблице
function displayPlants() {
    plantTable.innerHTML = '';
    
    plants.forEach((plant, index) => {
        const row = plantTable.insertRow();
        // Заполнение ячеек таблицы данными из объекта plant
        // Добавление кнопки "Удалить" с обработчиком события удаления объекта
    });
}

// Инициализация данных при загрузке страницы
if (localStorage.getItem('plantsData')) {
    plants = JSON.parse(localStorage.getItem('plantsData'));
    displayPlants();
}
