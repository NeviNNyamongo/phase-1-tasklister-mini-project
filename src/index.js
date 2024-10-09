document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.querySelector('form');

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
     
    const newToDo = e.target.querySelector('#new-task-description').value;

    if (newToDo.trim() !== "") {  
      buildToDo(newToDo);
    }

    newTaskForm.reset();
  });
});

function buildToDo(newToDo) {
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  
  deleteButton.textContent = 'x';

  taskLi.textContent = newToDo + " ";
  taskLi.appendChild(deleteButton);

  document.querySelector('#tasks').appendChild(taskLi);
  
  deleteButton.addEventListener('click', handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
