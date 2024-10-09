document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const taskInput = document.getElementById("new-task-description");
      const taskCategory = document.getElementById("task-category")
      const taskList = document.getElementById("tasks");
      
      const newTask = document.createElement("li");
      newTask.textContent = `${taskInput.value} - Category: ${taskCategory.value}`;

      const priorityDropdown = document.createElement("select");

      const highOption = document.createElement("option");
      highOption.value = "high";
      highOption.textContent = "High";
      
      const mediumOption = document.createElement("option");
      mediumOption.value = "medium";
      mediumOption.textContent = "Medium";
      
      const lowOption = document.createElement("option");
      lowOption.value = "low";
      lowOption.textContent = "Low";
      
      priorityDropdown.append(highOption, mediumOption, lowOption);
      newTask.appendChild(priorityDropdown);
      
      priorityDropdown.addEventListener("change", function() {
        if (priorityDropdown.value === "high") {
          newTask.style.color = "red";
        } else if (priorityDropdown.value === "medium") {
          newTask.style.color = "yellow";
        } else {
          newTask.style.color = "green";
        }
      });
      
    // Create Edit and Delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    
    taskList.appendChild(newTask);
    
    taskInput.value = '';
    taskCategory.value = '';
    
    // Delete task functionality
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });

    // Edit task functionality
    editButton.addEventListener("click", () => {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = newTask.firstChild.textContent.split(' - ')[0];  // Extract task description
      
      const editCategory = document.createElement("input");
      editCategory.type = "text";
      editCategory.value = newTask.firstChild.textContent.split('Category: ')[1];  // Extract category
      
      newTask.firstChild.remove();
      newTask.insertBefore(editInput, editButton);
      newTask.insertBefore(editCategory, editButton);
      
      editButton.textContent = "Save";
      
      // Save task functionality
      editButton.addEventListener("click", () => {
        newTask.firstChild.textContent = `${editInput.value} - Category: ${editCategory.value}`;
        newTask.removeChild(editInput);
        newTask.removeChild(editCategory);
        editButton.textContent = "Edit";
      }, { once: true });
    });
  });
});