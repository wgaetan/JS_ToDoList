/**
 * Create a new li element, based on the value of the input field
 */
function newItem() {
  const item = document.getElementById('input');
  const ul = document.getElementById('list');
  const li = document.createElement('li');
  if (item.value.length > 0) {
    li.appendChild(document.createTextNode('- ' + item.value));
    ul.appendChild(li);
    item.value = '';
    li.addEventListener('click', () => li.remove());
  }
}

document.getElementById('input').addEventListener('keydown', (e) => {
  console.log(e.key.charCodeAt(0));
  if (e.key.charCodeAt(0) === 69) {
    newItem();
  }
});
