document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Funktion zum Hinzufügen einer Aufgabe
    function addTask(taskText) {
        const li = document.createElement('li');

        // Autokorrektur: Erstes Zeichen groß
        const correctedText = taskText.charAt(0).toUpperCase() + taskText.slice(1);

        const taskSpan = document.createElement('span');
        taskSpan.textContent = correctedText;

        // Erstelle das Kontrollkästchen
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Eventlistener für das Häkchen
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.classList.add('done');
            } else {
                li.classList.remove('done');
            }
        });

        // Löschen der Aufgabe
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Löschen';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Füge das Kontrollkästchen, den Text und den Löschbutton hinzu
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // Event für den "Hinzufügen"-Button
    addButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;
        addTask(taskText);
        newTaskInput.value = '';  // Eingabefeld leeren
    });

    // Event für das Drücken der Enter-Taste
    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            if (taskText === '') return;
            addTask(taskText);
            newTaskInput.value = '';  // Eingabefeld leeren
        }
    });
});
