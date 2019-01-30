/**
 * Create a new li element, based on the value of the input field.
 */
function newItem() {
  const item = document.getElementById('input');
  const ul = document.getElementById('list');
  const li = document.createElement('li');
  if (item.value.length > 0) {
    setTaskDate(li);
    setTaskTime(li);
    setTaskText(li, item.value);
    li.classList.add('task');
    ul.appendChild(li);
    item.value = '';
    li.addEventListener('click', () => li.remove());
  }
}

/**
 * Set a new task's date elem.
 * @param {DOMobject} li - list element to append date.
 */
function setTaskDate(li) {
  const div = document.createElement('div');
  const date = document.getElementById('date').value;
  div.classList.add('taskDate');
  div.appendChild(document.createTextNode(`${date} `));
  li.appendChild(div);
}

/**
 * Set a new task's time elem.
 * @param {DOMobject} li - list element to append time.
 */
function setTaskTime(li) {
  const div = document.createElement('div');
  const time = document.getElementById('time').value;
  div.classList.add('taskTime');
  div.appendChild(document.createTextNode(`${time} `));
  li.appendChild(div);
}

/**
 * Set a new task's content elem
 * @param {DOMobject} li - list element to append content.
 * @param {string} input - content of todo.
 */
function setTaskText(li, input) {
  const div = document.createElement('div');
  div.classList.add('taskText');
  div.appendChild(document.createTextNode(`${input}`));
  li.appendChild(div);
}


function setDefaultDate() {
  const date = new Date();
  const defaultDate = date.toISOString().slice(0, 10);
  const dateField = document.getElementById('date');
  dateField.value = defaultDate;
}

setDefaultDate();

document.getElementById('input').addEventListener('keydown', (e) => {
  if (e.key.charCodeAt(0) === 69) {
    newItem();
  }
});


