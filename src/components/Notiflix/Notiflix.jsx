import Notiflix from 'notiflix';

function ifEmptySearchAlert() {
  Notiflix.Notify.failure(
    'The search bar is empty. Please enter your search query.'
  );
}
function ifNoImagesFoundAlert() {
  Notiflix.Notify.failure(
    'На жаль, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка, спробуйте знову.'
  );
}
function ifEndOfSearchAlert() {
  Notiflix.Notify.failure(
    'Нам дуже шкода, але ви досягли кінця результатів пошуку.'
  );
}
function ifImagesFoundAlert(data) {
  Notiflix.Notify.success(`Ура! Ми знайшли ${data.totalHits} зображення.`);
}
function ifSomeProblemAlert(error) {
  Notiflix.Notify.failure(`${error.message}Щось йде не так`);
}
function ifDublicateSearch() {
  Notiflix.Notify.warning('Ви вже шукали Його');
}

export {
  ifEmptySearchAlert,
  ifNoImagesFoundAlert,
  ifEndOfSearchAlert,
  ifImagesFoundAlert,
  ifSomeProblemAlert,
  ifDublicateSearch,
};
