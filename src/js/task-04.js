// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати 
// і зменшувати його значення на одиницю.


// Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, 
// всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.





const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value'),
  };
  
    let counterValue = 0;
    refs.decrementBtn.addEventListener('click', onDecrementClick);
    function onDecrementClick() {
        counterValue -= 1;
        refs.span.textContent = counterValue;
    }
    refs.incrementBtn.addEventListener('click', onIncrementClick);
    function onIncrementClick() {
        counterValue += 1;
        refs.span.textContent = counterValue;
    }

