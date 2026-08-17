let todos = JSON.parse(localStorage.getItem("todos")) || [];
function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    todos.forEach(function(item) {
        let template = document.createElement("template");
        template.innerHTML = `<li>${item}</li>`;
        list.appendChild(template.content.cloneNode(true));
    });
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let input = document.getElementById("input");
    let task = input.value;
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
    input.value= "";
});
render();