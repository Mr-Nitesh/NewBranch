// Variables to store the dragged item and its original container
let draggedItem = null;
let originalContainer = null;

// Event listeners for drag and drop events
document.addEventListener("dragstart", function(event) {
  if (event.target.classList.contains("item")) {
    draggedItem = event.target;
    originalContainer = event.target.parentNode;
    event.target.classList.add("dragging");
  }
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  if (event.target.classList.contains("container")) {
    event.target.appendChild(draggedItem);
    draggedItem.classList.remove("dragging");
    draggedItem = null;
    originalContainer = null;
    showMessage("Item dropped successfully!");
  }
});

function showMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.innerText = message;
  document.body.appendChild(messageElement);
  setTimeout(function() {
    messageElement.remove();
  }, 2000);
}

function resetContainers() {
  const firstContainer = document.querySelector(".container:first-child");
  const secondContainer = document.querySelector(".container:last-child");

  while (secondContainer.firstChild) {
    firstContainer.appendChild(secondContainer.firstChild);
  }
}