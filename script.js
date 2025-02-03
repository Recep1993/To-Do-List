// EventListener für den Hinzufügen-Button und die Eingabetaste (Enter)
document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('inputText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const inputText = document.getElementById('inputText').value.trim();  // Holen des Texts aus dem Eingabefeld
    if (inputText === "") return; // Falls das Eingabefeld leer ist, nichts tun

    const todoList = document.getElementById('todoList'); // To-Do-Liste (UL-Element)

    const listItem = document.createElement('li'); // Neues Listenelement (LI)

    // Checkbox erstellen
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskCompletion);

    // Text erstellen
    const textNode = document.createElement('span');
    textNode.textContent = inputText;

    // Löschen-Button erstellen
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTask);

    // Die Checkbox, den Text und den Löschen-Button in das Listenelement einfügen
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);

    // Das Listenelement in die To-Do-Liste einfügen
    todoList.appendChild(listItem);

    // Eingabefeld zurücksetzen
    document.getElementById('inputText').value = '';
}

// Funktion zum Markieren der Aufgabe als erledigt
function toggleTaskCompletion(e) {
    const taskText = e.target.nextElementSibling;
    if (e.target.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}

// Funktion zum Löschen einer Aufgabe
function deleteTask(e) {
    const task = e.target.parentElement;
    task.remove();
}
