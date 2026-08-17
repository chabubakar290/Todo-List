in this task i built a simple To-Do List using javascript.
i create an input field and an Add button, then store the tasks in an array using push().
i use a render function to display the complete array inside the <ul> and clear the input after adding a task.
in the test i try three ways to render a list: innerHTML, createElement() with appendChild(), and a template.
innerHTML is simple, createElement() gives more control over DOM elements, and templates are useful for creating HTML structures.
in the challenge i use localStorage with JSON.stringify() and JSON.parse() so the tasks stay saved after refreshing the page.
