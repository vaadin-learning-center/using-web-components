import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

window.addEventListener('load', () => {
  initUI();
});

function initUI() {
  const firstNameField = document.querySelector('#firstName');
  const lastNameField = document.querySelector('#lastName');
  const addButton = document.querySelector('#addButton');
  const grid = document.querySelector('#grid');
  let people = [];

  addButton.addEventListener('click', e => {
    people = [
      ...people,
      {
        firstName: firstNameField.value,
        lastName: lastNameField.value
      }
    ];
    grid.items = people;
    firstNameField.value = '';
    lastNameField.value = '';
  });
}
