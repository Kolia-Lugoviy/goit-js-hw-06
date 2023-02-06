


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

