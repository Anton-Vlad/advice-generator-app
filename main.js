

const adviceNumEl = document.getElementById('advice-number');
const adviceTextEl = document.getElementById('advice-text');
const adviceRefreshEl = document.getElementById('refresh-advice');

const getAdvice = () => {
  
  adviceNumEl.parentElement.classList.add('loading')
  adviceTextEl.parentElement.classList.add('loading')

  setTimeout(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        adviceNumEl.textContent = data.slip.id;
        adviceTextEl.textContent = data.slip.advice;


          adviceNumEl.parentElement.classList.remove('loading')
          adviceTextEl.parentElement.classList.remove('loading')

      });
    }, 500)
}

if (adviceNumEl && adviceTextEl) {
  getAdvice();
}

if (adviceRefreshEl) {
  adviceRefreshEl.addEventListener("click", getAdvice);
}